import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import heroBg from '../assets/image.08.jpeg'


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } },
}

type Article = {
  date: string
  category: string
  tag: 'important' | 'info' | 'formation'
  title: string
  body: string
  points?: string[]
  link: string
}

const articles: Article[] = [
  {
    date: '1 janvier 2026',
    category: 'Flandre',
    tag: 'important',
    title: 'Brussels Net Services agréé en Flandre — Dienstencheques Vlaanderen',
    body: "Brussels Net Services est agréé à la fois en Région de Bruxelles-Capitale et en Flandre. Grâce à notre agrément Dienstencheques Vlaanderen, nous pouvons accueillir des clients et proposer nos services d'aide-ménagère également en Flandre. Le système de dienstencheques flamand fonctionne de façon similaire au système bruxellois : vous achetez des titres-services et les utilisez pour payer votre aide-ménagère.",
    points: [
      'Agrément valide en Région de Bruxelles-Capitale et en Flandre',
      'Paiement via titres-services papier ou électroniques',
      'Mêmes tarifs avantageux et déductions fiscales applicables',
      'Service identique : nettoyage, lessive, repassage, courses, repas…',
    ],
    link: 'https://titres-services.flandre.be/citoyen/information/inscription/comment',
  },
  {
    date: '15 décembre 2025',
    category: 'Tarifs',
    tag: 'important',
    title: 'Augmentation du prix des titres-services à partir du 1er janvier 2026',
    body: "À partir du 1er janvier 2026, le système des titres-services bruxellois évolue pour mieux valoriser le travail et le statut des aides-ménagères. Plusieurs changements importants entrent en vigueur.",
    points: [
      'Titres 1 à 300 : 11,40 € / titre',
      'Titres 301 à 500 : 14,00 € / titre',
      'Commande minimale papier : 114 € (10 titres)',
      'Titres électroniques : 11,40 € minimum (1 titre)',
      'Quota préservé pour personnes handicapées : jusqu\'à 1 000 titres/an à 11,40 €',
      'Déduction fiscale supprimée pour les titres achetés dès le 1er janvier 2026',
      'Les titres achetés en 2025 restent utilisables en 2026',
    ],
    link: 'https://www.titre-service.brussels/citoyen/actualites/augmentation-prix-janvier2026',
  },
  {
    date: '28 juin 2025',
    category: 'Formation',
    tag: 'formation',
    title: 'Newsletter Form TS — Juin 2025 : des aides-ménagères deviennent ambassadrices',
    body: "La newsletter de juin 2025 de Form TS met en lumière cinq jeunes travailleuses du secteur qui ont participé à une formation en storytelling. Cette initiative a renforcé leur estime de soi, leur fierté professionnelle et leur rôle d'ambassadrices du secteur des services à domicile. Des témoignages vidéo sont disponibles sur le site de Form TS, avec la possibilité de s'inscrire aux prochaines sessions de formation.",
    link: 'https://www.titre-service.brussels/citoyen/actualites/form-ts-juin2025',
  },
  {
    date: '3 avril 2025',
    category: 'Technique',
    tag: 'info',
    title: 'Difficultés d\'accès à l\'Espace Sécurisé pour les appareils Apple',
    body: "Des problèmes d'accès à l'Espace Sécurisé via le Brussels Access Manager ont été signalés pour les utilisateurs d'appareils Apple (iPhone et Mac) utilisant itsme® ou eID. En attendant la résolution, une solution de contournement est disponible.",
    points: [
      'Cliquez sur « Se connecter »',
      'Sélectionnez « Se connecter avec votre compte Pluxee »',
      'Entrez vos identifiants sur mes.titresservices.brussels',
      'En cas d\'oubli de mot de passe, utilisez le portail de réinitialisation',
      'Recommandé : télécharger l\'application mobile « Titres-Services Bruxelles »',
    ],
    link: 'https://www.titre-service.brussels/citoyen/actualites/acces-espace-securise-apple',
  },
]

