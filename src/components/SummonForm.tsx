import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Upload, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB
const ALLOWED_MIME = ["application/pdf", "image/jpeg", "image/png"];

export const SummonForm = () => {
  const [uploadMethod, setUploadMethod] = useState<"upload" | "manual">("upload");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] ?? null;
    if (f) {
      if (f.size > MAX_FILE_BYTES) {
        toast({ title: "Bestand te groot", description: "Maximaal 10 MB toegestaan.", variant: "destructive" });
        e.target.value = "";
        return;
      }
      if (!ALLOWED_MIME.includes(f.type)) {
        toast({ title: "Ongeldig bestandstype", description: "Enkel PDF, JPG of PNG.", variant: "destructive" });
        e.target.value = "";
        return;
      }
    }
    setFile(f);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim() || null;
    const insuranceCompany = String(fd.get("insurance") ?? "").trim();
    const policyNumber = String(fd.get("policy") ?? "").trim();
    const vehicleBrand = String(fd.get("vehicle") ?? "").trim();
    const licensePlate = String(fd.get("plate") ?? "").trim();
    const rolnummer = String(fd.get("rolnummer") ?? "").trim() || null;
    const rechtbank = String(fd.get("rechtbank") ?? "").trim() || null;
    const datum = String(fd.get("datum") ?? "").trim() || null;

    if (!name || !email || !insuranceCompany || !policyNumber || !vehicleBrand || !licensePlate) {
      toast({ title: "Vul alle verplichte velden in", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Ongeldig e-mailadres", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    const submissionId = crypto.randomUUID();

    try {
      let signedUrl: string | null = null;

      if (uploadMethod === "upload" && file) {
        const ext = file.name.split(".").pop()?.toLowerCase() ?? "bin";
        const documentPath = `${submissionId}.${ext}`;
        const { error: upErr } = await supabase.storage
          .from("summon-documents")
          .upload(documentPath, file, { contentType: file.type, upsert: false });
        if (upErr) throw upErr;

        const { data: signed } = await supabase.storage
          .from("summon-documents")
          .createSignedUrl(documentPath, 60 * 60 * 24 * 7);
        signedUrl = signed?.signedUrl ?? null;
      }

      // Notification to the firm (with download link if file uploaded)
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "summon-notification",
          recipientEmail: "erwin@verkeersrecht.info",
          idempotencyKey: `summon-notify-${submissionId}`,
          templateData: {
            name,
            email,
            phone: phone ?? undefined,
            insuranceCompany,
            policyNumber,
            vehicleBrand,
            licensePlate,
            rolnummer: rolnummer ?? undefined,
            rechtbank: rechtbank ?? undefined,
            datumZitting: datum ?? undefined,
            uploadMethod,
            documentUrl: signedUrl ?? undefined,
            submissionId,
          },
        },
      });

      // Confirmation to the submitter
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "summon-confirmation",
          recipientEmail: email,
          idempotencyKey: `summon-confirm-${submissionId}`,
          templateData: {
            name,
            insuranceCompany,
            policyNumber,
            vehicleBrand,
            licensePlate,
            rolnummer: rolnummer ?? undefined,
            rechtbank: rechtbank ?? undefined,
            datumZitting: datum ?? undefined,
            hasUpload: !!signedUrl,
          },
        },
      });

      setSubmitted(true);
      toast({ title: "Dagvaarding verstuurd", description: "U ontvangt een bevestiging per e-mail." });
      form.reset();
      setFile(null);
    } catch (err: any) {
      console.error("Submit failed", err);
      toast({
        title: "Versturen mislukt",
        description: err?.message ?? "Er ging iets mis. Probeer opnieuw of mail erwin@verkeersrecht.info.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-muted" id="form">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-2xl border-0">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                {submitted ? (
                  <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
                ) : (
                  <Send className="w-8 h-8 text-primary-foreground" />
                )}
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                {submitted ? "DAGVAARDING ONTVANGEN" : "DAGVAARDING DOORSTUREN"}
              </CardTitle>
              <CardDescription className="text-base mt-4 max-w-xl mx-auto">
                {submitted
                  ? "Wij hebben uw dagvaarding goed ontvangen. U ontvangt een bevestiging per e-mail. Wij nemen contact met u op."
                  : "U kan uw dagvaarding doorsturen, dan bent u onmiddellijk geholpen en hoeft u niets meer te ondernemen. Wij nemen zelf contact op met uw verzekeraar."}
              </CardDescription>
            </CardHeader>

            {!submitted && (
              <CardContent className="pt-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Naam *</Label>
                      <Input id="name" name="name" placeholder="Uw volledige naam" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefoon</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+32 ..." />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input id="email" name="email" type="email" placeholder="uw@email.be" required />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="insurance">Verzekeringsmaatschappij *</Label>
                      <Input id="insurance" name="insurance" placeholder="Naam verzekeraar" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="policy">Polisnummer *</Label>
                      <Input id="policy" name="policy" placeholder="Uw polisnummer" required />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="vehicle">Merk voertuig *</Label>
                      <Input id="vehicle" name="vehicle" placeholder="bv. Volkswagen Golf" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="plate">Nummerplaat *</Label>
                      <Input id="plate" name="plate" placeholder="1-ABC-123" required />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Dagvaarding *</Label>
                    <RadioGroup
                      value={uploadMethod}
                      onValueChange={(val) => setUploadMethod(val as "upload" | "manual")}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="upload" id="upload" />
                        <Label htmlFor="upload" className="cursor-pointer font-normal">
                          Ik heb een scan of pdf van mijn dagvaarding
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="manual" id="manual" />
                        <Label htmlFor="manual" className="cursor-pointer font-normal">
                          Ik zal alle gegevens ingeven via dit formulier
                        </Label>
                      </div>
                    </RadioGroup>

                    {uploadMethod === "upload" && (
                      <div
                        className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/30 transition-colors cursor-pointer bg-background"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                        <p className="text-muted-foreground mb-2">
                          {file ? file.name : "Sleep uw bestand hierheen of klik om te uploaden"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          PDF, JPG of PNG (max 10MB)
                        </p>
                        <input
                          ref={fileInputRef}
                          type="file"
                          className="hidden"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                        />
                      </div>
                    )}

                    {uploadMethod === "manual" && (
                      <div className="space-y-4 p-4 bg-background rounded-xl">
                        <p className="text-sm text-muted-foreground">
                          U kan de gegevens ook per post aan ons bezorgen.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="rolnummer">Rolnummer</Label>
                            <Input id="rolnummer" name="rolnummer" placeholder="Rolnummer" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="rechtbank">Welke Politierechtbank</Label>
                            <Input id="rechtbank" name="rechtbank" placeholder="Rechtbank" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="datum">Datum zitting</Label>
                          <Input id="datum" name="datum" type="date" />
                        </div>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Een kopie van uw inzending wordt automatisch naar uw eigen e-mailadres gestuurd ter bevestiging.
                  </p>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg py-6"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        VERSTUREN...
                      </>
                    ) : (
                      <>
                        DAGVAARDING VERSTUREN
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
