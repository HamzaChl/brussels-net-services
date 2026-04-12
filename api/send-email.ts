import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM = `Brussels Net Services <${process.env.FROM_EMAIL ?? 'no-reply@bns.brussels'}>`
const TO_COMPANY = process.env.TO_EMAIL ?? 'info@bns.brussels'



function buildContactEmails(data: Record<string, string>) {
  const { firstname, lastname, email, phone, subject, message } = data

  const toCompany = {
    from: FROM,
    to: TO_COMPANY,
    subject: `[Contact] ${subject} — ${firstname} ${lastname}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;color:#1a1a2e">
        <div style="background:#08ACF2;padding:28px 32px;border-radius:12px 12px 0 0">
          <h2 style="margin:0;color:#fff;font-size:1.2rem;font-weight:600">Nouveau message de contact</h2>
        </div>
        <div style="background:#f5fbff;padding:28px 32px;border-radius:0 0 12px 12px;border:1px solid #e0f0fb">
          <table style="width:100%;border-collapse:collapse;font-size:0.9rem">
            <tr><td style="padding:8px 0;color:#666;width:130px">Nom</td><td style="padding:8px 0;font-weight:600">${firstname} ${lastname}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#08ACF2">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:8px 0;color:#666">Téléphone</td><td style="padding:8px 0">${phone}</td></tr>` : ''}
            <tr><td style="padding:8px 0;color:#666">Sujet</td><td style="padding:8px 0">${subject}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#fff;border-radius:8px;border:1px solid #e0f0fb">
            <p style="margin:0;font-size:0.85rem;color:#666;margin-bottom:8px">Message :</p>
            <p style="margin:0;white-space:pre-wrap">${message}</p>
          </div>
        </div>
      </div>`,
  }

  const toClient = {
    from: FROM,
    to: email,
    subject: 'Votre message a bien été reçu — Brussels Net Services',
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;color:#1a1a2e">
        <div style="background:#08ACF2;padding:28px 32px;border-radius:12px 12px 0 0">
          <h2 style="margin:0;color:#fff;font-size:1.2rem;font-weight:600">Merci pour votre message !</h2>
        </div>
        <div style="background:#f5fbff;padding:28px 32px;border-radius:0 0 12px 12px;border:1px solid #e0f0fb">
          <p>Bonjour <strong>${firstname}</strong>,</p>
          <p>Nous avons bien reçu votre message concernant <strong>${subject}</strong> et nous vous répondrons dans les meilleurs délais.</p>
          <p style="color:#666;font-size:0.85rem">Heures de bureau : Lundi–Vendredi · 10h30–15h00</p>
          <hr style="border:none;border-top:1px solid #e0f0fb;margin:20px 0"/>
          <p style="margin:0;font-size:0.8rem;color:#999">Brussels Net Services · Rue Pletinckx 10, 1000 Bruxelles · <a href="tel:+32471950207" style="color:#08ACF2">0471/95.02.07</a> · <a href="mailto:info@bns.brussels" style="color:#08ACF2">info@bns.brussels</a></p>
        </div>
      </div>`,
  }

  return { toCompany, toClient }
}

