import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const sections = {
  fr: [
    {
      title: "Responsable du traitement",
      body: "Brussels Net Services\nRue Pletinckx 10 \u2014 1000 Bruxelles\nE-mail : info@bns.brussels\nT\u00e9l. : 0471/95.02.07",
    },
    {
      title: "Donn\u00e9es collect\u00e9es",
      body: "Nous collectons uniquement les donn\u00e9es que vous nous fournissez volontairement via nos formulaires : nom, pr\u00e9nom, adresse e-mail, num\u00e9ro de t\u00e9l\u00e9phone, adresse postale et le contenu de votre message ou demande.",
    },
    {
      title: "Finalit\u00e9 du traitement",
      body: "Vos donn\u00e9es sont utilis\u00e9es exclusivement pour :\n\u2022 Traiter votre demande de service ou de candidature\n\u2022 Vous contacter dans le cadre de votre demande\n\u2022 Am\u00e9liorer nos services\n\nVos donn\u00e9es ne sont jamais vendues ni transmises \u00e0 des tiers \u00e0 des fins commerciales.",
    },
    {
      title: "Base l\u00e9gale",
      body: "Le traitement de vos donn\u00e9es repose sur votre consentement explicite au moment de la soumission du formulaire (article 6(1)(a) du RGPD), ou sur l\u2019ex\u00e9cution d\u2019un contrat ou de mesures pr\u00e9contractuelles (article 6(1)(b) du RGPD).",
    },
    {
      title: "Conservation des donn\u00e9es",
      body: "Vos donn\u00e9es sont conserv\u00e9es le temps n\u00e9cessaire au traitement de votre demande, et au maximum 3 ans \u00e0 compter de la derni\u00e8re interaction, sauf obligation l\u00e9gale contraire.",
    },
    {
      title: "Vos droits",
      body: "Conform\u00e9ment au RGPD, vous disposez des droits suivants :\n\u2022 Droit d\u2019acc\u00e8s \u00e0 vos donn\u00e9es\n\u2022 Droit de rectification\n\u2022 Droit \u00e0 l\u2019effacement (droit \u00e0 l\u2019oubli)\n\u2022 Droit \u00e0 la limitation du traitement\n\u2022 Droit d\u2019opposition\n\u2022 Droit \u00e0 la portabilit\u00e9\n\nPour exercer ces droits, contactez-nous \u00e0 info@bns.brussels.",
    },
    {
      title: "S\u00e9curit\u00e9",
      body: "Nous mettons en \u0153uvre des mesures techniques et organisationnelles appropri\u00e9es pour prot\u00e9ger vos donn\u00e9es contre tout acc\u00e8s non autoris\u00e9, perte ou divulgation.",
    },
    {
      title: "Contact et r\u00e9clamation",
      body: "Pour toute question relative \u00e0 vos donn\u00e9es personnelles, contactez-nous \u00e0 info@bns.brussels.\n\nVous avez \u00e9galement le droit d\u2019introduire une r\u00e9clamation aupr\u00e8s de l\u2019Autorit\u00e9 de protection des donn\u00e9es (APD) en Belgique : www.autoriteprotectiondonnees.be",
    },
  ],
  nl: [
    {
      title: "Verwerkingsverantwoordelijke",
      body: "Brussels Net Services\nPletinckxstraat 10 \u2014 1000 Brussel\nE-mail: info@bns.brussels\nTel.: 0471/95.02.07",
    },
    {
      title: "Verzamelde gegevens",
      body: "Wij verzamelen uitsluitend de gegevens die u vrijwillig via onze formulieren verstrekt: naam, voornaam, e-mailadres, telefoonnummer, postadres en de inhoud van uw bericht of aanvraag.",
    },
    {
      title: "Doel van de verwerking",
      body: "Uw gegevens worden uitsluitend gebruikt voor:\n\u2022 Het verwerken van uw dienstaanvraag of sollicitatie\n\u2022 Contact met u opnemen in het kader van uw aanvraag\n\u2022 Het verbeteren van onze diensten\n\nUw gegevens worden nooit verkocht of doorgegeven aan derden voor commerci\u00eble doeleinden.",
    },
    {
      title: "Rechtsgrondslag",
      body: "De verwerking van uw gegevens is gebaseerd op uw uitdrukkelijke toestemming bij het indienen van het formulier (artikel 6(1)(a) AVG), of op de uitvoering van een overeenkomst of precontractuele maatregelen (artikel 6(1)(b) AVG).",
    },
    {
      title: "Bewaartermijn",
      body: "Uw gegevens worden bewaard zolang als nodig voor de verwerking van uw aanvraag, en maximaal 3 jaar na de laatste interactie, tenzij een wettelijke verplichting anders vereist.",
    },
    {
      title: "Uw rechten",
      body: "Conform de AVG beschikt u over de volgende rechten:\n\u2022 Recht op inzage\n\u2022 Recht op rectificatie\n\u2022 Recht op verwijdering\n\u2022 Recht op beperking van de verwerking\n\u2022 Recht van bezwaar\n\u2022 Recht op overdraagbaarheid\n\nNeem contact op via info@bns.brussels om deze rechten uit te oefenen.",
    },
    {
      title: "Beveiliging",
      body: "Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen ongeautoriseerde toegang, verlies of openbaarmaking.",
    },
    {
      title: "Contact en klachten",
      body: "Voor vragen over uw persoonsgegevens kunt u contact opnemen via info@bns.brussels.\n\nU heeft ook het recht een klacht in te dienen bij de Gegevensbeschermingsautoriteit (GBA): www.gegevensbeschermingsautoriteit.be",
    },
  ],
  en: [
    {
      title: "Data controller",
      body: "Brussels Net Services\nRue Pletinckx 10 \u2014 1000 Brussels\nEmail: info@bns.brussels\nPhone: 0471/95.02.07",
    },
    {
      title: "Data collected",
      body: "We only collect data you voluntarily provide via our forms: name, first name, email address, phone number, postal address and the content of your message or request.",
    },
    {
      title: "Purpose of processing",
      body: "Your data is used exclusively to:\n\u2022 Process your service request or application\n\u2022 Contact you regarding your request\n\u2022 Improve our services\n\nYour data is never sold or transferred to third parties for commercial purposes.",
    },
    {
      title: "Legal basis",
      body: "Processing of your data is based on your explicit consent at the time of form submission (Article 6(1)(a) GDPR), or on the performance of a contract or pre-contractual measures (Article 6(1)(b) GDPR).",
    },
    {
      title: "Data retention",
      body: "Your data is kept for as long as necessary to process your request, and for a maximum of 3 years from the last interaction, unless a legal obligation requires otherwise.",
    },
    {
      title: "Your rights",
      body: "Under the GDPR, you have the following rights:\n\u2022 Right of access\n\u2022 Right to rectification\n\u2022 Right to erasure (right to be forgotten)\n\u2022 Right to restriction of processing\n\u2022 Right to object\n\u2022 Right to data portability\n\nTo exercise these rights, contact us at info@bns.brussels.",
    },
    {
      title: "Security",
      body: "We implement appropriate technical and organisational measures to protect your data against unauthorised access, loss or disclosure.",
    },
    {
      title: "Contact and complaints",
      body: "For any questions about your personal data, contact us at info@bns.brussels.\n\nYou also have the right to lodge a complaint with the Data Protection Authority (DPA) in Belgium: www.dataprotectionauthority.be",
    },
  ],
}

