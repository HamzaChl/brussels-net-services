import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import heroBg from '../assets/hero.jpg'
import img1 from '../assets/image01.jpg'
import img2 from '../assets/image02.jpg'
import img3 from '../assets/image03.jpg'
import img4 from '../assets/contact-form.jpg'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const taskImages = [img1, img2, img3, img4, img4, img4, img4]

export default function TachesAutorisees() {
  const { t } = useTranslation()

  const tasks = t('taches.tasks', { returnObjects: true }) as { title: string; desc: string }[]
  const tips = t('taches.tips', { returnObjects: true }) as { num: string; title: string; body: string }[]

  return (
    <main>
      {/* ── HERO BANNER ── */}
      <section className="relative w-full overflow-hidden" style={{ height: 'clamp(220px, 40vw, 340px)' }}>
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center 30%' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.22) 60%, transparent 100%)' }}
        />
        <div className="relative z-10 h-full flex items-center px-4 lg:px-[60px]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)' }}
            >
              {t('taches.badge')}
            </span>
            <h1
              className="font-medium text-white mb-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.03em', lineHeight: 1.1, color: '#fff' }}
            >
              {t('taches.title')}
            </h1>
            <p className="text-base" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '520px' }}>
              {t('taches.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CARDS ── */}
      <section className="py-24" style={{ background: 'var(--warm)' }}>
        <div className="w-full px-4 lg:px-[60px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {tasks.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: 'rgba(255,255,255,0.85)',
                  border: '1px solid rgba(255,255,255,0.95)',
                  boxShadow: '0 4px 24px rgba(8,172,242,0.07)',
                }}
              >
                <div className="w-full overflow-hidden" style={{ height: '180px', flexShrink: 0 }}>
                  <img
                    src={taskImages[i]}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2 flex-1">
                  <div className="w-6 h-0.5 rounded-full mb-1" style={{ background: 'var(--primary)' }} />
                  <h3 className="font-medium" style={{ fontSize: '0.95rem', letterSpacing: '-0.02em', color: 'var(--text)' }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TIPS ── */}
      <section className="pb-24" style={{ background: 'var(--warm)' }}>
        <div className="w-full px-4 lg:px-[60px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-10"
          >
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--primary)' }}>
              {t('taches.tips_label')}
            </p>
            <h2 className="font-medium" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', letterSpacing: '-0.03em', color: 'var(--text)' }}>
              {t('taches.tips_heading')}
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {tips.map(({ num, title, body }) => (
              <motion.div
                key={num}
                variants={fadeUp}
                className="rounded-2xl p-8 flex gap-6"
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
    </main>
  )
}
