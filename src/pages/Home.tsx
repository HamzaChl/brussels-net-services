import { motion, type Variants } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import heroBg from '../assets/hero.jpg'
import image01 from '../assets/image01.jpg'
import image02 from '../assets/image02.jpg'
import image03 from '../assets/image03.jpg'
import Social from '../components/Social'
import Reviews from '../components/Reviews'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function Home() {
  const { t } = useTranslation()

  const hours = t('office.hours', { returnObjects: true }) as { day: string; time: string }[]
  const services = t('simplify.services', { returnObjects: true }) as string[]
  const access = t('office.access', { returnObjects: true }) as string[]
  const accessIcons = ['🚇', '🚋', '📍']

  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ height: 'calc(100svh - var(--headers-h))' }}>
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.20) 50%, transparent 100%)' }}
        />
        <div className="relative z-10 w-full h-full px-[60px] flex items-center justify-center lg:justify-start">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-2xl text-center lg:text-left">
            <motion.div variants={fadeUp}>
              <span
                className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-8"
                style={{ background: 'rgba(255,255,255,0.20)', color: 'rgba(255,255,255,0.95)', letterSpacing: '0.15em', border: '1px solid rgba(255,255,255,0.25)' }}
              >
                {t('hero.badge')}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-medium leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', letterSpacing: '-0.03em', color: '#fff' }}
            >
              {t('hero.title')}<br />
              <span style={{ color: '#fff' }}>{t('hero.subtitle')}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg font-light leading-relaxed mb-10"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              {t('hero.tagline')}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link
                to="/demander-aide-menagere"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: '#fff', color: 'var(--primary)', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}
              >
                {t('hero.cta_primary')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.35)', backdropFilter: 'blur(8px)' }}
              >
                {t('hero.cta_secondary')}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── AIDE INSCRIPTION ── */}
      <section className="py-32" style={{ background: '#fff' }}>
        <div className="w-full px-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--primary)' }}>
                {t('help.label')}
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl font-medium mb-6" style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                {t('help.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg leading-relaxed mb-10" style={{ color: 'var(--muted)' }}
                dangerouslySetInnerHTML={{ __html: t('help.text') }}
              />
              <motion.div variants={fadeUp}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90"
                  style={{ background: '#0696D6', color: '#fff' }}
                >
                  {t('help.cta')}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <img src={image01} alt="Aide à domicile" className="w-full rounded-2xl object-cover" style={{ aspectRatio: '4/3' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── POURQUOI NOUS ── */}
      <section className="py-32" style={{ background: 'var(--warm)' }}>
        <div className="w-full px-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-80px' }}
              className="order-2 lg:order-1"
            >
              <img src={image02} alt="Nos équipes" className="w-full rounded-2xl object-cover" style={{ aspectRatio: '4/3' }} />
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="order-1 lg:order-2">
              <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--primary)' }}>
                {t('why.label')}
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl font-medium mb-6" style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                {t('why.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-base leading-[1.85] mb-6" style={{ color: 'var(--muted)' }}>
                {t('why.p1')}
              </motion.p>
              <motion.p variants={fadeUp} className="text-base leading-[1.85]" style={{ color: 'var(--muted)' }}
                dangerouslySetInnerHTML={{ __html: t('why.p2') }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SIMPLIFIEZ VOTRE VIE ── */}
      <section className="py-32" style={{ background: '#fff' }}>
        <div className="w-full px-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--primary)' }}>
                {t('simplify.label')}
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl font-medium mb-6" style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                {t('simplify.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-base leading-[1.85] mb-6" style={{ color: 'var(--muted)' }}>
                {t('simplify.p1')}
              </motion.p>
              <motion.p variants={fadeUp} className="text-base leading-[1.85] mb-10" style={{ color: 'var(--muted)' }}
                dangerouslySetInnerHTML={{ __html: t('simplify.p2') }}
              />
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {services.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{ background: 'rgba(8,172,242,0.08)', color: 'var(--primary)', border: '1px solid rgba(8,172,242,0.20)', backdropFilter: 'blur(8px)' }}
                  >
                    {s}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <img src={image03} alt="Nos services" className="w-full rounded-2xl object-cover" style={{ aspectRatio: '4/3' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BUREAU & HORAIRES ── */}
      <section className="py-32" style={{ background: 'var(--warm)' }}>
        <div className="w-full px-[60px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--primary)' }}>
                {t('office.label')}
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl font-medium mb-6" style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                {t('office.title')}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-base leading-[1.85] mb-8" style={{ color: 'var(--muted)' }}>
                {t('office.text')}
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col gap-3 mb-8">
                {access.map((text, i) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5 shrink-0">{accessIcons[i]}</span>
                    <span className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{text}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp}>
                <div className="overflow-hidden rounded-2xl" style={{ aspectRatio: '16/7' }}>
                  <iframe
                    title="Plan d'accès Brussels Net Services"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.4!2d4.3478!3d50.8468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c4a3b3b3b3b3%3A0x1!2sRue+Pletinckx+10%2C+1000+Bruxelles!5e0!3m2!1sfr!2sbe!4v1"
                    width="100%" height="100%"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Horaires */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: 0.15 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <div
                className="rounded-2xl p-10 h-full"
                style={{
                  background: 'rgba(255,255,255,0.65)',
                  backdropFilter: 'blur(20px) saturate(160%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                  border: '1px solid rgba(255,255,255,0.85)',
                  boxShadow: '0 8px 32px rgba(8,172,242,0.10)',
                }}
              >
                <h3 className="text-xl font-medium mb-1" style={{ letterSpacing: '-0.02em' }}>{t('office.hours_title')}</h3>
                <p className="text-sm mb-8" style={{ color: 'var(--muted)' }}>{t('office.hours_subtitle')}</p>

                <ul className="flex flex-col divide-y" style={{ '--tw-divide-opacity': 1, borderColor: 'var(--border)' } as React.CSSProperties}>
                  {hours.map(({ day, time }, i) => (
                    <li key={day} className="flex items-center justify-between py-4">
                      <span className="text-sm font-medium" style={{ color: i === hours.length - 1 ? 'var(--primary)' : 'var(--text)' }}>
                        {day}
                      </span>
                      <span
                        className="text-sm font-semibold tabular-nums"
                        style={{
                          color: i === hours.length - 1 ? 'var(--primary)' : 'var(--text)',
                          background: i === hours.length - 1 ? '#E8F7FE' : 'transparent',
                          padding: i === hours.length - 1 ? '2px 10px' : '0',
                          borderRadius: i === hours.length - 1 ? '999px' : '0',
                        }}
                      >
                        {time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Reviews />
      <Social />
    </main>
  )
}