export default function PolitiqueConfidentialite() {
  const { i18n } = useTranslation()
  const lang = i18n.language.startsWith('nl') ? 'nl' : i18n.language.startsWith('en') ? 'en' : 'fr'
  const data = sections[lang]

  const badges: Record<string, string> = { fr: "Protection des donn\u00e9es", nl: "Gegevensbescherming", en: "Data protection" }
  const titles: Record<string, string> = { fr: "Politique de confidentialit\u00e9", nl: "Privacybeleid", en: "Privacy policy" }
  const subtitles: Record<string, string> = {
    fr: "Comment nous collectons, utilisons et prot\u00e9geons vos donn\u00e9es personnelles.",
    nl: "Hoe wij uw persoonsgegevens verzamelen, gebruiken en beschermen.",
    en: "How we collect, use and protect your personal data.",
  }

  return (
    <main>
      <section className="py-16 lg:py-24" style={{ background: 'var(--warm)' }}>
        <div className="w-full px-4 lg:px-[60px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }}>
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(8,172,242,0.10)', color: 'var(--primary)', border: '1px solid rgba(8,172,242,0.15)' }}
            >
              {badges[lang]}
            </span>
            <h1 className="font-medium mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', color: 'var(--text)' }}>
              {titles[lang]}
            </h1>
            <p className="text-base max-w-xl" style={{ color: 'var(--muted)' }}>
              {subtitles[lang]}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24" style={{ background: 'var(--warm)' }}>
        <div className="w-full px-4 lg:px-[60px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="flex flex-col gap-6 max-w-3xl"
          >
            {data.map(({ title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="rounded-2xl p-8"
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(255,255,255,0.95)',
                  boxShadow: '0 4px 24px rgba(8,172,242,0.07)',
                }}
              >
                <div className="w-6 h-0.5 rounded-full mb-4" style={{ background: 'var(--primary)' }} />
                <h2 className="font-semibold mb-4" style={{ fontSize: '1rem', letterSpacing: '-0.02em', color: 'var(--text)' }}>
                  {title}
                </h2>
                <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: 'var(--muted)' }}>
                  {body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
