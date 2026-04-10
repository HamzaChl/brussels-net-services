import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logoWhite from '../assets/logo-white.webp'

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'nl', label: 'NL' },
  { code: 'en', label: 'EN' },
]

export default function Footer() {
  const { t, i18n } = useTranslation()

  const links = [
    { labelKey: 'nav.home', to: '/' },
    { labelKey: 'nav.tasks', to: '/taches-autorisees' },
    { labelKey: 'nav.request', to: '/demander-aide-menagere' },
    { labelKey: 'nav.job', to: '/job' },
    { labelKey: 'nav.news', to: '/news' },
    { labelKey: 'nav.contact', to: '/contact' },
  ]

  return (
    <footer style={{ backgroundColor: 'var(--primary)' }} className="text-white mt-auto">
      <div className="w-full px-4 lg:px-[60px] py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img src={logoWhite} alt="Brussels Net Services" style={{ height: '80px', width: 'auto' }} />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {/* Facebook */}
              <a href="https://www.facebook.com/people/Brussels-Net-Services-Titres-Services/61583585865276/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.1)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/brussels.net.services.ts/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.1)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              {/* WhatsApp */}
              <a href="https://web.whatsapp.com/send?phone=32471950207" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.1)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </a>
              {/* Email */}
              <a href="mailto:info@bns.brussels" aria-label="Email"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'rgba(255,255,255,0.1)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-6">
              {t('footer.navigation')}
            </h4>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-white/70 hover:text-white transition-colors">
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-6">
              {t('footer.legal')}
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/mentions-legales" className="text-sm text-white/70 hover:text-white transition-colors">
                  {t('nav.legal')}
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="text-sm text-white/70 hover:text-white transition-colors">
                  {t('nav.privacy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap">
          <p className="text-white/70 text-xs">
            © {new Date().getFullYear()} Brussels Net Services. {t('footer.copyright')}
          </p>

          <div className="flex items-center gap-4">
            {/* Language switcher */}
            <div className="flex items-center gap-1">
              {languages.map(({ code, label }, i) => (
                <span key={code} className="flex items-center gap-1">
                  <button
                    onClick={() => i18n.changeLanguage(code)}
                    className="text-xs font-semibold transition-colors px-1.5 py-0.5 rounded"
                    style={{
                      color: i18n.language === code ? '#fff' : 'rgba(255,255,255,0.4)',
                      background: i18n.language === code ? 'rgba(255,255,255,0.15)' : 'transparent',
                    }}
                  >
                    {label}
                  </button>
                  {i < languages.length - 1 && (
                    <span className="text-white/20 text-xs">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <p className="text-white/60 text-xs">
            {t('footer.certified')}
          </p>
        </div>
      </div>
    </footer>
  )
}