function buildDemanderEmails(data: Record<string, string>) {
  const { firstname, lastname, email, phone, address, city, tasks, frequency, availability, message } = data

  const toCompany = {
    from: FROM,
    to: TO_COMPANY,
    subject: `[Demande d'aide] ${firstname} ${lastname} — ${city}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;color:#1a1a2e">
        <div style="background:#08ACF2;padding:28px 32px;border-radius:12px 12px 0 0">
          <h2 style="margin:0;color:#fff;font-size:1.2rem;font-weight:600">Nouvelle demande d'aide-ménagère</h2>
        </div>
        <div style="background:#f5fbff;padding:28px 32px;border-radius:0 0 12px 12px;border:1px solid #e0f0fb">
          <table style="width:100%;border-collapse:collapse;font-size:0.9rem">
            <tr><td style="padding:8px 0;color:#666;width:150px">Nom</td><td style="padding:8px 0;font-weight:600">${firstname} ${lastname}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#08ACF2">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666">Téléphone</td><td style="padding:8px 0">${phone}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Adresse</td><td style="padding:8px 0">${address}, ${city}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Tâches</td><td style="padding:8px 0">${tasks}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Fréquence</td><td style="padding:8px 0">${frequency}</td></tr>
            ${availability ? `<tr><td style="padding:8px 0;color:#666">Disponibilité</td><td style="padding:8px 0">${availability}</td></tr>` : ''}
          </table>
          ${message ? `<div style="margin-top:20px;padding:16px;background:#fff;border-radius:8px;border:1px solid #e0f0fb"><p style="margin:0;font-size:0.85rem;color:#666;margin-bottom:8px">Message :</p><p style="margin:0;white-space:pre-wrap">${message}</p></div>` : ''}
        </div>
      </div>`,
  }

  const toClient = {
    from: FROM,
    to: email,
    subject: 'Votre demande a bien été reçue — Brussels Net Services',
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;color:#1a1a2e">
        <div style="background:#08ACF2;padding:28px 32px;border-radius:12px 12px 0 0">
          <h2 style="margin:0;color:#fff;font-size:1.2rem;font-weight:600">Votre demande est bien enregistrée !</h2>
        </div>
        <div style="background:#f5fbff;padding:28px 32px;border-radius:0 0 12px 12px;border:1px solid #e0f0fb">
          <p>Bonjour <strong>${firstname}</strong>,</p>
          <p>Merci pour votre demande d'aide-ménagère. Notre équipe va analyser votre profil et vous contactera très prochainement pour convenir d'un rendez-vous.</p>
          <div style="background:#e8f7fe;border-left:4px solid #08ACF2;padding:14px 18px;border-radius:0 8px 8px 0;margin:20px 0">
            <p style="margin:0;font-size:0.9rem"><strong>Tâches demandées :</strong> ${tasks}</p>
            <p style="margin:0;margin-top:6px;font-size:0.9rem"><strong>Fréquence souhaitée :</strong> ${frequency}</p>
          </div>
          <p style="color:#666;font-size:0.85rem">Contactez-nous : <a href="tel:+32471950207" style="color:#08ACF2">0471/95.02.07</a> · <a href="mailto:info@bns.brussels" style="color:#08ACF2">info@bns.brussels</a></p>
          <hr style="border:none;border-top:1px solid #e0f0fb;margin:20px 0"/>
          <p style="margin:0;font-size:0.8rem;color:#999">Brussels Net Services · Rue Pletinckx 10, 1000 Bruxelles · <a href="tel:+32471950207" style="color:#08ACF2">0471/95.02.07</a> · <a href="mailto:info@bns.brussels" style="color:#08ACF2">info@bns.brussels</a></p>
        </div>
      </div>`,
  }

  return { toCompany, toClient }
}

function buildJobEmails(data: Record<string, string>) {
  const { firstname, lastname, email, phone, languages, experience, availability, motivation } = data

  const toCompany = {
    from: FROM,
    to: TO_COMPANY,
    subject: `[Candidature] ${firstname} ${lastname}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;color:#1a1a2e">
        <div style="background:#08ACF2;padding:28px 32px;border-radius:12px 12px 0 0">
          <h2 style="margin:0;color:#fff;font-size:1.2rem;font-weight:600">Nouvelle candidature reçue</h2>
        </div>
        <div style="background:#f5fbff;padding:28px 32px;border-radius:0 0 12px 12px;border:1px solid #e0f0fb">
          <table style="width:100%;border-collapse:collapse;font-size:0.9rem">
            <tr><td style="padding:8px 0;color:#666;width:150px">Nom</td><td style="padding:8px 0;font-weight:600">${firstname} ${lastname}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#08ACF2">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666">Téléphone</td><td style="padding:8px 0">${phone}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Langues</td><td style="padding:8px 0">${languages}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Expérience</td><td style="padding:8px 0">${experience}</td></tr>
            <tr><td style="padding:8px 0;color:#666">Disponibilité</td><td style="padding:8px 0">${availability}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#fff;border-radius:8px;border:1px solid #e0f0fb">
            <p style="margin:0;font-size:0.85rem;color:#666;margin-bottom:8px">Motivation :</p>
            <p style="margin:0;white-space:pre-wrap">${motivation}</p>
          </div>
        </div>
      </div>`,
  }

  const toClient = {
    from: FROM,
    to: email,
    subject: 'Votre candidature a bien été reçue — Brussels Net Services',
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:auto;color:#1a1a2e">
        <div style="background:#08ACF2;padding:28px 32px;border-radius:12px 12px 0 0">
          <h2 style="margin:0;color:#fff;font-size:1.2rem;font-weight:600">Candidature bien reçue !</h2>
        </div>
        <div style="background:#f5fbff;padding:28px 32px;border-radius:0 0 12px 12px;border:1px solid #e0f0fb">
          <p>Bonjour <strong>${firstname}</strong>,</p>
          <p>Merci pour votre intérêt à rejoindre l'équipe Brussels Net Services. Nous avons bien reçu votre candidature et nous l'examinerons avec attention.</p>
          <p>Si votre profil correspond à nos besoins, nous vous contacterons rapidement pour un entretien.</p>
          <p style="color:#666;font-size:0.85rem">En attendant, n'hésitez pas à nous contacter : <a href="tel:+32471950207" style="color:#08ACF2">0471/95.02.07</a> · <a href="mailto:info@bns.brussels" style="color:#08ACF2">info@bns.brussels</a></p>
          <hr style="border:none;border-top:1px solid #e0f0fb;margin:20px 0"/>
          <p style="margin:0;font-size:0.8rem;color:#999">Brussels Net Services · Rue Pletinckx 10, 1000 Bruxelles · <a href="tel:+32471950207" style="color:#08ACF2">0471/95.02.07</a> · <a href="mailto:info@bns.brussels" style="color:#08ACF2">info@bns.brussels</a></p>
        </div>
      </div>`,
  }

  return { toCompany, toClient }
}



export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { type, ...data } = req.body as { type: string } & Record<string, string>

  if (!type || !data.email) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  let emails: { toCompany: object; toClient: object }

  if (type === 'contact') emails = buildContactEmails(data)
  else if (type === 'demander') emails = buildDemanderEmails(data)
  else if (type === 'job') emails = buildJobEmails(data)
  else return res.status(400).json({ error: 'Unknown form type' })

  try {
    await Promise.all([
      resend.emails.send(emails.toCompany as Parameters<typeof resend.emails.send>[0]),
      resend.emails.send(emails.toClient as Parameters<typeof resend.emails.send>[0]),
    ])
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Email send error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
