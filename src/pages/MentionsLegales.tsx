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

export default function MentionsLegales() {
  const { t } = useTranslation()

  const sections = t('legal.sections', { returnObjects: true }) as { title: string; body: string }[]

  return (
    <main>
      {/* Header */}
      <section className="py-16 lg:py-24" style={{ background: 'var(--warm)' }}>
        <div className="w-full px-4 lg:px-[60px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5"
              style={{ background: 'rgba(8,172,242,0.10)', color: 'var(--primary)', border: '1px solid rgba(8,172,242,0.15)' }}
            >
              {t('legal.badge')}
            </span>
            <h1
              className="font-medium mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.03em', color: 'var(--text)' }}
            >
              {t('legal.title')}
            </h1>
            <p className="text-base max-w-xl" style={{ color: 'var(--muted)' }}>
              {t('legal.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sections */}
      <section className="pb-24" style={{ background: 'var(--warm)' }}>
        <div className="w-full px-4 lg:px-[60px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="flex flex-col gap-6 max-w-3xl"
          >
            {sections.map(({ title, body }) => (
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
                <h2
                  className="font-semibold mb-4"
                  style={{ fontSize: '1rem', letterSpacing: '-0.02em', color: 'var(--text)' }}
                >
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
