import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import heroBg from '../assets/image.05.jpeg'
import { sendEmail } from '../lib/sendEmail'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const inputClass = 'w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 border'
const inputStyle = { borderColor: 'var(--border)', background: '#fff', color: 'var(--text)' }
const inputFocusStyle = { borderColor: 'var(--primary)', boxShadow: '0 0 0 3px rgba(8,172,242,0.12)' }

export default function DemanderAide() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [form, setForm] = useState({
    firstname: '', lastname: '', email: '', phone: '',
    address: '', city: '', frequency: '', tasks: [] as string[], availability: '', message: '',
  })

  const steps = t('demander.steps', { returnObjects: true }) as { num: string; title: string; body: string }[]
  const taskOptions = t('demander.form.task_options', { returnObjects: true }) as string[]
  const frequencyOptions = t('demander.form.frequency_options', { returnObjects: true }) as string[]
  const availabilityOptions = t('demander.form.availability_options', { returnObjects: true }) as string[]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const toggleTask = (task: string) => {
    setForm(prev => ({
      ...prev,
      tasks: prev.tasks.includes(task) ? prev.tasks.filter(t => t !== task) : [...prev.tasks, task],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      await sendEmail({ type: 'demander', ...form, tasks: form.tasks.join(', ') })
      setSubmitted(true)
    } catch {
      alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setSending(false)
    }
  }

  return (
    <main>
      {/* ── HERO BANNER ── */}
      <section className="relative w-full overflow-hidden" style={{ height: 'clamp(220px, 40vw, 340px)' }}>
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center 40%' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)' }}
        />
        <div className="relative z-10 h-full flex items-center px-4 lg:px-[60px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}
            >
              {t('demander.badge')}
            </span>
            <h1
              className="font-medium text-white mb-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.03em', lineHeight: 1.1, color: '#fff' }}
            >
              {t('demander.title')}
            </h1>
            <p className="text-base" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '520px' }}>
              {t('demander.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="pt-24 pb-16" style={{ background: 'var(--warm)' }}>
        <div className="w-full px-4 lg:px-[60px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--primary)' }}>
              {t('demander.steps_label')}
            </p>
            <h2 className="font-medium" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.03em', color: 'var(--text)' }}>
              {t('demander.steps_heading')}
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {steps.map(({ num, title, body }) => (
              <motion.div
                key={num}
                variants={fadeUp}
                className="rounded-2xl p-8 flex gap-5"
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(255,255,255,0.95)',
                  boxShadow: '0 4px 24px rgba(8,172,242,0.07)',
                }}
              >
                <span
                  className="shrink-0 font-medium leading-none"
                  style={{ fontSize: '2.8rem', color: 'var(--primary)', opacity: 0.18, letterSpacing: '-0.04em', marginTop: '-4px' }}
                >
                  {num}
                </span>
                <div>
                  <h3 className="font-medium mb-2" style={{ fontSize: '0.95rem', letterSpacing: '-0.02em', color: 'var(--text)' }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section className="pb-24" style={{ background: 'var(--warm)' }}>
        <div className="w-full px-4 lg:px-[60px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--primary)' }}>
              {t('demander.form_label')}
            </p>
            <h2 className="font-medium" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.03em', color: 'var(--text)' }}>
              {t('demander.form_heading')}
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            <div
              className="rounded-2xl p-10"
              style={{
                background: 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.95)',
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
                    {t('demander.form.success_title')}
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>
                    {t('demander.form.success_text')}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                  {/* Section 1 — Identity */}
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--primary)' }}>
                      {t('demander.form.section_identity')}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>{t('demander.form.firstname')} *</label>
                        <input required name="firstname" value={form.firstname} onChange={handleChange}
                          className={inputClass} style={inputStyle}
                          onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                          onBlur={e => Object.assign(e.target.style, inputStyle)} />
                      </motion.div>
                      <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>{t('demander.form.lastname')} *</label>
                        <input required name="lastname" value={form.lastname} onChange={handleChange}
                          className={inputClass} style={inputStyle}
                          onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                          onBlur={e => Object.assign(e.target.style, inputStyle)} />
                      </motion.div>
                      <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>{t('demander.form.email')} *</label>
                        <input required type="email" name="email" value={form.email} onChange={handleChange}
                          className={inputClass} style={inputStyle}
                          onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                          onBlur={e => Object.assign(e.target.style, inputStyle)} />
                      </motion.div>
                      <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>{t('demander.form.phone')} *</label>
                        <input required type="tel" name="phone" value={form.phone} onChange={handleChange}
                          className={inputClass} style={inputStyle}
                          onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                          onBlur={e => Object.assign(e.target.style, inputStyle)} />
                      </motion.div>
                      <motion.div variants={fadeUp} className="flex flex-col gap-1.5 sm:col-span-2">
                        <label className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>{t('demander.form.address')} *</label>
                        <input required name="address" value={form.address} onChange={handleChange}
                          className={inputClass} style={inputStyle}
                          onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                          onBlur={e => Object.assign(e.target.style, inputStyle)} />
                      </motion.div>
                      <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>{t('demander.form.city')} *</label>
                        <input required name="city" value={form.city} onChange={handleChange}
                          className={inputClass} style={inputStyle}
                          onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                          onBlur={e => Object.assign(e.target.style, inputStyle)} />
                      </motion.div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border)' }} />

                  {/* Section 2 — Needs */}
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: 'var(--primary)' }}>
                      {t('demander.form.section_needs')}
                    </p>

                    <motion.div variants={fadeUp} className="mb-5">
                      <label className="text-xs font-semibold block mb-3" style={{ color: 'var(--muted)' }}>
                        {t('demander.form.tasks_label')} *
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {taskOptions.map(task => {
                          const active = form.tasks.includes(task)
                          return (
                            <button
                              key={task}
                              type="button"
                              onClick={() => toggleTask(task)}
                              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                              style={{
                                background: active ? 'var(--primary)' : 'rgba(8,172,242,0.07)',
                                color: active ? '#fff' : 'var(--text)',
                                border: `1.5px solid ${active ? 'var(--primary)' : 'transparent'}`,
                              }}
                            >
                              {task}
                            </button>
                          )
                        })}
                      </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>{t('demander.form.frequency_label')} *</label>
                        <select required name="frequency" value={form.frequency} onChange={handleChange}
                          className={inputClass} style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                          onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                          onBlur={e => Object.assign(e.target.style, inputStyle)}>
                          <option value="">{t('demander.form.frequency_placeholder')}</option>
                          {frequencyOptions.map(opt => <option key={opt}>{opt}</option>)}
                        </select>
                      </motion.div>
                      <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>{t('demander.form.availability_label')}</label>
                        <select name="availability" value={form.availability} onChange={handleChange}
                          className={inputClass} style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                          onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                          onBlur={e => Object.assign(e.target.style, inputStyle)}>
                          <option value="">{t('demander.form.availability_placeholder')}</option>
                          {availabilityOptions.map(opt => <option key={opt}>{opt}</option>)}
                        </select>
                      </motion.div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid var(--border)' }} />

                  {/* Section 3 — Message */}
                  <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>
                      {t('demander.form.message_label')}
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder={t('demander.form.message_placeholder')}
                      value={form.message}
                      onChange={handleChange}
                      className={inputClass}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={e => Object.assign(e.target.style, inputFocusStyle)}
                      onBlur={e => Object.assign(e.target.style, inputStyle)}
                    />
                  </motion.div>

                  {/* Submit */}
                  <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs" style={{ color: 'var(--muted)', maxWidth: '360px' }}>
                      {t('demander.form.privacy')}
                    </p>
                    <button
                      type="submit"
                      disabled={sending || form.tasks.length === 0}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.97] shrink-0 disabled:opacity-60"
                      style={{ background: 'var(--primary)', color: '#fff' }}
                    >
                      {sending ? t('demander.form.sending') : t('demander.form.submit')}
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
        </div>
      </section>
    </main>
  )
}
