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

export default function Services() {

  // Organized into categories
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

  // Reusable Card Component — synced to Home's white-card-on-cream treatment
  const ServiceCard = ({ service }) => (
    <Link
      to={service.link}
      className="group bg-white p-8 rounded-xl2 border border-sand-200 shadow-sm hover:shadow-xl hover:border-brand-teal/40 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden ring-1 ring-brand-navy/0 hover:ring-brand-gold/40"
    >
      <div className="w-14 h-14 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center text-2xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-navy group-hover:scale-110 transition-all duration-300">
        <FontAwesomeIcon icon={service.icon} />
      </div>
      <h3 className="text-xl font-display font-extrabold tracking-tight text-brand-navy mb-3 group-hover:text-brand-teal transition-colors">
        {service.title}
      </h3>
      <p className="text-ink-soft text-sm leading-relaxed mb-6 grow">{service.desc}</p>
      
      <div className="flex items-center gap-2 text-sm font-semibold text-brand-teal mt-auto">
        Learn More 
        <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  )

  return (
    <div className="bg-white">
      
      {/* PAGE HERO — synced to Home/About hero */}
      <section className="bg-brand-navy py-24 relative overflow-hidden">
        {/* Subtle background pattern */}
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
          
          {serviceCategories.map((category, index) => (
            <div key={index} className="mb-20 last:mb-0">
              
              {/* Category Header — synced with badge + display heading */}
              <div className="mb-10 border-b border-sand-200 pb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal text-sm font-semibold mb-4">
                  <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
                  {String(index + 1).padStart(2, '0')} — Category
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-extrabold tracking-tight text-brand-navy mb-2">
                  {category.title}
                </h2>
                <p className="text-ink-soft text-lg leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Category Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, i) => (
                  <ServiceCard key={i} service={service} />
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* CTA BAND — synced to Home's wave-pattern navy band */}
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