import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { SEO } from "@/components/SEO";

type Status = "loading" | "valid" | "already" | "invalid" | "success" | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token") ?? "";
  const [status, setStatus] = useState<Status>("loading");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    fetch(
      `${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
      { headers: { apikey: supabaseAnonKey } }
    )
      .then((r) => r.json())
      .then((data) => {
        if (data.valid) setStatus("valid");
        else if (data.reason === "already_unsubscribed") setStatus("already");
        else setStatus("invalid");
      })
      .catch(() => setStatus("invalid"));
  }, [token]);

  const handleConfirm = async () => {
    setSubmitting(true);
    const { data, error } = await supabase.functions.invoke(
      "handle-email-unsubscribe",
      { body: { token } }
    );
    setSubmitting(false);
    if (error) {
      setStatus("error");
      return;
    }
    if (data?.success) setStatus("success");
    else if (data?.reason === "already_unsubscribed") setStatus("already");
    else setStatus("error");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <SEO title="Uitschrijven — Advocatenkantoor Govarts" description="Schrijf u uit voor e-mails van Advocatenkantoor Govarts." />
      <Card className="max-w-md w-full">
        <CardContent className="pt-8 pb-8 text-center space-y-4">
          {status === "loading" && (
            <>
              <Loader2 className="w-10 h-10 text-primary animate-spin mx-auto" />
              <p className="text-muted-foreground">Even geduld...</p>
            </>
          )}
          {status === "valid" && (
            <>
              <h1 className="text-2xl font-bold text-foreground">Uitschrijven bevestigen</h1>
              <p className="text-muted-foreground">
                Klik hieronder om u uit te schrijven van onze e-mails.
              </p>
              <Button onClick={handleConfirm} disabled={submitting} size="lg" className="w-full">
                {submitting ? "Bezig..." : "Bevestig uitschrijving"}
              </Button>
            </>
          )}
          {status === "success" && (
            <>
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
              <h1 className="text-2xl font-bold text-foreground">U bent uitgeschreven</h1>
              <p className="text-muted-foreground">U ontvangt geen verdere e-mails meer.</p>
            </>
          )}
          {status === "already" && (
            <>
              <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
              <h1 className="text-2xl font-bold text-foreground">Reeds uitgeschreven</h1>
              <p className="text-muted-foreground">U bent al uitgeschreven van onze e-mails.</p>
            </>
          )}
          {(status === "invalid" || status === "error") && (
            <>
              <XCircle className="w-12 h-12 text-destructive mx-auto" />
              <h1 className="text-2xl font-bold text-foreground">Er ging iets mis</h1>
              <p className="text-muted-foreground">
                De link is ongeldig of verlopen. Neem gerust contact met ons op via erwin@verkeersrecht.info.
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Unsubscribe;
