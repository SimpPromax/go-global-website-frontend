import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGraduationCap, 
  faFileSignature, 
  faPassport, 
  faAward, 
  faMoneyCheckDollar, 
  faBriefcase, 
  faLanguage, 
  faFileLines, 
  faBed, 
  faPlaneDeparture, 
  faEarthAmericas, 
  faHandshake,
  faArrowRight,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'

// Card: fixed-height content (Option B) + fixed footer with gold arrow icon.
// Height never depends on width reflow, so the expanding hover only changes width.
const ServiceCard = ({ service, isHovered, isOther, onMouseEnter }) => (
  <Link
    to={service.link}
    onMouseEnter={onMouseEnter}
    style={{ flexGrow: isHovered ? 6 : isOther ? 3 : 4 }}
    className="group bg-white rounded-xl2 border border-sand-200 shadow-sm hover:shadow-xl hover:border-brand-teal/40 transition-all duration-500 ease-out flex flex-col self-stretch basis-0 min-w-0 relative overflow-hidden ring-1 ring-brand-navy/0 hover:ring-brand-gold/40"
  >
    {/* SECTION 1 — fixed height; cannot change on width reflow */}
    <div className="p-8 pb-4 h-70 flex flex-col overflow-hidden">
      <div className="w-14 h-14 shrink-0 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center text-2xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-navy group-hover:scale-110 transition-all duration-300">
        <FontAwesomeIcon icon={service.icon} />
      </div>
      <h3 className="text-xl font-display font-extrabold tracking-tight text-brand-navy mb-3 group-hover:text-brand-teal transition-colors line-clamp-2">
        {service.title}
      </h3>
      <p className="text-ink-soft text-sm leading-relaxed line-clamp-3">
        {service.desc}
      </p>
    </div>

    {/* SECTION 2 — fixed-height footer with gold arrow icon (matches Destinations) */}
    <div className="h-14 shrink-0 px-8 flex items-center justify-end border-t border-sand-100">
      <div className="w-10 h-10 bg-brand-gold flex items-center justify-center text-brand-navy transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 shrink-0">
        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
      </div>
    </div>
  </Link>
)

