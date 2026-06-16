import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#problem', label: 'The problem' },
  { href: '#how', label: 'How it works' },
  { href: '#who', label: "Who it's for" },
  { href: '#zerowaste', label: 'Zero-waste' },
  { href: '#traction', label: 'Traction' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={'nav' + (scrolled ? ' scrolled' : '')} id="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top" aria-label="ThengaPari home">
            <img className="mark" src="/assets/logo-mark.svg" alt="" />
            <span className="name">
              <b>ThengaPari</b>
              <span>തേങ്ങാപ്പറി</span>
            </span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <a href="#signup" className="btn btn-outline">
              For businesses
            </a>
            <a href="#signup" className="btn btn-accent">
              Get started
            </a>
            <button
              className="nav-toggle"
              id="navToggle"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className={'mobile-menu' + (menuOpen ? ' open' : '')} id="mobileMenu">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={closeMenu}>
            {l.label}
          </a>
        ))}
        <a href="#signup" className="btn btn-outline" onClick={closeMenu}>
          For businesses
        </a>
        <a href="#signup" className="btn btn-accent" onClick={closeMenu}>
          Get started
        </a>
      </div>
    </>
  )
}
