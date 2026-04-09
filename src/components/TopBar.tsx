import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'nl', label: 'NL' },
  { code: 'en', label: 'EN' },
]

export default function TopBar() {
  const { t, i18n } = useTranslation()

  return (
    <div style={{ backgroundColor: 'var(--primary)' }} className="w-full text-white">
      <div className="w-full px-4 lg:px-[60px] py-2.5 flex items-center justify-between gap-3 flex-wrap">
        {/* Address */}
        <a
          href="https://maps.google.com/?q=Rue+Pletinckx+10+1000+Bruxelles"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          {t('topbar.address')}
        </a>

        <div className="flex items-center gap-5">
          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/people/Brussels-Net-Services-Titres-Services/61583585865276/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/70 hover:text-white transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://web.whatsapp.com/send?phone=32471950207&text=Bienvenue%20chez%20Brussels%20Net%20Services" aria-label="WhatsApp" className="text-white/70 hover:text-white transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/brussels.net.services.ts/" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="mailto:info@brusselsnetservices.be" aria-label="Email" className="text-white/70 hover:text-white transition-colors">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>

          {/* Language switcher */}
          <div className="flex items-center gap-1 border-l border-white/20 pl-5">
            {languages.map(({ code, label }, i) => (
              <span key={code} className="flex items-center gap-1">
                <button
                  onClick={() => i18n.changeLanguage(code)}
                  className="text-xs font-semibold transition-colors px-1"
                  style={{ color: i18n.language === code ? '#fff' : 'rgba(255,255,255,0.5)' }}
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
      </div>
    </div>
  )
}
