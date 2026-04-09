import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import contactImg from '../assets/contact-form.jpg'
import Social from '../components/Social'
import { sendEmail } from '../lib/sendEmail'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } },
}

const hours = [
  { day: 'Lundi', time: '10h30 – 15h00' },
  { day: 'Mardi', time: '10h30 – 15h00' },
  { day: 'Mercredi', time: '10h30 – 15h00' },
  { day: 'Jeudi', time: '10h30 – 15h00' },
  { day: 'Vendredi', time: '10h30 – 15h00' },
  { day: 'Sur RDV', time: '15h00 – 18h00' },
]

export default function Contact() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [form, setForm] = useState({
    firstname: '', lastname: '', email: '', phone: '', subject: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      await sendEmail({ type: 'contact', ...form })
      setSubmitted(true)
    } catch {
      alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setSending(false)
    }
  }

  const inputClass = "w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 border"
  const inputStyle = {
    borderColor: 'var(--border)',
    background: '#fff',
    color: 'var(--text)',
  }
  const inputFocusStyle = {
    borderColor: 'var(--primary)',
    boxShadow: '0 0 0 3px rgba(8,172,242,0.12)',
  }

  return (
    <main>
      <section
        className="relative w-full overflow-hidden"
        style={{ height: 'clamp(220px, 40vw, 340px)' }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${contactImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.20) 60%, transparent 100%)' }}
        />
        <div className="relative z-10 h-full flex items-center px-4 lg:px-[60px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}
            >
              {t('contact.badge')}
            </span>
            <h1
              className="font-medium text-white mb-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              {t('contact.title')}
            </h1>
            <p className="text-base" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '480px' }}>
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      
      <section className="py-24" style={{ background: 'var(--warm)' }}>
        <div className="w-full px-4 lg:px-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">

            
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2 flex flex-col"
            >
              <div
                className="rounded-2xl p-10 flex-1 flex flex-col"
                style={{
                  background: 'rgba(255,255,255,0.80)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.90)',
                  boxShadow: '0 4px 32px rgba(8,172,242,0.07)',
                }}
              >
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ background: 'rgba(8,172,242,0.12)' }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-medium mb-3" style={{ letterSpacing: '-0.02em' }}>
                      {t('contact.form.success')}
                    </h3>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
                    {/* Row 1 */}
                    <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>
                          {t('contact.form.firstname')} *
                        </label>
                        <input
                          required
                          name="firstname"
                          value={form.firstname}
                          onChange={handleChange}
                          className={inputClass}
                          style={inputStyle}
                          onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                          onBlur={e => Object.assign(e.target.style, inputStyle)}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>
                          {t('contact.form.lastname')} *
                        </label>
                        <input
                          required
                          name="lastname"
                          value={form.lastname}
                          onChange={handleChange}
                          className={inputClass}
                          style={inputStyle}
                          onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                          onBlur={e => Object.assign(e.target.style, inputStyle)}
                        />
                      </div>
                    </motion.div>

                    {/* Row 2 */}
                    <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>
                          {t('contact.form.email')} *
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass}
                          style={inputStyle}
                          onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                          onBlur={e => Object.assign(e.target.style, inputStyle)}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>
                          {t('contact.form.phone')}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className={inputClass}
                          style={inputStyle}
                          onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                          onBlur={e => Object.assign(e.target.style, inputStyle)}
                        />
                      </div>
                    </motion.div>

                    
                    <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>
                        {t('contact.form.subject')} *
                      </label>
                      <select
                        required
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className={inputClass}
                        style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                        onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                        onBlur={e => Object.assign(e.target.style, inputStyle)}
                      >
                        <option value="">—</option>
                        {(t('contact.form.subject_options', { returnObjects: true }) as string[]).map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </motion.div>

                    
                    <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>
                        {t('contact.form.message')} *
                      </label>
                      <textarea
                        required
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className={inputClass}
                        style={{ ...inputStyle, resize: 'vertical' }}
                        onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                        onBlur={e => Object.assign(e.target.style, inputStyle)}
                      />
                    </motion.div>


                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 mt-auto">
                      <p className="text-xs" style={{ color: 'var(--muted)', maxWidth: '340px' }}>
                        {t('contact.form.privacy')}
                      </p>
                      <button
                        type="submit"
                        disabled={sending}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.97] shrink-0 disabled:opacity-70"
                        style={{ background: 'var(--primary)', color: '#fff' }}
                      >
                        {sending ? t('contact.form.sending') : t('contact.form.submit')}
                        {!sending && (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        )}
                      </button>
                    </motion.div>
                  </form>
                )}
              </div>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="flex flex-col gap-6"
            >
              
              <div
                className="rounded-2xl p-7"
                style={{
                  background: 'rgba(255,255,255,0.80)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.90)',
                  boxShadow: '0 4px 32px rgba(8,172,242,0.07)',
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(8,172,242,0.10)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--primary)' }}>
                    {t('contact.info.address_label')}
                  </p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
                  Rue Pletinckx 10<br />1000 Bruxelles
                </p>
              </div>

              
              <div
                className="rounded-2xl p-7"
                style={{
                  background: 'rgba(255,255,255,0.80)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.90)',
                  boxShadow: '0 4px 32px rgba(8,172,242,0.07)',
                }}
              >
                <div className="flex flex-col gap-5">
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-1.5" style={{ color: 'var(--primary)' }}>
                      {t('contact.info.email_label')}
                    </p>
                    <a href="mailto:info@brusselsnetservices.be" className="text-sm hover:underline" style={{ color: 'var(--text)' }}>
                      info@brusselsnetservices.be
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-1.5" style={{ color: 'var(--primary)' }}>
                      {t('contact.info.delegate_label')}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {t('contact.info.delegate')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div
                className="rounded-2xl p-7"
                style={{
                  background: 'rgba(255,255,255,0.80)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.90)',
                  boxShadow: '0 4px 32px rgba(8,172,242,0.07)',
                }}
              >
                <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--primary)' }}>
                  {t('contact.info.hours_label')}
                </p>
                <ul className="flex flex-col gap-2">
                  {hours.map(({ day, time }, i) => (
                    <li key={day} className="flex justify-between text-sm">
                      <span style={{ color: i === hours.length - 1 ? 'var(--primary)' : 'var(--muted)' }}>{day}</span>
                      <span className="font-medium tabular-nums" style={{ color: i === hours.length - 1 ? 'var(--primary)' : 'var(--text)' }}>{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
      <section>
        <Social />
      </section>

      
      <section style={{ background: 'var(--warm)' }} className="pb-24">
        <div className="w-full px-4 lg:px-[60px]">
          <div className="overflow-hidden rounded-2xl" style={{ height: '360px' }}>
            <iframe
              title="Plan d'accès Brussels Net Services"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.4!2d4.3478!3d50.8468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c4a3b3b3b3b3%3A0x1!2sRue+Pletinckx+10%2C+1000+Bruxelles!5e0!3m2!1sfr!2sbe!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