const tagStyles = {
  important: { bg: '#FFF1F2', color: '#E11D48', dot: '#E11D48' },
  formation: { bg: '#F0FBF4', color: '#16A34A', dot: '#16A34A' },
  info: { bg: '#FFF7ED', color: '#D97706', dot: '#D97706' },
}

export default function News() {
  const { t } = useTranslation()

  const tagConfig = {
    important: { label: t('news.tags.important'), ...tagStyles.important },
    formation: { label: t('news.tags.formation'), ...tagStyles.formation },
    info: { label: t('news.tags.info'), ...tagStyles.info },
  }

  return (
    <main>
      
      <section className="relative w-full overflow-hidden" style={{ height: 'clamp(220px, 40vw, 340px)' }}>
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center 60%' }}
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
              {t('nav.news')} · Brussels Net Services
            </span>
            <h1
              className="font-medium text-white mb-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.03em', lineHeight: 1.1, color: '#fff' }}
            >
              {t('news.title')}
            </h1>
            <p className="text-base" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '520px' }}>
              {t('news.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SOURCE BANNERS ── */}
      <div className="w-full px-4 lg:px-[60px] pt-10 flex flex-col gap-3">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
          className="flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm"
          style={{
            background: 'rgba(8,172,242,0.07)',
            border: '1px solid rgba(8,172,242,0.18)',
            color: 'var(--text)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span style={{ color: 'var(--muted)' }}>
            {t('news.source')} :{' '}
            <a
              href="https://www.titre-service.brussels"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
              style={{ color: 'var(--primary)' }}
            >
              www.titre-service.brussels
            </a>
            {' '}— {t('news.source_label')}
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
          className="flex items-center gap-3 px-5 py-3.5 rounded-xl text-sm"
          style={{
            background: 'rgba(8,172,242,0.07)',
            border: '1px solid rgba(8,172,242,0.18)',
            color: 'var(--text)',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span style={{ color: 'var(--muted)' }}>
            {t('news.source')} :{' '}
            <a
              href="https://titres-services.flandre.be"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
              style={{ color: 'var(--primary)' }}
            >
              titres-services.flandre.be
            </a>
            {' '}— {t('news.source_label_flanders')}
          </span>
        </motion.div>
      </div>

      {/* ── ARTICLES ── */}
      <section className="py-16 pb-24" style={{ background: 'var(--warm)' }}>
        <div className="w-full px-4 lg:px-[60px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="flex flex-col gap-6"
          >
            {articles.map((article) => {
              const tag = tagConfig[article.tag]
              return (
                <motion.article
                  key={article.title}
                  variants={fadeUp}
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: 'rgba(255,255,255,0.90)',
                    border: '1px solid rgba(255,255,255,0.95)',
                    boxShadow: '0 4px 24px rgba(8,172,242,0.06)',
                  }}
                >
                  {/* Top bar */}
                  <div
                    className="px-8 py-5 flex flex-wrap items-center gap-3 border-b"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    {/* Tag */}
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: tag.bg, color: tag.color }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: tag.dot }} />
                      {tag.label}
                    </span>
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{ background: 'rgba(8,172,242,0.08)', color: 'var(--primary)' }}
                    >
                      {article.category}
                    </span>
                    <span className="text-xs ml-auto" style={{ color: 'var(--muted)' }}>
                      {article.date}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="px-8 py-7">
                    <h2
                      className="font-medium mb-4"
                      style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.3 }}
                    >
                      {article.title}
                    </h2>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--muted)', maxWidth: '780px' }}>
                      {article.body}
                    </p>

                    {article.points && (
                      <ul className="flex flex-col gap-2 mb-6">
                        {article.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--text)' }}>
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                              style={{ background: 'var(--primary)' }}
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}

                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
                      style={{ color: 'var(--primary)' }}
                    >
                      {t('news.read_more')}
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>

          {/* Footer link */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-center"
          >
            <a
              href="https://www.titre-service.brussels/citoyen/actualites"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90"
              style={{ background: 'var(--primary)', color: '#fff' }}
            >
              {t('news.see_all')}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
