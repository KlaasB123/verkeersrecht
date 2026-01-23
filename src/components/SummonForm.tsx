import { useState } from "react";
import { Upload, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const SummonForm = () => {
  const [uploadMethod, setUploadMethod] = useState<"upload" | "manual">("upload");

  return (
    <section className="py-20 bg-muted" id="form">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-2xl border-0">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-foreground" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                Dagvaarding Doorsturen
              </CardTitle>
              <CardDescription className="text-base mt-4 max-w-xl mx-auto">
                U kan uw dagvaarding doorsturen, dan bent u onmiddellijk geholpen en hoeft u niets meer te ondernemen. Wij nemen zelf contact op met uw verzekeraar.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-6">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Naam *</Label>
                    <Input id="name" placeholder="Uw volledige naam" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefoon</Label>
                    <Input id="phone" type="tel" placeholder="+32 ..." />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail *</Label>
                  <Input id="email" type="email" placeholder="uw@email.be" required />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="insurance">Verzekeringsmaatschappij *</Label>
                    <Input id="insurance" placeholder="Naam verzekeraar" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="policy">Polisnummer *</Label>
                    <Input id="policy" placeholder="Uw polisnummer" required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="vehicle">Merk voertuig *</Label>
                    <Input id="vehicle" placeholder="bv. Volkswagen Golf" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="plate">Nummerplaat *</Label>
                    <Input id="plate" placeholder="1-ABC-123" required />
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
                    <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-gold transition-colors cursor-pointer bg-background">
                      <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                      <p className="text-muted-foreground mb-2">
                        Sleep uw bestand hierheen of klik om te uploaden
                      </p>
                      <p className="text-sm text-muted-foreground">
                        PDF, JPG of PNG (max 10MB)
                      </p>
                      <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                    </div>
                  )}

                  {uploadMethod === "manual" && (
                    <div className="space-y-4 p-4 bg-background rounded-xl">
                      <p className="text-sm text-muted-foreground">
                        U kan ook de gegevens faxen via 011/37.15.12 of per post aan ons bezorgen.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="rolnummer">Rolnummer</Label>
                          <Input id="rolnummer" placeholder="Rolnummer" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="rechtbank">Welke Politierechtbank</Label>
                          <Input id="rechtbank" placeholder="Rechtbank" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="datum">Datum zitting</Label>
                        <Input id="datum" type="date" />
                      </div>
                    </div>
                  )}
                </div>

                <p className="text-sm text-muted-foreground">
                  Dit invulformulier zal voor het gemak eveneens naar uw eigen e-mailadres worden verstuurd.
                </p>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-gold hover:opacity-90 text-foreground font-semibold text-lg py-6"
                >
                  Dagvaarding Versturen
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
