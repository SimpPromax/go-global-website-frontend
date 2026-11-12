import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faMagnifyingGlass, 
  faListCheck, 
  faFileSignature, 
  faClipboardCheck, 
  faEnvelopeOpenText, 
  faPlaneDeparture,
  faFileLines,
  faPassport,
  faCertificate,
  faLanguage,
  faPlus,
  faMinus,
  faArrowRight,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'

export default function HowToApply() {
  const [openFaq, setOpenFaq] = useState(null)

  const steps = [
    { 
      num: '01', 
      title: 'Discover Your Options', 
      desc: 'Explore our study destinations and available programmes to find what aligns with your goals.',
      icon: faMagnifyingGlass 
    },
    { 
      num: '02', 
      title: 'Choose Your Course', 
      desc: 'Identify your preferred course, institution, and intake period based on your academic profile.',
      icon: faListCheck 
    },
    { 
      num: '03', 
      title: 'Submit Your Application', 
      desc: 'Complete our online application form and upload your supporting documents.',
      icon: faFileSignature 
    },
    { 
      num: '04', 
      title: 'Application Review', 
      desc: 'Our advisors review your application and respond via email with the next steps or missing requirements.',
      icon: faClipboardCheck 
    },
    { 
      num: '05', 
      title: 'Admission & Next Steps', 
      desc: 'Receive your admission letter and get guidance on paying deposits and securing your place.',
      icon: faEnvelopeOpenText 
    },
    { 
      num: '06', 
      title: 'Prepare for Departure', 
      desc: 'We assist with your visa application, accommodation, and pre-departure briefings.',
      icon: faPlaneDeparture 
    }
  ]

  const documents = [
    { title: 'Academic Certificates', icon: faCertificate, desc: 'High school or previous degree certificates.' },
    { title: 'Academic Transcripts', icon: faFileLines, desc: 'Detailed records of your grades and modules.' },
    { title: 'Valid Passport', icon: faPassport, desc: 'Must be valid for at least 6 months beyond your intended stay.' },
    { title: 'English Proficiency', icon: faLanguage, desc: 'IELTS, TOEFL, or equivalent test scores (if applicable).' }
  ]

  const faqs = [
    {
      q: 'What qualifications do I need to apply?',
      a: 'Requirements vary by country and institution, but generally, you need a high school diploma for undergraduate studies or a bachelor\'s degree for postgraduate studies. Our advisors will review your specific profile during the consultation.'
    },
    {
      q: 'Can I apply without IELTS?',
      a: 'Yes, many institutions offer alternatives such as internal English tests, pathway programs, or accept proof of previous education in English. We can help you identify institutions that accept your profile.'
    },
    {
      q: 'Which countries can I study in?',
      a: 'We assist with applications to the UK, Canada, USA, Germany, Australia, New Zealand, South Korea, and several other destinations in Europe and Asia.'
    },
    {
      q: 'How long does the process take?',
      a: 'The timeline varies depending on the destination and intake. Generally, you should start your application 6 to 12 months before your intended start date to allow enough time for admissions and visa processing.'
    }
  ]

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="bg-white">
      
      {/* PAGE HERO */}
      <section className="bg-brand-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves-apply" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#waves-apply)"/>
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-teal text-sm font-semibold mb-6 backdrop-blur-sm">
            <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
            Your clear journey
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            How to{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-teal via-[#1098AD] to-brand-gold">
              Apply
            </span>
          </h1>
          <p className="text-lg md:text-xl text-sand-200 max-w-2xl mx-auto leading-relaxed">
            Your clear journey to international education. Follow these steps to start your application with Global Tides.
          </p>
        </div>
      </section>

      {/* THE APPLICATION PROCESS */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal text-sm font-semibold mb-4">
              <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
              Step by step
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-brand-navy mb-4">
              The Application Process
            </h2>
            <p className="text-ink-soft">
              Six simple steps from discovering your options to preparing for your flight.
            </p>
          </div>

          <div className="relative border-l-2 border-sand-200 ml-6 md:ml-0 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative pl-10 pb-12 last:pb-0 md:flex md:gap-8 md:pl-0">
                
                {/* Desktop Icon */}
                <div className="hidden md:flex flex-col items-center w-24 relative">
                  <div className="w-16 h-16 rounded-full bg-brand-teal-light text-brand-teal flex items-center justify-center text-2xl z-10 border-4 border-white shadow-sm relative">
                    <FontAwesomeIcon icon={step.icon} />
                    {/* Connector line for desktop */}
                    {index !== steps.length - 1 && (
                      <div className="absolute top-16 w-0.5 h-[calc(100%+2rem)] bg-sand-200 -z-10"></div>
                    )}
                  </div>
                </div>

                {/* Mobile Icon */}
                <div className="absolute -left-5.75 top-0 md:hidden w-10 h-10 rounded-full bg-brand-teal-light text-brand-teal flex items-center justify-center text-lg border-4 border-white shadow-sm">
                  <FontAwesomeIcon icon={step.icon} />
                </div>

                {/* Content */}
                <div className="md:pt-3">
                  <h3 className="flex items-center gap-3 text-xl font-display font-extrabold tracking-tight text-brand-navy mb-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-navy text-white text-sm font-bold shrink-0">
                      {index + 1}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-ink-soft leading-relaxed md:pl-11">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS YOU MAY NEED — synced to #2251FF blue */}
      <section className="py-24 bg-[#2251FF] relative overflow-hidden">
        {/* Subtle radial glow for depth */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-150 h-150 bg-[#1640CC] rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-125 h-125 bg-[#0A1F6E] rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/3"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-sm font-semibold mb-4 backdrop-blur-sm">
              <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
              Be prepared
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white mb-4">
              Documents You May Need
            </h2>
            <p className="text-white/80">
              To speed up your application, have these documents ready before you start.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, i) => (
              <div 
                key={i} 
                className="group bg-white p-8 shadow-lg hover:shadow-2xl text-center transition-all duration-300 ring-1 ring-white/0 hover:ring-white/40 hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-brand-teal-light text-brand-teal flex items-center justify-center text-2xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300">
                  <FontAwesomeIcon icon={doc.icon} />
                </div>
                <h3 className="text-lg font-display font-extrabold tracking-tight text-brand-navy mb-2">{doc.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{doc.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/apply"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 h-12 font-semibold text-[#2251FF] transition-all duration-300 hover:bg-brand-gold hover:text-brand-navy hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              Start Your Application
            </Link>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 bg-sand-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal text-sm font-semibold mb-4">
              <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
              Common questions
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-brand-navy mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`rounded-2xl border transition-all duration-300 ${
                  openFaq === index 
                    ? 'border-brand-teal/40 bg-white shadow-lg' 
                    : 'border-sand-200 bg-white/70 hover:border-brand-teal/40 hover:bg-white hover:shadow-md'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded-2xl"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-display font-extrabold text-brand-navy text-lg pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 flex items-center justify-center text-brand-teal transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                    <FontAwesomeIcon icon={openFaq === index ? faMinus : faPlus} />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-0 text-ink-soft leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-brand-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves-cta-apply" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#waves-cta-apply)"/>
          </svg>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white mb-6">
            Ready to begin?
          </h2>
          <p className="text-sand-200 text-lg mb-8 max-w-2xl mx-auto">
            Create your application profile today and let our advisors take it from there.
          </p>
          <Link to="/apply" className="btn-primary text-lg px-10 group">
            Begin Your Application
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  )
}