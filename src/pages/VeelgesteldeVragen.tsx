import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Car, Wine, Scale, Coins, ShieldAlert } from "lucide-react";

const faqCategories = [
  {
    title: "Rijbewijs",
    icon: Car,
    questions: [
      {
        q: "Mijn rijbewijs werd ingetrokken. Wat nu?",
        a: "Bij een onmiddellijke intrekking heeft de politie uw rijbewijs ter plaatse ingenomen. U heeft in principe 15 dagen om uw voertuig te besturen, maar daarna mag u niet meer rijden. Een advocaat kan de zaak voor de politierechtbank bepleiten en in bepaalde gevallen de duur van het rijverbod beperken of een beperkt rijbewijs bekomen voor professionele verplaatsingen.",
      },
      {
        q: "Kan ik een rijverbod vermijden?",
        a: "Dat hangt af van de feiten en uw rijverleden. In sommige gevallen kan de rechter kiezen voor een alternatieve maatregel zoals een alcoholslot, een rijverbod beperkt in de tijd of een opleiding. Een advocaat kan uw dossier zo voorbereiden dat uw kansen op een mildere sanctie maximaal zijn.",
      },
      {
        q: "Wat is een beperkt rijbewijs en kan ik dat aanvragen?",
        a: "Een beperkt rijbewijs laat u toe te rijden voor specifieke doeleinden, zoals woon-werkverkeer, zelfs tijdens een rijverbod. De rechter kan dit toekennen op vraag van uw advocaat. Het wordt vaker toegekend aan mensen zonder rijverleden en met professionele noodwendigheid.",
      },
    ],
  },
  {
    title: "Alcohol & drugs",
    icon: Wine,
    questions: [
      {
        q: "Wat zijn de gevolgen van rijden onder invloed?",
        a: "Bij een promillage tussen 0,8 en 1,2 promille riskeert u een boete en een rijverbod van minstens 8 dagen. Boven 1,2 promille lopen de sancties flink op: hogere boetes, langer rijverbod en mogelijk verplichte medische en psychologische onderzoeken. Recidive of een ongeval verzwaart de straf aanzienlijk.",
      },
      {
        q: "Kan ik een bloedtest aanvechten?",
        a: "Ja, de wettelijke procedure bij het afnemen van een bloed- of urinetest is strikt gereglementeerd. Fouten in de procedure kunnen leiden tot uitsluiting van het bewijs. Een advocaat analyseert of de test conform de wet werd uitgevoerd.",
      },
      {
        q: "Wat is een alcoholslot en wanneer wordt het opgelegd?",
        a: "Het alcoholslot is een apparaat dat verhindert dat u uw auto start als u alcohol heeft gedronken. Rechters kunnen dit opleggen als alternatief voor een rijverbod. Het gaat gepaard met verplichte medische en psychologische begeleiding en is duurder dan een klassiek rijverbod, maar laat u wel rijden.",
      },
    ],
  },
  {
    title: "Procedure",
    icon: Scale,
    questions: [
      {
        q: "Hoe verloopt een zaak voor de politierechtbank?",
        a: "Na een verkeersinbreuk ontvangt u een dagvaarding of verschijnt u op een vastgestelde datum. Op de zitting legt u uw standpunt uit, bij voorkeur bijgestaan door een advocaat. De rechter spreekt een vonnis uit, waartegen u beroep kunt aantekenen bij de correctionele rechtbank.",
      },
      {
        q: "Heb ik een advocaat nodig voor de politierechtbank?",
        a: "U bent niet verplicht een advocaat mee te nemen, maar het is sterk aan te raden. Zeker bij ernstige inbreuken, recidive of dreigende intrekking van uw rijbewijs kan een ervaren verkeersrechtadvocaat het verschil maken tussen een zware en een mildere straf.",
      },
      {
        q: "Binnen welke termijn moet ik reageren na een verkeersongeval?",
        a: "Voor burgerlijke vorderingen na een verkeersongeval geldt doorgaans een verjaringstermijn van 5 jaar. Toch is het raadzaam zo snel mogelijk een advocaat te raadplegen, zodat bewijzen worden veiliggesteld en de procedure correct wordt opgestart.",
      },
    ],
  },
  {
    title: "Kosten",
    icon: Coins,
    questions: [
      {
        q: "Wat kost een consultatie?",
        a: "Het eerste contact is gratis en vrijblijvend. Zo kunt u uw situatie toelichten en een eerlijk beeld krijgen van uw kansen en de mogelijke kosten, zonder dat u zich meteen verbindt. Neem gerust contact op via het contactformulier of per telefoon.",
      },
      {
        q: "Dekt mijn rechtsbijstandsverzekering de kosten?",
        a: "Veel autoverzekeringen of gezinspolissen bevatten een rechtsbijstandswaarborg. Die kan de advocaatkosten (deels) dekken. Het is belangrijk uw polis na te kijken en tijdig aangifte te doen bij uw verzekeraar. Uw advocaat kan u ook hierbij begeleiden.",
      },
    ],
  },
  {
    title: "Aansprakelijkheid",
    icon: ShieldAlert,
    questions: [
      {
        q: "Ik was betrokken bij een verkeersongeval. Wie is aansprakelijk?",
        a: "De aansprakelijkheid wordt bepaald op basis van de verkeerswetgeving, getuigenverklaringen, politierapporten en eventuele camerabeelden. In België geldt een vermoeden van aansprakelijkheid voor de bestuurder ten aanzien van kwetsbare weggebruikers. Een advocaat analyseert de feiten en verdedigt uw belangen.",
      },
      {
        q: "Ik werd aangereden als voetganger of fietser. Heb ik recht op schadevergoeding?",
        a: "Als zwakke weggebruiker bent u bijzonder goed beschermd door de Belgische wet. In de meeste gevallen heeft u recht op volledige vergoeding van uw schade, ook al droeg u zelf een gedeelte van de fout. Een advocaat helpt u de maximale vergoeding te bekomen.",
      },
    ],
  },
];

const VeelgesteldeVragen = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="inline-block text-navy-light font-semibold text-sm uppercase tracking-wider mb-3">
              FAQ
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Veelgestelde Vragen
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Hier vindt u antwoorden op de meest voorkomende vragen over verkeersrecht, procedures en kosten.
            </p>
          </div>

          <div className="space-y-8">
            {faqCategories.map((category) => (
              <div key={category.title} className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{category.title}</h2>
                </div>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.title}-${index}`}
                      className="border border-border rounded-lg px-4 data-[state=open]:bg-muted/50"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VeelgesteldeVragen;
