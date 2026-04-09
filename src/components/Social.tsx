import { motion, type Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const Social = () => {
  const { t } = useTranslation()

  const cards = [
    {
      label: 'Facebook',
      handle: '@BrusselsNetServices',
      color: '#1877F2',
      bg: '#F0F5FF',
      icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>,
      fill: true,
      link: 'https://www.facebook.com/people/Brussels-Net-Services-Titres-Services/61583585865276/',
    },
    {
      label: 'WhatsApp',
      handle: t('social.follow'),
      color: '#25D366',
      bg: '#F0FBF4',
      icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>,
      fill: true,
      link: 'https://web.whatsapp.com/send?phone=32471950207&text=Bienvenue%20chez%20Brussels%20Net%20Services',
    },
    {
      label: 'Instagram',
      handle: '@brussels.net.services.ts',
      color: '#E1306C',
      bg: '#FFF0F5',
      icon: (
        <>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </>
      ),
      fill: false,
      link: 'https://www.instagram.com/brussels.net.services.ts/',
    },
    {
      label: 'Email',
      handle: 'info@brusselsnetservices.be',
      color: '#08ACF2',
      bg: '#F0FAFF',
      icon: (
        <>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </>
      ),
      fill: false,
      link: 'mailto:info@brusselsnetservices.be',
    },
  ]

  return (
    <section className="py-20" style={{ background: '#fff' }}>
      <div className="w-full px-4 lg:px-[60px]">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--primary)' }}>
                {t('social.label')}
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl font-medium" style={{ letterSpacing: '-0.03em' }}>
                {t('social.title')}
              </motion.h2>
            </div>
            <motion.p variants={fadeUp} className="text-base" style={{ color: 'var(--muted)', maxWidth: '340px' }}>
              {t('social.text')}
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {cards.map(({ label, handle, color, bg, icon, fill, link }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{ background: bg, border: '1px solid transparent' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = color + '33')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: color + '18' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24"
                    fill={fill ? color : 'none'}
                    stroke={fill ? 'none' : color}
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  >
                    {icon}
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{label}</p>
                  <p className="text-xs truncate" style={{ color: 'var(--muted)' }}>{handle}</p>
                </div>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Social
