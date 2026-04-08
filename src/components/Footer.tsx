import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logoWhite from '../assets/logo-white.webp'

export default function Footer() {
  const { t } = useTranslation()

  const links = [
    { labelKey: 'nav.home', to: '/' },
    { labelKey: 'nav.tasks', to: '/taches-autorisees' },
    { labelKey: 'nav.request', to: '/demander-aide-menagere' },
    { labelKey: 'nav.job', to: '/job' },
    { labelKey: 'nav.news', to: '/news' },
    { labelKey: 'nav.contact', to: '/contact' },
  ]

  const hours = t('office.hours', { returnObjects: true }) as { day: string; time: string }[]

  return (
    <footer style={{ backgroundColor: 'var(--primary)' }} className="text-white mt-auto">
      <div className="w-full px-[60px] py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img src={logoWhite} alt="Brussels Net Services" style={{ height: '80px', width: 'auto' }} />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex gap-4 mt-8">
              {[
                { label: 'Facebook', href: 'https://www.facebook.com/people/Brussels-Net-Services-Titres-Services/61583585865276/', icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/> },
                { label: 'WhatsApp', href: '#', icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/> },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">{icon}</svg>
                </a>
              ))}
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

          {/* Hours */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-6">
              {t('footer.hours')}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {hours.map(({ day, time }) => (
                <li key={day} className="flex justify-between text-sm">
                  <span className="text-white/60">{day}</span>
                  <span className="text-white/90 font-medium">{time}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm text-white/60 leading-relaxed">
                {t('topbar.address')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-xs">
            © {new Date().getFullYear()} Brussels Net Services. {t('footer.copyright')}
          </p>
          <p className="text-white/60 text-xs">
            {t('footer.certified')}
          </p>
        </div>
      </div>
    </footer>
  )
}
