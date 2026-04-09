import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import logoColor from '../assets/logo-color.webp'

export default function Navbar() {
  const { t } = useTranslation()

  const links = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.tasks'), to: '/taches-autorisees' },
    { label: t('nav.request'), to: '/demander-aide-menagere' },
    { label: t('nav.job'), to: '/job' },
    { label: t('nav.news'), to: '/news' },
  ]
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const isContactActive = location.pathname === '/contact'

  return (
    <nav
      className="sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.80)' : '#fff',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        boxShadow: scrolled ? '0 2px 24px rgba(8,172,242,0.10)' : '0 1px 0 #E5E7EB',
      }}
    >
      <div className="w-full px-4 lg:px-[60px]">
        <div className="flex items-center justify-between" style={{ height: '72px' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={logoColor} alt="Brussels Net Services" style={{ height: '68px', width: 'auto' }} />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <ul className="flex items-center gap-1">
              {links.map((link) => {
                const active = location.pathname === link.to
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className={`nav-link${active ? ' nav-active' : ''} relative px-3.5 py-2 text-sm font-medium block transition-colors duration-200`}
                      style={{ color: active ? 'var(--primary)' : '#374151' }}
                    >
                      {link.label}
                      <span
                        className="nav-underline absolute bottom-0 left-3.5 right-3.5 h-px origin-center transition-transform duration-300"
                        style={{
                          backgroundColor: 'var(--primary)',
                          transform: active ? 'scaleX(1)' : 'scaleX(0)',
                        }}
                      />
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Contact button */}
            <Link
              to="/contact"
              className="ml-4 inline-flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.97]"
              style={{
                background: isContactActive ? 'var(--primary-d)' : 'var(--primary)',
                color: '#fff',
                boxShadow: '0 2px 12px rgba(8,172,242,0.30)',
              }}
            >
              {t('nav.contact')}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-gray-700 rounded origin-center" />
            <motion.span animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block w-5 h-0.5 bg-gray-700 rounded" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-gray-700 rounded origin-center" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="lg:hidden fixed left-0 right-0 border-t border-gray-100 shadow-xl"
            style={{
              top: scrolled ? 'var(--navbar-h)' : 'var(--headers-h)',
              zIndex: 9999,
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <ul className="px-4 py-4 flex flex-col gap-1">
              {[...links, { label: t('nav.contact'), to: '/contact' }].map((link) => {
                const active = location.pathname === link.to
                const isContact = link.to === '/contact'
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="block px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                      style={{
                        color: isContact ? '#fff' : active ? 'var(--primary)' : '#374151',
                        background: isContact ? 'var(--primary)' : active ? '#E8F7FE' : 'transparent',
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
