import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPhone, 
  faEnvelope, 
  faLocationDot, 
  faClock,
  faPaperPlane,
  faCircleCheck,
  faCircleNotch,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'
import { 
  faWhatsapp, 
  faFacebookF, 
  faInstagram, 
  faTiktok 
} from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    
    // Simulate API submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    }, 1500)
  }

  return (
    <div className="bg-white">
      
      {/* PAGE HERO */}
      <section className="bg-brand-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves-contact" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#waves-contact)"/>
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-teal text-sm font-semibold mb-6 backdrop-blur-sm">
            <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
            We're here to help
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Contact{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-teal via-[#1098AD] to-brand-gold">
              Us
            </span>
          </h1>
          <p className="text-lg md:text-xl text-sand-200 max-w-2xl mx-auto leading-relaxed">
            We are here to help you. Reach out to our team for any questions or to start your journey.
          </p>
        </div>
      </section>

{/* CONTACT CONTENT */}
<section className="py-24 bg-sand-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-6 items-stretch">
      
      {/* LEFT: CONTACT DETAILS */}
      <div className="bg-white p-8 md:p-12 rounded-xl2 border border-sand-200 shadow-sm flex flex-col">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal text-sm font-semibold mb-5 self-start">
          <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
          Get in touch
        </div>
        <h2 className="text-3xl font-display font-extrabold tracking-tight text-brand-navy mb-4">
          Get In Touch
        </h2>
        <p className="text-ink-soft mb-10 leading-relaxed">
          Whether you are just starting to explore your options or ready to apply, our advisors are ready to assist you.
        </p>

        <div className="space-y-8">
          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center text-xl shrink-0">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-ink-muted uppercase tracking-wider mb-1">Phone</h3>
              <a href="tel:+254700123456" className="text-lg font-semibold text-brand-navy hover:text-brand-teal transition-colors block">
                +254 700 123 456
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center text-xl shrink-0">
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-ink-muted uppercase tracking-wider mb-1">WhatsApp</h3>
              <a href="https://wa.me/254700123456" target="_blank" rel="noreferrer" className="text-lg font-semibold text-brand-navy hover:text-brand-teal transition-colors block">
                +254 700 123 456
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center text-xl shrink-0">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-ink-muted uppercase tracking-wider mb-1">Email</h3>
              <a href="mailto:hello@globaltides.com" className="text-lg font-semibold text-brand-navy hover:text-brand-teal transition-colors block">
                hello@globaltides.com
              </a>
            </div>
          </div>

          {/* Office */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center text-xl shrink-0">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-ink-muted uppercase tracking-wider mb-1">Office</h3>
              <p className="text-brand-navy font-medium">
                123 Global Avenue, Suite 400<br />
                Nairobi, Kenya
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4 pt-6 border-t border-sand-200">
            <div className="w-12 h-12 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center text-xl shrink-0">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-ink-muted uppercase tracking-wider mb-1">Office Hours</h3>
              <p className="text-brand-navy font-medium">
                Mon - Fri: 8:00 AM - 5:00 PM<br />
                Sat: 9:00 AM - 1:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="mt-12 pt-8 border-t border-sand-200">
          <h3 className="text-sm font-bold text-brand-navy mb-4">Connect With Us</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-sand-100 text-brand-navy hover:bg-brand-navy hover:text-white transition-colors flex items-center justify-center">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-sand-100 text-brand-navy hover:bg-brand-navy hover:text-white transition-colors flex items-center justify-center">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full bg-sand-100 text-brand-navy hover:bg-brand-navy hover:text-white transition-colors flex items-center justify-center">
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT: ENQUIRY FORM */}
      <div className="bg-white p-8 md:p-12 rounded-xl2 border border-sand-200 shadow-sm flex flex-col">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal text-sm font-semibold mb-5 self-start">
          <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
          Send a message
        </div>
        <h2 className="text-3xl font-display font-extrabold tracking-tight text-brand-navy mb-2">
          Send an Enquiry
        </h2>
        <p className="text-ink-soft mb-8">
          Fill out the form below and we will get back to you within 24 hours.
        </p>

        {status === 'success' ? (
          <div className="bg-green-50 border border-green-200 p-8 text-center rounded-xl2 flex-1 flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>
            <h3 className="text-xl font-display font-extrabold tracking-tight text-green-900 mb-2">Message Sent!</h3>
            <p className="text-green-800 text-sm">Thank you for reaching out. Our team will be in touch shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="name">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl2 text-brand-navy placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl2 text-brand-navy placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="subject">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl2 text-brand-navy placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all"
                placeholder="e.g., Inquiry about studying in Canada"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2" htmlFor="message">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl2 text-brand-navy placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all resize-y"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-brand-gold hover:bg-brand-gold-hover text-brand-navy font-bold py-4 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg disabled:opacity-70 focus:outline-none focus:ring-4 focus:ring-brand-gold/30"
            >
              {status === 'submitting' ? (
                <>
                  <FontAwesomeIcon icon={faCircleNotch} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Enquiry <FontAwesomeIcon icon={faPaperPlane} />
                </>
              )}
            </button>
          </form>
        )}
      </div>

    </div>
  </div>
</section>

      {/* MAP SECTION */}
      <section className="bg-white h-100 w-full relative border-t border-sand-200">
        {/* Replace this placeholder with your actual Google Maps iframe */}
        <div className="absolute inset-0 bg-sand-100 flex items-center justify-center flex-col text-ink-muted">
          <FontAwesomeIcon icon={faLocationDot} className="text-5xl text-brand-navy/20 mb-4" />
          <p className="font-display font-extrabold tracking-tight text-xl text-brand-navy/50">Google Maps Integration</p>
          <p className="text-sm text-brand-navy/40 mt-2">Insert your map iframe here</p>
        </div>
      </section>

    </div>
  )
}