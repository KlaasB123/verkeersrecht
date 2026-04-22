import { Shield } from "lucide-react";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { EmailLink } from "@/components/EmailLink";

const PrivacyPolicy = () => {
  return (
    <ServicePageLayout
      title="Privacybeleid"
      icon={Shield}
      metaDescription="Privacybeleid van Advocatenkantoor Govarts (verkeersrecht.info) — hoe wij uw persoonsgegevens verwerken in overeenstemming met de AVG."
    >
      <h2 className="text-2xl font-semibold text-foreground mt-0 mb-4">Het belang van dit privacybeleid</h2>
      <p className="mb-6 leading-relaxed">
        Advocatenkantoor Govarts BV, met zetel en kantoor te Residentie Refuga,
        Meldertstraat 13 bus 0.03, 3500 Hasselt, met ondernemingsnummer
        BE 0837.325.675 (hierna “Govarts” of “wij”), uitbater van de website
        verkeersrecht.info, hecht groot belang aan de bescherming van uw privacy
        en persoonsgegevens bij het gebruik van de website en het verlenen van
        onze diensten.
      </p>
      <p className="mb-6 leading-relaxed">
        Alle persoonsgegevens die wij van u ontvangen wanneer u onze website
        bezoekt en/of gebruikt, of die wij op enige andere wijze ontvangen en
        gebruiken voor het verzenden van communicaties of het behandelen van uw
        dossier, worden verwerkt in overeenstemming met de toepasselijke
        regelgeving inzake gegevensbescherming, in het bijzonder de Algemene
        Verordening Gegevensbescherming 2016/679 van 27 april 2016 (“AVG”),
        evenals dit privacybeleid.
      </p>
      <p className="mb-8 leading-relaxed">
        Dit privacybeleid bezorgt u meer informatie over welke persoonsgegevens
        wij verwerken, waarom we ze verwerken, hoe we deze verkrijgen, hoe lang
        we deze bijhouden en met wie we ze delen. Daarnaast krijgt u meer
        informatie over het uitoefenen van uw rechten.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Wie verwerkt uw persoonsgegevens?</h2>
      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Verwerkingsverantwoordelijke</h3>
      <p className="mb-4 leading-relaxed">
        Govarts is verantwoordelijk voor de verwerking van persoonsgegevens bij
        het gebruik van de website of bij het leveren van haar diensten:
      </p>
      <ul className="list-none pl-0 mb-6 space-y-1">
        <li>Advocatenkantoor Govarts BV</li>
        <li>Residentie Refuga, Meldertstraat 13 bus 0.03</li>
        <li>3500 Hasselt</li>
        <li>Ondernemingsnummer: BE 0837.325.675</li>
        <li>Telefoon: +32(0) 11 37 15 11</li>
        <li>
          E-mail:{" "}
          <EmailLink email="erwin@verkeersrecht.info" className="text-primary hover:underline">
            erwin@verkeersrecht.info
          </EmailLink>
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Verwerkers</h3>
      <p className="mb-8 leading-relaxed">
        Govarts verwerkt persoonsgegevens vaak met tussenkomst van
        derde-dienstverleners (o.a. IT- en hostingproviders, e-maildiensten,
        cloudopslag) die hiertoe duidelijke instructies ontvangen en uw
        persoonsgegevens enkel mogen verwerken conform onze instructies en in
        overeenstemming met de AVG. De lijst van verwerkers kan steeds worden
        meegedeeld op eenvoudig verzoek via{" "}
        <EmailLink email="erwin@verkeersrecht.info" className="text-primary hover:underline">
          erwin@verkeersrecht.info
        </EmailLink>
        .
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Welke persoonsgegevens worden verwerkt?</h2>
      <p className="mb-4 leading-relaxed">
        Govarts verbindt zich ertoe bij de verwerking van persoonsgegevens de
        algemene wettelijke beginselen na te leven. Wij verwerken in het bijzonder
        — in toepassing van het principe van minimale gegevensverwerking — enkel
        de gegevens die strikt noodzakelijk zijn voor de doeleinden zoals bepaald
        in dit privacybeleid.
      </p>
      <p className="mb-3 leading-relaxed">Het kan onder meer gaan om volgende categorieën van persoonsgegevens:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Identificatiegegevens (naam, voornaam, adres, telefoonnummer, e-mailadres);</li>
        <li>Door de overheid verstrekte identificatiegegevens (rijksregisternummer, identiteitskaartnummer indien noodzakelijk);</li>
        <li>Gegevens betreffende uw voertuig (merk, type, nummerplaat) en verzekering (verzekeraar, polisnummer);</li>
        <li>Dossiergegevens in verband met verkeersovertredingen, dagvaardingen, ongevallen en gerechtelijke procedures (o.a. PV-nummers, rolnummers, datum zitting, betrokken rechtbank);</li>
        <li>Medische gegevens voor zover noodzakelijk in het kader van schadeafhandeling na een verkeersongeval;</li>
        <li>Financiële gegevens (bankrekeningnummer, facturatiegegevens);</li>
        <li>Gegevens uit briefwisseling, e-mails en geüploade documenten (bv. dagvaardingen) die u aan ons bezorgt;</li>
        <li>Persoonsgegevens vereist in het kader van wettelijke verplichtingen waaraan Govarts dient te voldoen (waaronder de witwaspreventiewetgeving).</li>
      </ul>
      <p className="mb-8 leading-relaxed">
        Deze persoonsgegevens ontvangt Govarts rechtstreeks van u (bijvoorbeeld
        via het contactformulier of het dagvaardingsformulier op deze website,
        per e-mail, telefonisch of tijdens een afspraak) of van derden
        (bijvoorbeeld uw verzekeringsmaatschappij, tegenpartijen, gerechtelijke
        instanties of overheidsinstellingen). Indien u de persoonsgegevens
        rechtstreeks aan ons verschaft, kan u een zekere controle uitoefenen op
        de juistheid en minimalisatie ervan. Indien bepaalde gegevens onjuist of
        onvolledig zouden zijn, kan Govarts beslissen in afwachting van de
        aanvulling of correctie bepaalde functionaliteiten of de behandeling van
        het dossier op te schorten.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Voor welke doeleinden worden uw persoonsgegevens verwerkt?</h2>
      <p className="mb-3 leading-relaxed">Govarts kan uw persoonsgegevens onder meer voor volgende doeleinden verwerken:</p>
      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Het verstrekken van juridisch advies en de behandeling van uw dossier (o.a. in verkeersrecht, verkeersovertredingen, dagvaardingen voor de politierechtbank, schadeafhandeling na verkeersongevallen, geschillen met verzekeraars);</li>
        <li>Het beheer van het cliëntendossier en de cliëntenrelatie;</li>
        <li>Het beantwoorden van uw vragen via het contact- of dagvaardingsformulier op de website;</li>
        <li>Het versturen van bevestigings- en notificatie-e-mails in verband met uw aanvraag;</li>
        <li>Facturatie en boekhoudkundige verwerking;</li>
        <li>Het vervullen van onze wettelijke verplichtingen (o.a. inzake witwaspreventie, deontologie van de balie en bewaartermijnen);</li>
        <li>Het aanbieden, beveiligen en verbeteren van onze website;</li>
        <li>Het beheer van zakelijke relaties met andere ondernemingen, leveranciers en confraters.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Op basis van welke rechtsgrond worden uw persoonsgegevens verwerkt?</h2>
      <p className="mb-4 leading-relaxed">
        De persoonsgegevens die wij verwerken voor het verstrekken van juridisch
        advies en het beheer van uw dossier verwerken wij op basis van het
        sluiten en uitvoeren van een overeenkomst voor het verlenen van
        juridische diensten (art. 6 §1 (b) AVG). Indien u contactpersoon bent
        van een professionele cliënt of een derde, verwerken wij deze
        persoonsgegevens op basis van ons gerechtvaardigd belang om onze
        juridische diensten aan cliënten te verlenen (art. 6 §1 (f) AVG).
      </p>
      <p className="mb-4 leading-relaxed">
        Indien u gebruik maakt van het contact- of dagvaardingsformulier op onze
        website, verwerken wij uw persoonsgegevens en de geüploade documenten op
        basis van uw uitdrukkelijke toestemming (art. 6 §1 (a) AVG), die u geeft
        door het aanvinken van het akkoordvakje bij verzending.
      </p>
      <p className="mb-4 leading-relaxed">
        De rechtsgrond voor het plaatsen van essentiële en functionele cookies
        en het optimaliseren van onze website is ons gerechtvaardigd belang om
        een goed functionerende en gebruiksvriendelijke website aan te bieden
        (art. 6 §1 (f) AVG).
      </p>
      <p className="mb-4 leading-relaxed">
        In het kader van het beheer van zakelijke relaties met andere
        ondernemingen kunnen wij persoonsgegevens van zakenpartners of
        leveranciers verwerken op basis van het sluiten en uitvoeren van een
        overeenkomst (art. 6 §1 (b) AVG).
      </p>
      <p className="mb-8 leading-relaxed">
        Voor zover wij gehouden zijn aan specifieke wettelijke verplichtingen
        (bv. inzake witwaspreventie of bewaartermijnen) verwerken wij uw
        gegevens op basis van die wettelijke verplichting (art. 6 §1 (c) AVG).
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Hoe lang bewaren wij uw persoonsgegevens?</h2>
      <p className="mb-4 leading-relaxed">
        Wij bewaren uw persoonsgegevens niet langer dan strikt noodzakelijk is
        voor de doeleinden waarvoor ze zijn verzameld en verwerkt.
      </p>
      <p className="mb-4 leading-relaxed">
        In het kader van onze dienstverlening aan cliënten en onze wettelijke
        verplichtingen inzake de preventie van witwassen van geld en de
        financiering van terrorisme, bewaren wij relevante persoonsgegevens
        gedurende minstens tien jaar na het einde van de cliëntenrelatie of na
        afsluiting van het desbetreffende dossier.
      </p>
      <p className="mb-4 leading-relaxed">
        Inzendingen via het dagvaardingsformulier worden enkel per e-mail aan
        ons en aan u bezorgd; bijhorende geüploade documenten worden tijdelijk
        opgeslagen in een beveiligde omgeving en zijn enkel toegankelijk via een
        beveiligde downloadlink met een geldigheidsduur van zeven (7) dagen.
        Daarna kan het document verder verwerkt worden in het cliëntendossier
        volgens de hierboven vermelde bewaartermijn.
      </p>
      <p className="mb-8 leading-relaxed">
        Persoonsgegevens die wij verwerken voor marketingdoeleinden (zoals het
        verzenden van nieuwsbrieven, indien van toepassing) worden bewaard tot
        op het moment dat u zich uitschrijft of ons laat weten deze communicatie
        niet langer te wensen.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Met wie delen wij uw persoonsgegevens?</h2>
      <p className="mb-4 leading-relaxed">
        Wij kunnen uw persoonsgegevens delen met derden voor zover dit
        noodzakelijk is voor de behartiging van uw belangen of voor de
        uitvoering van onze dienstverlening, zoals overheidsinstanties,
        rechtbanken en hoven, gerechtsdeurwaarders, het openbaar ministerie en
        de politie, (advocaten van) wederpartijen, verzekeringsmaatschappijen,
        experten, geneesheren-deskundigen en vertaalbureaus. Daarnaast hebben
        onze IT- en hostingproviders, e-mail- en cloudleveranciers in beperkte
        mate toegang tot uw persoonsgegevens om hun diensten te kunnen leveren.
      </p>
      <p className="mb-8 leading-relaxed">
        Deze derden hebben enkel toegang tot uw persoonsgegevens voor zover dat
        noodzakelijk is voor de dienstverlening. Bij doorgiften aan derde
        partijen zorgen wij er steeds voor dat passende beschermingsmaatregelen
        worden genomen zodat deze derden onze privacynormen eerbiedigen, evenals
        de wetten en reglementen inzake gegevensbescherming.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Wat zijn uw rechten?</h2>
      <p className="mb-4 leading-relaxed">U kan ons altijd contacteren voor de uitoefening van de volgende rechten:</p>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Recht op inzage:</strong> u heeft het recht om inzage te verkrijgen van de persoonsgegevens die wij verwerken en hoe en waarom ze verwerkt worden, alsook een kopie te ontvangen van deze gegevens.</li>
        <li><strong>Recht op verbetering:</strong> u heeft het recht om een verbetering of vervollediging te vragen van uw persoonsgegevens wanneer u merkt dat wij onjuiste of onvolledige gegevens van u verwerken.</li>
        <li><strong>Recht op verwijdering (‘recht om vergeten te worden’):</strong> u heeft in bepaalde specifieke gevallen het recht om verwijdering van uw gegevens te verkrijgen.</li>
        <li><strong>Recht op beperking:</strong> u heeft het recht om in bepaalde specifieke gevallen de verwerking van uw persoonsgegevens te laten beperken.</li>
        <li><strong>Recht op overdraagbaarheid:</strong> u heeft het recht om de persoonsgegevens die u aan ons heeft verstrekt te verkrijgen in een gestructureerde, gangbare en machineleesbare vorm, en om die persoonsgegevens aan een andere verwerkingsverantwoordelijke over te dragen.</li>
        <li><strong>Recht van bezwaar:</strong> u heeft het recht om vanwege met uw specifieke situatie verband houdende redenen bezwaar te maken tegen de verwerking van uw persoonsgegevens op basis van ons gerechtvaardigd belang.</li>
        <li><strong>Recht om uw toestemming in te trekken:</strong> indien de verwerking gebaseerd is op uw toestemming, kan u die toestemming op elk moment intrekken zonder afbreuk te doen aan de rechtmatigheid van de verwerking vóór de intrekking.</li>
      </ul>
      <p className="mb-4 leading-relaxed">
        U kan bovenstaande rechten uitoefenen door een e-mail te sturen naar{" "}
        <EmailLink email="erwin@verkeersrecht.info" className="text-primary hover:underline">
          erwin@verkeersrecht.info
        </EmailLink>
        . Wanneer u deze rechten wenst uit te oefenen kunnen wij u vragen om uw
        identiteit te bewijzen, bijvoorbeeld door een kopie van de voorzijde van
        uw identiteitskaart per post of per mail op te sturen.
      </p>
      <p className="mb-3 leading-relaxed">
        Indien u van mening bent dat uw rechten niet zijn gerespecteerd, heeft u
        het recht om een klacht in te dienen bij de toezichthoudende
        autoriteit, namelijk de Gegevensbeschermingsautoriteit (GBA):
      </p>
      <ul className="list-none pl-0 mb-8 space-y-1">
        <li>Drukpersstraat 35, 1000 Brussel</li>
        <li>Telefoon: +32 (0)2 274 48 00</li>
        <li>
          E-mail:{" "}
          <EmailLink email="contact@apd-gba.be" className="text-primary hover:underline">
            contact@apd-gba.be
          </EmailLink>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Beveiliging</h2>
      <p className="mb-4 leading-relaxed">
        Wij hebben passende technische en organisatorische maatregelen
        geïmplementeerd om de vertrouwelijkheid van uw persoonsgegevens te
        waarborgen en uw gegevens te beschermen tegen onopzettelijke of
        onwettige vernietiging, verlies, wijziging, ongeautoriseerde
        openbaarmaking of toegang. Documenten die u via deze website uploadt,
        worden bewaard in een beveiligde, niet-publieke omgeving en zijn enkel
        toegankelijk via een tijdelijke beveiligde link.
      </p>
      <p className="mb-8 leading-relaxed">
        Wij hebben de nodige contractuele afspraken gemaakt met de derde
        partijen met wie wij samenwerken en geven uw persoonsgegevens niet door
        buiten de Europese Economische Ruimte zonder de garantie dat uw gegevens
        daar ook een evenwaardig beschermingsniveau genieten.
      </p>

      <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4">Updates</h2>
      <p className="mb-4 leading-relaxed">
        Dit privacybeleid kan van tijd tot tijd worden gewijzigd, binnen de
        beperkingen van de toepasselijke regelgeving inzake gegevensbescherming.
        Via de website verkeersrecht.info heeft u steeds toegang tot de meest
        actuele versie.
      </p>
      <p className="text-sm text-muted-foreground mt-8">
        Laatst bijgewerkt: april 2026.
      </p>
    </ServicePageLayout>
  );
};

export default PrivacyPolicy;