export default function Services() {
  // Tracks hovered card per row: key = `${catIndex}-${rowIndex}`
  const [hovered, setHovered] = useState({})

  const handleCardEnter = (key, cardIndex) => {
    setHovered((prev) => ({ ...prev, [key]: cardIndex }))
  }

  const handleRowLeave = (key) => {
    setHovered((prev) => {
      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  const serviceCategories = [
    {
      title: "Admissions & Placement",
      description: "We help you find and secure a place at the right institution.",
      services: [
        { title: 'University Placement', desc: 'Find the perfect university and course that matches your academic profile and career goals.', icon: faGraduationCap, link: '/services/university-placement' },
        { title: 'Admission Assistance', desc: 'End-to-end support with application forms, personal statements, and submitting required documents.', icon: faFileSignature, link: '/services/admission-assistance' },
        { title: 'Document Preparation', desc: 'Guidance on formatting, verifying, and translating academic transcripts and certificates.', icon: faFileLines, link: '/services/document-preparation' },
      ]
    },
    {
      title: "Funding, Language & Visa",
      description: "We ensure you have the financial means and legal clearance to study.",
      services: [
        { title: 'Visa Assistance', desc: 'Expert guidance on student visa applications, interview prep, and compliance to ensure high success rates.', icon: faPassport, link: '/services/visa-assistance' },
        { title: 'Scholarships', desc: 'Identify and apply for merit-based and need-based scholarships to reduce your financial burden.', icon: faAward, link: '/services/scholarships' },
        { title: 'Education Financing', desc: 'Explore student loans, payment plans, and financial aid options available to international students.', icon: faMoneyCheckDollar, link: '/services/education-financing' },
        { title: 'English Preparation', desc: 'Coaching and registration for IELTS, TOEFL, and other English proficiency tests.', icon: faLanguage, link: '/services/english-preparation' },
      ]
    },
    {
      title: "Life, Career & Logistics",
      description: "Supporting you before you leave and after you arrive.",
      services: [
        { title: 'Career Guidance', desc: 'Align your studies with future job markets and get advice on post-study work opportunities.', icon: faBriefcase, link: '/services/career-guidance' },
        { title: 'Accommodation', desc: 'Help finding safe, affordable student housing, on-campus or off-campus.', icon: faBed, link: '/services/accommodation' },
        { title: 'Pre-Departure Support', desc: 'Briefings on what to pack, culture shock, travel arrangements, and what to expect at the border.', icon: faPlaneDeparture, link: '/services/pre-departure-support' },
        { title: 'Post-Arrival Support', desc: 'Assistance with bank accounts, SIM cards, orientation, and settling into your new city.', icon: faEarthAmericas, link: '/services/post-arrival-support' },
        { title: 'Institutional Partnerships', desc: 'Direct pathways and exclusive benefits through our network of global university partners.', icon: faHandshake, link: '/services/institutional-partnerships' },
      ]
    }
  ]

  return (
    <div className="bg-white">
      
      {/* PAGE HERO */}
      <section className="bg-brand-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves-services" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#waves-services)"/>
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-teal text-sm font-semibold mb-6 backdrop-blur-sm">
            <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
            End-to-end support
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-teal via-[#1098AD] to-brand-gold">
              Services
            </span>
          </h1>
          <p className="text-lg md:text-xl text-sand-200 max-w-2xl mx-auto leading-relaxed">
            Helping you achieve your global goals with comprehensive support at every stage of your journey.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {serviceCategories.map((category, catIndex) => {
            // Chunk this category's services into rows of 3
            const rows = []
            for (let i = 0; i < category.services.length; i += 3) {
              rows.push(category.services.slice(i, i + 3))
            }

            return (
              <div key={catIndex} className="mb-20 last:mb-0">
                
                {/* Category Header */}
                <div className="mb-10 border-b border-sand-200 pb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal text-sm font-semibold mb-4">
                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
                    {String(catIndex + 1).padStart(2, '0')} — Category
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-extrabold tracking-tight text-brand-navy mb-2">
                    {category.title}
                  </h2>
                  <p className="text-ink-soft text-lg leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Desktop: expanding rows of 3 — height locked by fixed content, only width animates */}
                <div className="hidden lg:flex lg:flex-col gap-6">
                  {rows.map((row, rowIndex) => {
                    const key = `${catIndex}-${rowIndex}`
                    return (
                      <div
                        key={rowIndex}
                        className="flex items-stretch gap-6"
                        onMouseLeave={() => handleRowLeave(key)}
                      >
                        {row.map((service, i) => {
                          const isHovered = hovered[key] === i
                          const isOther = hovered[key] !== undefined && hovered[key] !== i
                          return (
                            <ServiceCard
                              key={i}
                              service={service}
                              isHovered={isHovered}
                              isOther={isOther}
                              onMouseEnter={() => handleCardEnter(key, i)}
                            />
                          )
                        })}
                      </div>
                    )
                  })}
                </div>

                {/* Mobile / tablet: standard grid, equal rows via auto-rows-fr */}
                <div className="grid md:grid-cols-2 auto-rows-fr gap-6 lg:hidden">
                  {category.services.map((service, i) => (
                    <ServiceCard
                      key={i}
                      service={service}
                      isHovered={false}
                      isOther={false}
                      onMouseEnter={() => {}}
                    />
                  ))}
                </div>

              </div>
            )
          })}

        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-brand-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves-cta-services" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#waves-cta-services)"/>
          </svg>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white mb-6">
            Not sure which service you need?
          </h2>
          <p className="text-sand-200 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a free 15-minute consultation with our advisors and we will point you in the right direction.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/apply" className="btn-primary text-lg px-10 group">
              Apply Now
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="btn-secondary text-white border-white hover:bg-white hover:text-brand-navy">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}