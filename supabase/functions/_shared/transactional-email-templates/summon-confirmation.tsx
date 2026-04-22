import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Advocatenkantoor Govarts'
const NAVY = '#152747'

interface SummonConfirmationProps {
  name?: string
  insuranceCompany?: string
  policyNumber?: string
  vehicleBrand?: string
  licensePlate?: string
  rolnummer?: string
  rechtbank?: string
  datumZitting?: string
  hasUpload?: boolean
}

const SummonConfirmationEmail = ({
  name,
  insuranceCompany,
  policyNumber,
  vehicleBrand,
  licensePlate,
  rolnummer,
  rechtbank,
  datumZitting,
  hasUpload,
}: SummonConfirmationProps) => (
  <Html lang="nl" dir="ltr">
    <Head />
    <Preview>Bevestiging van uw dagvaarding bij {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {name ? `Bedankt, ${name}` : 'Bedankt voor uw bericht'}
        </Heading>
        <Text style={text}>
          Wij hebben uw dagvaarding goed ontvangen. Hieronder vindt u een overzicht
          van de gegevens die u aan ons heeft doorgegeven. Wij nemen contact op
          met uw verzekeraar en houden u op de hoogte van het verdere verloop.
        </Text>

        <Section style={card}>
          <Heading as="h2" style={h2}>Uw gegevens</Heading>
          {insuranceCompany ? <Text style={row}><strong>Verzekeringsmaatschappij:</strong> {insuranceCompany}</Text> : null}
          {policyNumber ? <Text style={row}><strong>Polisnummer:</strong> {policyNumber}</Text> : null}
          {vehicleBrand ? <Text style={row}><strong>Voertuig:</strong> {vehicleBrand}</Text> : null}
          {licensePlate ? <Text style={row}><strong>Nummerplaat:</strong> {licensePlate}</Text> : null}
          {rolnummer ? <Text style={row}><strong>Rolnummer:</strong> {rolnummer}</Text> : null}
          {rechtbank ? <Text style={row}><strong>Politierechtbank:</strong> {rechtbank}</Text> : null}
          {datumZitting ? <Text style={row}><strong>Datum zitting:</strong> {datumZitting}</Text> : null}
        </Section>

        {hasUpload ? (
          <Section style={card}>
            <Heading as="h2" style={h2}>Uw scan of pdf doorsturen</Heading>
            <Text style={row}>
              U gaf aan een scan of pdf van uw dagvaarding te hebben. Mail dit
              document rechtstreeks naar <strong>erwin@verkeersrecht.info</strong>.
              Vermeld uw naam in de mail zodat wij het bij uw dossier kunnen voegen.
            </Text>
          </Section>
        ) : null}

        <Hr style={hr} />

        <Text style={text}>
          Wij nemen zo spoedig mogelijk contact met u op. Heeft u vragen, dan
          kan u ons bereiken op <strong>+32(0) 11 37 15 11</strong> of via{' '}
          <strong>erwin@verkeersrecht.info</strong>.
        </Text>
        <Text style={footer}>
          Met vriendelijke groeten,<br />
          {SITE_NAME}
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: SummonConfirmationEmail,
  subject: 'Bevestiging ontvangst dagvaarding — Advocatenkantoor Govarts',
  displayName: 'Dagvaarding bevestiging',
  previewData: {
    name: 'Jan Janssens',
    insuranceCompany: 'KBC Verzekeringen',
    policyNumber: 'POL-12345',
    vehicleBrand: 'Volkswagen Golf',
    licensePlate: '1-ABC-123',
    rolnummer: '24/1234',
    rechtbank: 'Politierechtbank Hasselt',
    datumZitting: '2026-05-15',
    hasUpload: true,
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '600px', margin: '0 auto' }
const h1 = { fontSize: '24px', fontWeight: 'bold' as const, color: NAVY, margin: '0 0 16px', fontFamily: '"Playfair Display", Georgia, serif' }
const h2 = { fontSize: '16px', fontWeight: 'bold' as const, color: NAVY, margin: '0 0 12px' }
const text = { fontSize: '15px', color: '#333333', lineHeight: '1.6', margin: '0 0 16px' }
const card = { backgroundColor: '#f5f6f8', padding: '20px 24px', borderRadius: '8px', margin: '24px 0' }
const row = { fontSize: '14px', color: '#333333', lineHeight: '1.6', margin: '0 0 6px' }
const hr = { borderColor: '#e5e7eb', margin: '24px 0' }
const footer = { fontSize: '13px', color: '#666666', margin: '24px 0 0' }
