import { HelpCircle, Send } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { EmailLink } from "@/components/EmailLink";

const VragenAdvies = () => {
  return (
    <ServicePageLayout title="Vragen & advies" icon={HelpCircle}>
      <p className="text-lg leading-relaxed mb-6">
        Heeft u een specifieke vraag of wenst u een kort advies over uw probleem, kan dit via onderstaande rubriek. Het antwoord wordt u zo spoedig mogelijk toegezonden. Uw e-mail wordt tevens naar uzelf verzonden, zodat u kunt controleren of uw e-mailadres correct werd ingegeven. Tevens kan u zich zo ook nog herinneren welke vraag u precies gesteld heeft.
      </p>

      <p className="mb-8">
        Het gratis antwoord zal gebaseerd zijn op de gegevens die u ons ter beschikking stelt. U dient er echter rekening mee te houden dat het eerste advies kort en bondig zal zijn. Voor verdere informatie kan u per mail contact opnemen via{" "}
        <EmailLink email="erwin@verkeersrecht.info" className="text-primary hover:underline">
          erwin@verkeersrecht.info
        </EmailLink>
        .
      </p>

      <Card className="border-0 shadow-lg">
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

            <div className="space-y-2">
              <Label htmlFor="question">Uw vraag *</Label>
              <Textarea
                id="question"
                placeholder="Stel hier uw vraag..."
                className="min-h-[150px]"
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            >
              VERSTUREN
              <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </ServicePageLayout>
  );
};

export default VragenAdvies;