import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'fr', label: 'FR' },
  { code: 'nl', label: 'NL' },
  { code: 'en', label: 'EN' },
]

export default function TopBar() {
  const { i18n } = useTranslation()

  return (
    <div style={{ backgroundColor: 'var(--primary)' }} className="w-full text-white">
      <div className="w-full px-4 lg:px-[60px] py-2.5 flex items-center justify-between gap-3 flex-wrap">
        {/* Address + Phone + Email */}
        <div className="hidden sm:flex items-center gap-5">
          <a
            href="https://maps.google.com/?q=Rue+Pletinckx+10+1000+Bruxelles"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
            </svg>
            Rue Pletinckx 10, 1000 Bruxelles
          </a>
          <span className="text-white/20">·</span>
          <a href="tel:+32471950207" className="flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            0471/95.02.07
          </a>
          <span className="text-white/20">·</span>
          <a href="mailto:info@bns.brussels" className="flex items-center gap-1.5 text-sm text-white/80 hover:text-white transition-colors">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            info@bns.brussels
          </a>
        </div>

        <div className="flex items-center gap-5">
          {/* Language switcher */}
          <div className="flex items-center gap-1">
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
