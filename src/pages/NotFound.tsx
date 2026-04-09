import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <main className="flex-1 flex items-center justify-center py-40 px-4 lg:px-[60px]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center max-w-lg"
      >
        <p
          className="font-medium leading-none mb-6 select-none"
          style={{ fontSize: 'clamp(6rem, 20vw, 12rem)', color: 'var(--primary)', opacity: 0.15, letterSpacing: '-0.05em' }}
        >
          404
        </p>

        <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: 'var(--primary)' }}>
          {t('notfound.label')}
        </p>
        <h1 className="text-4xl font-medium mb-4" style={{ letterSpacing: '-0.03em', marginTop: '1rem' }}>
          {t('notfound.title')}
        </h1>
        <p className="text-base mb-10" style={{ color: 'var(--muted)' }}>
          {t('notfound.desc')}
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90"
          style={{ background: 'var(--primary)', color: '#fff' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          {t('notfound.cta')}
        </Link>
      </motion.div>
    </main>
  )
}
