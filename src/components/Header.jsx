import { useState, useRef, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import logo from '../assets/go-global-logo.svg'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const headerRef = useRef(null)
  const location = useLocation()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.out'
    })
  }, { scope: headerRef })

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'How to Apply', path: '/how-to-apply' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top Contact Bar */}
      <div className="bg-brand-navy text-white text-xs py-2 text-center font-medium tracking-wide">
        Ready to start your journey? Call us: +254 700 123 456
      </div>

      {/* Main Navbar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-sand-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3" aria-label="Go Global — Home">
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                className="h-12 w-12 md:h-14 md:w-14 object-contain"
                width={56}
                height={56}
              />
              <div className="hidden sm:block">
                <div className="font-display font-bold text-brand-navy text-lg leading-tight tracking-wide">
                  GLOBAL TIDES
                </div>
                <div className="text-[10px] text-brand-teal font-bold tracking-[0.2em] uppercase">
                  Educational Pathways
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    [
                      'relative group px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                      isActive
                        ? 'text-orange-500 font-semibold bg-orange-50'
                        : 'text-ink-soft hover:text-orange-500 hover:bg-orange-50/60',
                    ].join(' ')
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Link to="/apply" className="btn-primary ml-4">
                Talk To A Councellor
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden p-2 text-brand-navy focus:outline-none"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-sand-200 px-4 pt-2 pb-6 space-y-1 shadow-xl">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  [
                    'flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors',
                    isActive
                      ? 'bg-orange-50 text-orange-500 font-semibold border-l-4 border-orange-500'
                      : 'text-ink-soft hover:bg-sand-50 hover:text-brand-navy border-l-4 border-transparent',
                  ].join(' ')
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="pt-4">
              <Link to="/apply" onClick={() => setIsOpen(false)} className="btn-primary w-full">
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}