import { Link } from 'react-router-dom'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import logo from '../assets/go-global-logo.svg'

export default function Footer() {
  const footerRef = useRef(null)

  useGSAP(() => {
    gsap.from(footerRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 95%',
        toggleActions: 'play none none none'
      }
    })
  }, { scope: footerRef })

  return (
    <footer ref={footerRef} className="bg-brand-navy text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand & About Section */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6" aria-label="Go Global — Home">
              <img src={logo} alt="" aria-hidden="true" className="h-10 w-10 object-contain" width={40} height={40} />
              <div>
                <h3 className="font-display font-bold text-lg  text-brand-teal leading-tight tracking-wide">GLOBAL TIDES</h3>
                <p className="text-[9px] text-brand-teal font-bold tracking-[0.2em] uppercase">Migration & Advisory</p>
              </div>
            </Link>
            <p className="text-sand-200 text-sm leading-relaxed mb-6">
              Educational pathways. Global opportunities. Guiding students towards their international academic future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-brand-teal">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sand-200 hover:text-brand-gold transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-sand-200 hover:text-brand-gold transition-colors text-sm">Our Services</Link></li>
              <li><Link to="/destinations" className="text-sand-200 hover:text-brand-gold transition-colors text-sm">Study Destinations</Link></li>
              <li><Link to="/how-to-apply" className="text-sand-200 hover:text-brand-gold transition-colors text-sm">How to Apply</Link></li>
              <li><Link to="/contact" className="text-sand-200 hover:text-brand-gold transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-brand-teal">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-sand-200 hover:text-brand-gold transition-colors text-sm">University Placement</Link></li>
              <li><Link to="/services" className="text-sand-200 hover:text-brand-gold transition-colors text-sm">Visa Assistance</Link></li>
              <li><Link to="/services" className="text-sand-200 hover:text-brand-gold transition-colors text-sm">Scholarships</Link></li>
              <li><Link to="/services" className="text-sand-200 hover:text-brand-gold transition-colors text-sm">Career Guidance</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-brand-teal">Contact Info</h3>
            <ul className="space-y-3 text-sm text-sand-200">
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4 mt-0.5 text-brand-gold shrink-0" />
                <span>123 Global Street, Nairobi</span>
              </li>
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4 mt-0.5 text-brand-gold shrink-0" />
                <a href="tel:+254700123456" className="hover:text-brand-gold transition-colors">
                  +254 700 123 456
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4 mt-0.5 text-brand-gold shrink-0" />
                <a href="mailto:hello@globaltides.com" className="hover:text-brand-gold transition-colors">
                  hello@globaltides.com
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Facebook" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-sand-200 hover:bg-brand-teal hover:text-brand-navy transition-colors">
                <FontAwesomeIcon icon={faFacebookF} className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-sand-200 hover:bg-brand-teal hover:text-brand-navy transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-sand-200 hover:bg-brand-teal hover:text-brand-navy transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-sand-200">
          <p>&copy; {new Date().getFullYear()} Global Tides Migration & Advisory. All rights reserved.</p>
          <p className="text-sand-200/70">
            Website by <span className="text-brand-gold font-medium">Leon.O.</span>
          </p>
          <div className="space-x-6">
            <Link to="/privacy" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}