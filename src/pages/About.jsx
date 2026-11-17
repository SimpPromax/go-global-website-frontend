import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGraduationCap, 
  faPassport, 
  faHandHoldingDollar, 
  faCheckCircle,
  faLocationDot,
  faPhone,
  faEnvelope,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'
import clumsySvg from '../assets/about section pice/clumsy.svg'
import sittingReadingSvg from '../assets/about section pice/sitting-reading.svg'
import aboutHeroImg from '../assets/about section pice/about pic.jpeg'

export default function About() {
  const containerRef = useRef(null)

  useGSAP(() => {
    // Reveal text blocks
    gsap.utils.toArray('.reveal-text').forEach((elem) => {
      gsap.from(elem, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elem,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      })
    })

    // Reveal cards with stagger
    gsap.from('.reveal-card', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.card-grid',
        start: 'top 85%',
      }
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="bg-white">
      
      {/* PAGE HERO */}
      <section className="min-h-[calc(100vh-112px)] relative overflow-hidden flex items-end">
        {/* Background image */}
        <img
          src={aboutHeroImg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Navy overlay for text legibility */}
        <div className="absolute inset-0 bg-brand-navy/50"></div>

        {/* Subtle wave pattern on top of overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves-about" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#waves-about)"/>
          </svg>
        </div>

        {/* Hero visual area — spans ~80% of viewport width, centered */}
        <div className="relative w-[80vw] max-w-350 mx-auto h-[70vh] flex items-end pb-12">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-teal text-sm font-semibold mb-6 backdrop-blur-sm">
              <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
              Educational pathways. Global opportunities.
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              About{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-teal via-[#1098AD] to-brand-gold">
                Global Tides
              </span>
            </h1>
            <p className="text-lg text-sand-200 max-w-2xl leading-relaxed">
              Providing lawful pathways to global opportunities.
            </p>
          </div>
        </div>
      </section>


{/* WHAT WE DO */}
<section className="py-24 bg-sand-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section Heading */}
    <div className="text-center max-w-2xl mx-auto mb-16">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal-light text-brand-teal text-xs uppercase tracking-wider font-bold mb-4">
        <FontAwesomeIcon icon={faCheckCircle} className="w-3.5 h-3.5" />
        Our Services
      </div>

      <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-brand-navy mb-4">
        What We Do
      </h2>

      <p className="text-ink-soft text-lg leading-relaxed">
        We simplify the complex process of international migration and
        education so you can focus on your future.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid md:grid-cols-2 gap-6 items-stretch">

      {/* LEFT: Academic Placement */}
      <div className="flex">
        <div className="group relative bg-white p-8 md:p-11 rounded-3xl md:rounded-r-none border border-sand-200 hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-between w-full inverted-corners-right">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-brand-teal text-white flex items-center justify-center text-xl mb-7 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>

            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-brand-navy mb-4">
              Academic Placement
            </h3>

            <p className="text-ink-soft leading-relaxed">
              We match your academic profile and career goals with the right
              universities and programs across the globe.
            </p>

            <p className="text-ink-soft leading-relaxed mt-4">
              From shortlisting destinations to preparing your application
              materials, we ensure every step aligns with your budget,
              timeline, and long-term ambitions.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-sand-200/80 flex flex-wrap gap-2">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-sand-50 text-brand-navy">
              University Shortlisting
            </span>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-sand-50 text-brand-navy">
              Application Review
            </span>
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-sand-50 text-brand-navy">
              Career Alignment
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT: Stacked Cards */}
      <div className="flex flex-col gap-6">

        {/* Visa & Migration */}
        <div className="flex-1 flex">
          <div className="group relative bg-white p-8 md:p-9 rounded-3xl md:rounded-l-none border border-sand-200 hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-center w-full inverted-corners-left">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-navy text-white flex items-center justify-center text-xl group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300">
                <FontAwesomeIcon icon={faPassport} />
              </div>

              <div>
                <h3 className="text-xl font-display font-extrabold text-brand-navy mb-2">
                  Visa & Migration
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed">
                  Expert guidance through student visas, documentation, and
                  compliance to ensure a smooth transition.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Funding & Support */}
        <div className="flex-1 flex">
          <div className="group relative bg-white p-8 md:p-9 rounded-3xl md:rounded-l-none border border-sand-200 hover:border-brand-teal/40 transition-all duration-300 flex flex-col justify-center w-full inverted-corners-left">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-brand-gold text-brand-navy flex items-center justify-center text-xl group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={faHandHoldingDollar} />
              </div>

              <div>
                <h3 className="text-xl font-display font-extrabold text-brand-navy mb-2">
                  Funding & Support
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed">
                  Helping you identify scholarships, education financing,
                  and post-arrival support services.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

{/* WHY STUDY ABROAD (benefits + support) */}
<section className="py-24 bg-[#2251FF] relative overflow-hidden">
  {/* Subtle radial glow for depth */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 right-0 w-150 h-150 bg-[#1640CC] rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3"></div>
    <div className="absolute bottom-0 left-0 w-125 h-125 bg-[#0A1F6E] rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/3"></div>
  </div>

  {/* Image escapes the grid — positioned against the section, sized to viewport */}
  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-10 w-[48vw] max-w-none pointer-events-none">
    <img
      src={sittingReadingSvg}
      alt="A student planning their study-abroad journey"
      className="reveal-text w-full h-auto object-contain drop-shadow-2xl"
    />
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Single column on lg — text occupies left ~55%, image overlays right ~45% */}
    <div className="lg:max-w-[55%]">

      {/* Left: benefit copy */}
      <div className="reveal-text">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-sm font-semibold mb-5 backdrop-blur-sm">
          <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
          Why study abroad
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white mb-6">
          Benefits of studying abroad
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-4">
          Studying abroad shapes more than your degree. It broadens your academic options, builds
          international experience, and develops the independence and adaptability employers value.
        </p>
        <p className="text-white/70 leading-relaxed mb-8">
          Global Tides helps you look beyond the destination name, weighing your academic background,
          budget, and ambitions so each choice moves you closer to your goals.
        </p>

        <div className="space-y-4 mb-9">
          <div className="group flex gap-4 p-5 bg-transparent">
            <div className="w-10 h-10 rounded-full bg-white text-[#2251FF] flex items-center justify-center font-bold shrink-0 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300">
              1
            </div>
            <div>
              <h4 className="font-display font-extrabold text-white text-lg">Broader academic options</h4>
              <p className="text-sm text-white/70 mt-1 leading-relaxed">
                Access courses and qualifications that match your profile and career direction.
              </p>
            </div>
          </div>
          <div className="group flex gap-4 p-5 bg-transparent">
            <div className="w-10 h-10 rounded-full bg-white text-[#2251FF] flex items-center justify-center font-bold shrink-0 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300">
              2
            </div>
            <div>
              <h4 className="font-display font-extrabold text-white text-lg">Clearer costs & funding</h4>
              <p className="text-sm text-white/70 mt-1 leading-relaxed">
                Understand living costs, scholarships, and financing before you commit.
              </p>
            </div>
          </div>
          <div className="group flex gap-4 p-5 bg-transparent">
            <div className="w-10 h-10 rounded-full bg-white text-[#2251FF] flex items-center justify-center font-bold shrink-0 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300">
              3
            </div>
            <div>
              <h4 className="font-display font-extrabold text-white text-lg">Guided, lawful pathways</h4>
              <p className="text-sm text-white/70 mt-1 leading-relaxed">
                We handle applications, documentation, and visas so your transition stays compliant and smooth.
              </p>
            </div>
          </div>
        </div>

        <Link
          to="/how-to-apply"
          className="btn-primary min-h-0 border-0 px-7 py-3.5 text-base font-semibold group"
        >
          See how we help
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  </div>
</section>

{/* OUR APPLICATION PROCESS */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      <div className="reveal-text">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal text-sm font-semibold mb-5">
          <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
          How we help
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-brand-navy mb-6">
          Our Application Process
        </h2>
        <p className="text-ink-soft mb-8 leading-relaxed">
          We've streamlined the study abroad process into three clear steps. You provide the ambition, and we handle the logistics.
        </p>
        
        <div className="space-y-4">
          <div className="flex gap-4 p-5 rounded-2xl bg-white border border-transparent">
            <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold shrink-0">1</div>
            <div>
              <h4 className="font-display font-extrabold text-brand-navy text-lg">Consultation & Profiling</h4>
              <p className="text-sm text-ink-soft mt-1 leading-relaxed">We review your academic history, budget, and career goals to recommend the best destinations and courses.</p>
            </div>
          </div>
          <div className="flex gap-4 p-5 rounded-2xl bg-white border border-transparent">
            <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold shrink-0">2</div>
            <div>
              <h4 className="font-display font-extrabold text-brand-navy text-lg">Application & Funding</h4>
              <p className="text-sm text-ink-soft mt-1 leading-relaxed">We handle university applications, help secure scholarships, and prepare your financial documents.</p>
            </div>
          </div>
          <div className="flex gap-4 p-5 rounded-2xl bg-white border border-transparent">
            <div className="w-10 h-10 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold shrink-0">3</div>
            <div>
              <h4 className="font-display font-extrabold text-brand-navy text-lg">Visa & Departure</h4>
              <p className="text-sm text-ink-soft mt-1 leading-relaxed">Once accepted, we guide you through the visa process, accommodation booking, and pre-departure briefings.</p>
            </div>
          </div>
        </div>

        <div className="mt-9">
          <Link
            to="/how-to-apply"
            className="btn-primary min-h-0 border-0 px-7 py-3.5 text-base font-semibold group"
          >
            Read the full process
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Illustration */}
      <div className="reveal-text relative hidden lg:flex items-center justify-center">
        <img
          src={clumsySvg}
          alt="Application process illustration"
          className="relative w-full max-w-xl h-auto object-contain drop-shadow-2xl"
        />
      </div>

    </div>
  </div>
</section>

      {/* WHERE WE ARE LOCATED */}
      <section className="py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal-text">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal text-sm font-semibold mb-4">
              <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
              Visit us
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-brand-navy mb-4">
              Visit Our Office
            </h2>
            <p className="text-ink-soft">
              Have questions? Stop by for a free consultation. We'd love to meet you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 card-grid">
            {/* Contact Details */}
            <div className="reveal-card bg-white p-8 md:p-12 rounded-xl2 border border-sand-200 shadow-sm">
              <h3 className="text-2xl font-display font-extrabold text-brand-navy mb-8">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-teal-light text-brand-teal flex items-center justify-center shrink-0">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Head Office</h4>
                    <p className="text-ink-soft text-sm mt-1">123 Global Avenue, Suite 400<br />Nairobi, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-teal-light text-brand-teal flex items-center justify-center shrink-0">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Phone & WhatsApp</h4>
                    <p className="text-ink-soft text-sm mt-1">+254 700 123 456</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-teal-light text-brand-teal flex items-center justify-center shrink-0">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">Email</h4>
                    <p className="text-ink-soft text-sm mt-1">hello@globaltides.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-sand-200">
                <h4 className="font-bold text-brand-navy mb-2">Office Hours</h4>
                <p className="text-sm text-ink-soft">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="reveal-card bg-sand-200 rounded-xl2 overflow-hidden min-h-100 relative">
              {/* Replace this div with your actual Google Maps iframe */}
              <div className="absolute inset-0 flex items-center justify-center flex-col text-ink-muted bg-sand-100">
                <FontAwesomeIcon icon={faLocationDot} className="text-4xl mb-4 text-brand-navy/30" />
                <p className="font-semibold text-brand-navy/50">Google Maps Integration</p>
                <p className="text-sm text-brand-navy/40 mt-1">Embed your iframe here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND — synced to Home's wave-pattern navy band */}
      <section className="bg-brand-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves-about-cta" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#waves-about-cta)"/>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-text">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white mb-6">
            Ready to start your journey?
          </h2>
          <p className="text-sand-200 text-lg mb-8 max-w-2xl mx-auto">
            Let Global Tides guide you through your application and visa process so you can focus on your future.
          </p>
          <Link to="/apply" className="btn-primary text-lg px-10 group">
            Apply Now
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  )
}