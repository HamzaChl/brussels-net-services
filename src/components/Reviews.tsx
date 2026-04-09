import { motion, type Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const reviews = [
  {
    author: 'Núria Oltra Brines',
    rating: 5,
    time: 'il y a 4 semaines',
    text: "Je suis très satisfaite des services de Brussels Net Services. L'équipe est très professionnelle et la femme de ménage est fantastique : toujours minutieuse et fiable. La communication avec le service est fluide et facile, ce qui rend le tout très agréable. C'est sans aucun doute un service auquel je peux faire confiance.",
  },
  {
    author: 'Fayruz Leed',
    rating: 5,
    time: 'il y a 4 semaines',
    text: "Je suis vraiment ravie des services de cette agence. L'équipe est ponctuelle, respectueuse et fait un travail de grande qualité. C'est un plaisir de faire appel à eux. Je recommande à 100 % !",
  },
  {
    author: 'Anis Draou',
    rating: 5,
    time: 'il y a 4 semaines',
    text: "Un grand merci à Brussels Net Services pour leurs bons services et surtout à Touria qui fait un travail magnifique et consciencieux. Je recommande à 100%.",
  },
  {
    author: 'WEAM TABOOR',
    rating: 5,
    time: 'il y a 4 semaines',
    text: "J'ai eu une excellente expérience avec cette entreprise de nettoyage. Très professionnels, ponctuels et attentifs au moindre détail. L'équipe est sympathique et efficace. Je recommande vivement.",
  },
  {
    author: 'Meroine Meroine',
    rating: 5,
    time: 'il y a 4 semaines',
    text: "Société compétente et professionnelle, très réactive et consciencieuse dans son travail. Je recommande à 100%.",
  },
  {
    author: 'Victoria Garin',
    rating: 5,
    time: 'il y a 4 semaines',
    text: "Magnifique service, bonne communication, professionnalisme ! À recommander.",
  },
]

const avatarColors = [
  '#08ACF2', '#2FC1FF', '#0696D6', '#34C5FF', '#0584C0', '#48CFFF',
]

function initials(name: string) {
  return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase()
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24"
          fill={i < count ? '#F59E0B' : 'none'}
          stroke={i < count ? '#F59E0B' : '#D1D5DB'}
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const { t } = useTranslation()

  return (
    <section className="py-16 lg:py-32" style={{ background: 'var(--warm)' }}>
      <div className="w-full px-4 lg:px-[60px]">

        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16"
        >
          <div>
            <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--primary)' }}>
              {t('reviews.label')}
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-medium" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.03em', color: 'var(--text)' }}>
              {t('reviews.title')}
            </motion.h2>
          </div>

          {/* Google rating badge */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 px-6 py-4 rounded-2xl shrink-0"
            style={{
              background: 'rgba(255,255,255,0.85)',
              border: '1px solid rgba(255,255,255,0.95)',
              boxShadow: '0 4px 24px rgba(8,172,242,0.07)',
            }}
          >
            {/* Google G logo */}
            <svg width="32" height="32" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-2xl font-medium" style={{ letterSpacing: '-0.03em', color: 'var(--text)' }}>5.0</span>
                <Stars count={5} />
              </div>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>
                {t('reviews.based_on', { count: 70 })}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map(({ author, rating, time, text }, i) => (
            <motion.div
              key={author}
              variants={fadeUp}
              className="rounded-2xl p-7 flex flex-col gap-5"
              style={{
                background: 'rgba(255,255,255,0.90)',
                border: '1px solid rgba(255,255,255,0.95)',
                boxShadow: '0 4px 24px rgba(8,172,242,0.06)',
              }}
            >
              {/* Top row */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-semibold text-white"
                  style={{ background: avatarColors[i % avatarColors.length] }}
                >
                  {initials(author)}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate" style={{ color: 'var(--text)' }}>{author}</p>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>{time}</p>
                </div>
                {/* Google icon small */}
                <svg width="16" height="16" viewBox="0 0 24 24" className="ml-auto shrink-0">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              {/* Stars */}
              <Stars count={rating} />

              {/* Text */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>
                "{text}"
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.google.com/maps/search/?api=1&query=Brussels+Net+Services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
            style={{ color: 'var(--primary)' }}
          >
            {t('reviews.see_all')}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
