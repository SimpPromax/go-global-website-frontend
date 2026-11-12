import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGraduationCap,
  faPassport,
  faAward,
  faMoneyCheckDollar,
  faLanguage,
  faEnvelope,
  faArrowRight,
  faHeadset,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'

import universityImg from '../assets/apply_section_pics/university_admission.jpeg'
import visaImg from '../assets/apply_section_pics/visa assistance.jpeg'
import scholarshipImg from '../assets/apply_section_pics/scholarship.jpeg'
import financeImg from '../assets/apply_section_pics/finance.jpeg'
import englishImg from '../assets/apply_section_pics/english.jpeg'
import generalImg from '../assets/apply_section_pics/general.jpeg'

export default function Apply() {
  const [hovered, setHovered] = useState({})
  const [activeTitle, setActiveTitle] = useState(null)

  const applicationTypes = [
    {
      title: 'University Admission',
      desc: 'Apply to undergraduate or postgraduate programs at our partner institutions worldwide.',
      icon: faGraduationCap,
      link: '/apply/university-admission',
      bg: universityImg
    },
    {
      title: 'Student Visa Assistance',
      desc: 'Get expert help with your student visa application, interview prep, and compliance.',
      icon: faPassport,
      link: '/apply/visa-assistance',
      bg: visaImg
    },
    {
      title: 'Scholarship Application',
      desc: 'Apply for merit-based or need-based scholarships to fund your international studies.',
      icon: faAward,
      link: '/apply/scholarship',
      bg: scholarshipImg
    },
    {
      title: 'Education Financing',
      desc: 'Explore student loan options, payment plans, and financial aid opportunities.',
      icon: faMoneyCheckDollar,
      link: '/apply/education-financing',
      bg: financeImg
    },
    {
      title: 'English Preparation',
      desc: 'Register for IELTS, TOEFL, or English pathway programs to meet university requirements.',
      icon: faLanguage,
      link: '/apply/english-preparation',
      bg: englishImg
    },
    {
      title: 'General Enquiry',
      desc: 'Not sure where to start? Send us a message and one of our advisors will get back to you.',
      icon: faEnvelope,
      link: '/contact',
      bg: generalImg
    }
  ]

  // Chunk into rows of 3 for the expanding row layout
  const applicationRows = []
  for (let i = 0; i < applicationTypes.length; i += 3) {
    applicationRows.push(applicationTypes.slice(i, i + 3))
  }

  const handleRowEnter = (rowIndex, cardIndex, title) => {
    setHovered((prev) => ({ ...prev, [rowIndex]: cardIndex }))
    setActiveTitle(title)
  }

  const handleRowLeave = (rowIndex) => {
    setHovered((prev) => {
      const next = { ...prev }
      delete next[rowIndex]
      return next
    })
    setActiveTitle(null)
  }

  return (
    <div className="bg-white">

      {/* PAGE HERO */}
      <section className="bg-brand-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves-apply-hub" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#waves-apply-hub)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-teal text-sm font-semibold mb-6 backdrop-blur-sm">
            <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
            Start your journey
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Start Your{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-teal via-[#1098AD] to-brand-gold">
              Application
            </span>
          </h1>
          <p className="text-lg md:text-xl text-sand-200 max-w-2xl mx-auto leading-relaxed">
            Tell us how we can assist you. Select an option below to begin your specific application.
          </p>
        </div>
      </section>

      {/* SELECTION GRID */}
      <section className="relative py-24 bg-sand-50 overflow-hidden">

        {/* Background image stack — desktop only */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none">
          {applicationTypes.map((t) => (
            <img
              key={t.title}
              src={t.bg}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
                activeTitle === t.title ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          {/* Scrim so white cards + heading stay legible */}
          <div
            className={`absolute inset-0 bg-brand-navy/60 transition-opacity duration-700 ${
              activeTitle ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal text-sm font-semibold mb-4">
              <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
              Choose your path
            </div>
            <h2
              className={`text-3xl md:text-4xl font-display font-extrabold tracking-tight mb-4 transition-colors duration-500 ${
                activeTitle ? 'text-white' : 'text-brand-navy'
              }`}
            >
              What would you like to apply for?
            </h2>
            <p
              className={`transition-colors duration-500 ${
                activeTitle ? 'text-sand-200' : 'text-ink-soft'
              }`}
            >
              Each option opens a dedicated application tailored to that service.
            </p>
          </div>

          {/* Desktop: expanding rows of 3 */}
          <div className="hidden lg:flex lg:flex-col gap-6">
            {applicationRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex gap-6"
                onMouseLeave={() => handleRowLeave(rowIndex)}
              >
                {row.map((type, i) => {
                  const isHovered = hovered[rowIndex] === i
                  const isOther = hovered[rowIndex] !== undefined && hovered[rowIndex] !== i
                  return (
                    <Link
                      key={type.title}
                      to={type.link}
                      onMouseEnter={() => handleRowEnter(rowIndex, i, type.title)}
                      style={{ flexGrow: isHovered ? 6 : isOther ? 3 : 4 }}
                      className="group relative overflow-hidden h-100 basis-0 min-w-0 bg-white border border-sand-200 shadow-sm hover:shadow-xl hover:border-brand-teal/40 transition-all duration-500 ease-out flex flex-col p-8"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-brand-teal transition-colors"></div>

                      <div className="w-14 h-14 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center text-2xl mb-6 group-hover:bg-[#2251FF] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                        <FontAwesomeIcon icon={type.icon} />
                      </div>

                      <h3 className="text-xl font-display font-extrabold tracking-tight text-brand-navy mb-3">
                        {type.title}
                      </h3>

                      <p className="text-ink-soft text-sm leading-relaxed mb-8 grow pr-12">
                        {type.desc}
                      </p>

                      <div className="absolute bottom-8 right-8 w-10 h-10 bg-[#2251FF] flex items-center justify-center text-white transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                      </div>
                    </Link>
                  )
                })}
              </div>
            ))}
          </div>

          {/* Mobile / tablet: standard grid, no expand, no bg */}
          <div className="grid md:grid-cols-2 gap-6 lg:hidden">
            {applicationTypes.map((type, index) => (
              <Link
                key={index}
                to={type.link}
                className="group bg-white rounded-xl2 border border-sand-200 p-8 flex flex-col shadow-sm hover:shadow-xl hover:border-brand-teal/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-brand-teal transition-colors"></div>

                <div className="w-14 h-14 rounded-xl bg-brand-teal-light text-brand-teal flex items-center justify-center text-2xl mb-6 group-hover:bg-[#2251FF] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  <FontAwesomeIcon icon={type.icon} />
                </div>

                <h3 className="text-xl font-display font-extrabold tracking-tight text-brand-navy mb-3">
                  {type.title}
                </h3>

                <p className="text-ink-soft text-sm leading-relaxed mb-8 grow pr-12">
                  {type.desc}
                </p>

                <div className="absolute bottom-8 right-8 w-10 h-10 bg-[#2251FF] flex items-center justify-center text-white transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* HELP BAND — synced to #2251FF blue */}
      <section className="py-24 bg-[#2251FF] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-150 h-150 bg-[#1640CC] rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-125 h-125 bg-[#0A1F6E] rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/3"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 md:p-12 rounded-xl2 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 ring-1 ring-white/0 hover:ring-white/40 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="text-[#2251FF] text-4xl mt-1 shrink-0">
                <FontAwesomeIcon icon={faHeadset} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-extrabold tracking-tight text-brand-navy mb-2">
                  Need help choosing an application?
                </h3>
                <p className="text-ink-soft">
                  Speak to an advisor for free. We will help you figure out exactly what you need.
                </p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 h-12 font-semibold text-[#2251FF] border border-[#2251FF]/30 transition-all duration-300 hover:bg-brand-gold hover:text-brand-navy hover:border-brand-gold hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30 whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}