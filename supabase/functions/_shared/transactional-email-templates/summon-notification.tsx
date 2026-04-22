import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text, Hr, Link,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const NAVY = '#152747'

interface SummonNotificationProps {
  name?: string
  email?: string
  phone?: string
  insuranceCompany?: string
  policyNumber?: string
  vehicleBrand?: string
  licensePlate?: string
  rolnummer?: string
  rechtbank?: string
  datumZitting?: string
  uploadMethod?: string
  documentUrl?: string
  submissionId?: string
}

const SummonNotificationEmail = ({
  name,
  email,
  phone,
  insuranceCompany,
  policyNumber,
  vehicleBrand,
  licensePlate,
  rolnummer,
  rechtbank,
  datumZitting,
  uploadMethod,
  documentUrl,
  submissionId,
}: SummonNotificationProps) => (
  <Html lang="nl" dir="ltr">
    <Head />
    <Preview>Nieuwe dagvaarding ontvangen via verkeersrecht.info</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Nieuwe dagvaarding ontvangen</Heading>
        <Text style={text}>
          Er is een nieuwe dagvaarding doorgestuurd via het formulier op
          verkeersrecht.info.
        </Text>

        <Section style={card}>
          <Heading as="h2" style={h2}>Contactgegevens</Heading>
          {name ? <Text style={row}><strong>Naam:</strong> {name}</Text> : null}
          {email ? <Text style={row}><strong>E-mail:</strong> {email}</Text> : null}
          {phone ? <Text style={row}><strong>Telefoon:</strong> {phone}</Text> : null}
        </Section>

        <Section style={card}>
          <Heading as="h2" style={h2}>Dossiergegevens</Heading>
          {insuranceCompany ? <Text style={row}><strong>Verzekeraar:</strong> {insuranceCompany}</Text> : null}
          {policyNumber ? <Text style={row}><strong>Polisnummer:</strong> {policyNumber}</Text> : null}
          {vehicleBrand ? <Text style={row}><strong>Voertuig:</strong> {vehicleBrand}</Text> : null}
          {licensePlate ? <Text style={row}><strong>Nummerplaat:</strong> {licensePlate}</Text> : null}
          {rolnummer ? <Text style={row}><strong>Rolnummer:</strong> {rolnummer}</Text> : null}
          {rechtbank ? <Text style={row}><strong>Rechtbank:</strong> {rechtbank}</Text> : null}
          {datumZitting ? <Text style={row}><strong>Datum zitting:</strong> {datumZitting}</Text> : null}
          {uploadMethod ? <Text style={row}><strong>Methode:</strong> {uploadMethod}</Text> : null}
        </Section>

        {documentUrl ? (
          <Section style={card}>
            <Heading as="h2" style={h2}>Geüploade dagvaarding</Heading>
            <Text style={row}>
              <Link href={documentUrl} style={link}>Document downloaden</Link>
            </Text>
            <Text style={{ ...row, fontSize: '12px', color: '#666' }}>
              Link is 7 dagen geldig.
            </Text>
          </Section>
        ) : null}

        <Hr style={hr} />
        <Text style={footer}>
          Submission ID: {submissionId ?? '—'}
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: SummonNotificationEmail,
  subject: (data: Record<string, any>) =>
    `Nieuwe dagvaarding — ${data?.name ?? 'onbekend'}`,
  displayName: 'Dagvaarding notificatie (intern)',
  to: 'erwin@verkeersrecht.info',
  previewData: {
    name: 'Jan Janssens',
    email: 'jan@example.com',
    phone: '+32 470 12 34 56',
    insuranceCompany: 'KBC Verzekeringen',
    policyNumber: 'POL-12345',
    vehicleBrand: 'Volkswagen Golf',
    licensePlate: '1-ABC-123',
    rolnummer: '24/1234',
    rechtbank: 'Politierechtbank Hasselt',
    datumZitting: '2026-05-15',
    uploadMethod: 'upload',
    documentUrl: 'https://example.com/file.pdf',
    submissionId: 'abc-123',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Inter, Arial, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '600px', margin: '0 auto' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: NAVY, margin: '0 0 16px', fontFamily: '"Playfair Display", Georgia, serif' }
const h2 = { fontSize: '15px', fontWeight: 'bold' as const, color: NAVY, margin: '0 0 12px' }
const text = { fontSize: '15px', color: '#333333', lineHeight: '1.6', margin: '0 0 16px' }
const card = { backgroundColor: '#f5f6f8', padding: '16px 20px', borderRadius: '8px', margin: '16px 0' }
const row = { fontSize: '14px', color: '#333333', lineHeight: '1.6', margin: '0 0 6px' }
const link = { color: NAVY, textDecoration: 'underline' }
const hr = { borderColor: '#e5e7eb', margin: '24px 0' }
const footer = { fontSize: '12px', color: '#999999', margin: '16px 0 0' }
