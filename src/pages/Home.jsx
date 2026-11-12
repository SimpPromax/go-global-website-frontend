import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons'
import HeroBackground from '../components/HeroBackground'

import departureSvg from '../assets/service section pics/departure.svg'
import guidanceSvg from '../assets/service section pics/guidance.svg'
import scholarshipSvg from '../assets/service section pics/scholarship.svg'
import supportSvg from '../assets/service section pics/support.svg'
import universityPlacementSvg from '../assets/service section pics/university placement.svg'
import visaAssistanceSvg from '../assets/service section pics/visa assistance.svg'

// University network — replace with your real data / API
const universities = [
  { name: 'Johns Hopkins University', country: 'united-states', slug: 'johns-hopkins-university', logo: 'https://craydel-testing-space.fra1.cdn.digitaloceanspaces.com/home/universities/johns-hopkins-university.webp' },
  { name: 'University of British Columbia', country: 'canada', slug: 'university-of-british-columbia', logo: 'https://craydel-testing-space.fra1.cdn.digitaloceanspaces.com/home/universities/ubc.webp' },
  { name: 'University of Bristol', country: 'united-kingdom', slug: 'university-of-bristol', logo: 'https://craydel-testing-space.fra1.cdn.digitaloceanspaces.com/home/universities/university-of-bristol.webp' },
  { name: 'Trinity College Dublin', country: 'ireland', slug: 'trinity-college-dublin', logo: 'https://craydel-testing-space.fra1.cdn.digitaloceanspaces.com/home/universities/trinity-college-dublin.webp' },
  { name: 'University of Western Australia', country: 'australia', slug: 'university-of-western-australia', logo: 'https://craydel-testing-space.fra1.cdn.digitaloceanspaces.com/home/universities/uni-of-western-australia.webp' },
  { name: 'University of Sheffield', country: 'united-kingdom', slug: 'university-of-sheffield', logo: 'https://craydel-testing-space.fra1.cdn.digitaloceanspaces.com/home/universities/university-of-sheffield.webp' },
  { name: 'University College Dublin', country: 'ireland', slug: 'university-college-dublin', logo: 'https://craydel-testing-space.fra1.cdn.digitaloceanspaces.com/home/universities/university-college-dublin.webp' },
  { name: 'University of Exeter', country: 'united-kingdom', slug: 'university-of-exeter', logo: 'https://craydel-testing-space.fra1.cdn.digitaloceanspaces.com/home/universities/exeter.webp' },
  { name: "Queen's University", country: 'canada', slug: 'queens-university', logo: 'https://craydel-testing-space.fra1.cdn.digitaloceanspaces.com/home/universities/queens-university.webp' },
  { name: 'University of Reading', country: 'united-kingdom', slug: 'university-of-reading', logo: 'https://craydel-testing-space.fra1.cdn.digitaloceanspaces.com/home/universities/university-of-reading.webp' },
  { name: "Queen's University Belfast", country: 'united-kingdom', slug: 'queens-university-belfast', logo: 'https://craydel-testing-space.fra1.cdn.digitaloceanspaces.com/home/universities/queens-university-belfast.webp' },
  { name: 'Massey University', country: 'new-zealand', slug: 'massey-university', logo: 'https://craydel-testing-space.fra1.cdn.digitaloceanspaces.com/home/universities/massey-university.webp' },
]

export default function Home() {
  const heroRef = useRef(null)
  const [hovered, setHovered] = useState({})

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from('.hero-text', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.2
    })
    .from('.hero-image', {
      x: 30,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, "-=0.6")
    .from('.hero-bg-fade', {
      opacity: 0,
      duration: 1.2,
      ease: 'power2.out'
    }, 0)
  }, { scope: heroRef })

  const topServices = [
    { title: 'University Placement', desc: 'Find the right institution for your academic goals.', icon: universityPlacementSvg },
    { title: 'Visa Assistance', desc: 'Navigate the complex visa process with confidence.', icon: visaAssistanceSvg },
    { title: 'Scholarships', desc: 'Discover funding opportunities to support your studies.', icon: scholarshipSvg },
    { title: 'Career Guidance', desc: 'Align your studies with your long-term career path.', icon: guidanceSvg },
    { title: 'Application Support', desc: 'Get expert help with forms, essays, and deadlines.', icon: supportSvg },
    { title: 'Pre-Departure Briefing', desc: 'Arrive prepared with travel and settling-in guidance.', icon: departureSvg },
  ]

  const serviceRows = [topServices.slice(0, 3), topServices.slice(3, 6)]

  const steps = [
    { number: '01', title: 'Course and university guidance', desc: 'Compare suitable courses, institutions and destinations based on your goals, academic background and preferences.' },
    { number: '02', title: 'Application support', desc: 'Understand requirements, organise your documents and prepare a complete university application.' },
    { number: '03', title: 'Visa guidance', desc: 'Get practical guidance on the application process, required documents and important preparation steps.' },
    { number: '04', title: 'Accommodation guidance', desc: 'Explore available accommodation options and understand what to consider before booking.' },
    { number: '05', title: 'Pre-departure support', desc: 'Prepare for travel, arrival and the practical changes that come with studying in another country.' },
  ]

  const topDestinations = [
    { name: 'United Kingdom', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop' },
    { name: 'Canada', image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop' },
    { name: 'USA', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=800&auto=format&fit=crop' },
    { name: 'Germany', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=800&auto=format&fit=crop' },
  ]

  const handleRowEnter = (rowIndex, cardIndex) => {
    setHovered((prev) => ({ ...prev, [rowIndex]: cardIndex }))
  }

  const handleRowLeave = (rowIndex) => {
    setHovered((prev) => {
      const next = { ...prev }
      delete next[rowIndex]
      return next
    })
  }

  return (
    <div>
      {/* 1 ── HERO (white) */}
      <section
        ref={heroRef}
        className="relative bg-white min-h-[calc(100vh-112px)] flex items-center overflow-hidden"
      >
        <div className="hero-bg-fade absolute inset-0 z-0">
          <HeroBackground />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <div className="hero-text inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal text-sm font-semibold mb-6">
                <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
                Educational pathways. Global opportunities.
              </div>

              <h1 className="hero-text text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-brand-navy leading-[1.15] max-w-2xl mb-6">
                Unlock International Opportunities with{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-teal via-[#1098AD] to-brand-gold">
                  Go Global
                </span>
              </h1>

              <p className="hero-text text-lg text-ink-soft mb-8 leading-relaxed">
                Discover international study opportunities and let us guide you towards your academic future.
              </p>

              <div className="hero-text flex flex-col sm:flex-row gap-4">
                <Link to="/destinations" className="btn-primary group">
                  Explore Destinations
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/apply" className="btn-secondary">
                  talk to a counsellor
                </Link>
              </div>
            </div>

            <div className="hero-image relative hidden lg:flex items-center justify-center">
              <img
                src="/float.png"
                alt="Students flying towards global opportunities"
                className="relative w-full max-w-xl h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2 ── UNIVERSITY NETWORK (cream / sand-50) */}
      <section className="py-24 bg-sand-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal text-sm font-semibold mb-4">
              <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
              Our University Network
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-brand-navy mb-4">
              600+ university profiles.
              <br />
              50 study destinations.
            </h2>
          </div>
        </div>

        <div className="relative w-full">
          <div className="marquee">
            <div className="marquee__track">
              {[...universities, ...universities].map((uni, i) => (
                <div
                  key={`${uni.slug}-${i}`}
                  className="marquee__item"
                  aria-hidden={i >= universities.length ? 'true' : undefined}
                >
                  <Link
                    to={`/universities/${uni.country}/${uni.slug}`}
                    aria-label={uni.name}
                    className="group flex items-center justify-center h-24 w-full px-4 transition-opacity duration-300"
                  >
                    <img
                      src={uni.logo}
                      alt={uni.name}
                      loading="lazy"
                      className="max-h-14 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
          <p className="text-ink-soft mb-6">
            Explore the full network and find where you belong.
          </p>
          <Link to="/destinations" className="btn-secondary group">
            View All Universities
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 3 ── OUR SERVICES (vivid electric blue #2251FF section bg, white cards) */}
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
              End-to-end support
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white mb-4">
              Our Services
            </h2>
            <p className="text-white/80">
              Helping you achieve your global goals with comprehensive support at every stage.
            </p>
          </div>

          {/* Desktop: 2 rows of 3, each row expands on hover */}
          <div className="hidden lg:flex lg:flex-col gap-6">
            {serviceRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex gap-6"
                onMouseLeave={() => handleRowLeave(rowIndex)}
              >
                {row.map((service, i) => {
                  const isHovered = hovered[rowIndex] === i
                  const isOther = hovered[rowIndex] !== undefined && hovered[rowIndex] !== i
                  return (
                    <Link
                      key={service.title}
                      to="/services"
                      onMouseEnter={() => handleRowEnter(rowIndex, i)}
                      style={{ flexGrow: isHovered ? 6 : isOther ? 3 : 4 }}
                      className="group relative overflow-hidden h-100 basis-0 min-w-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ease-out ring-1 ring-white/0 hover:ring-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2251FF]"
                    >
                      <div className="absolute inset-0 bg-linear-to-t from-white via-white to-[#F4F6FF]"></div>
                      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-transparent to-brand-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <img
                        src={service.icon}
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 w-48 h-48 object-contain opacity-40 transition-all duration-500 ease-out group-hover:right-6 group-hover:opacity-100 group-hover:scale-110"
                      />

                      <div className="relative h-full p-8 flex flex-col justify-between">
                        <div className="text-sm font-mono font-semibold tracking-widest text-[#2251FF]">
                          {String(i + 1 + rowIndex * 3).padStart(2, '0')}
                        </div>
                        <div>
                          <h3 className="text-2xl font-display font-extrabold tracking-tight text-brand-navy mb-2 whitespace-nowrap">
                            {service.title}
                          </h3>
                          <p className="text-ink-soft text-sm leading-relaxed max-w-[90%]">
                            {service.desc}
                          </p>
                        </div>
                      </div>

                      <div className="absolute bottom-8 right-8 w-10 h-10 bg-brand-gold flex items-center justify-center text-brand-navy transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                      </div>
                    </Link>
                  )
                })}
              </div>
            ))}
          </div>

          {/* Mobile / tablet: standard grid, no expand */}
          <div className="grid sm:grid-cols-2 gap-8 lg:hidden">
            {topServices.map((service, i) => (
              <Link
                key={i}
                to="/services"
                className="group relative overflow-hidden h-100 block bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-linear-to-t from-white via-white to-[#F4F6FF]"></div>
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-transparent to-brand-teal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <img
                  src={service.icon}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 top-1/2 -translate-y-1/2 w-40 h-40 object-contain opacity-40 transition-all duration-500 ease-out group-hover:right-4 group-hover:opacity-100"
                />

                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div className="text-sm font-mono font-semibold tracking-widest text-[#2251FF]">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-extrabold tracking-tight text-brand-navy mb-2">
                      {service.title}
                    </h3>
                    <p className="text-ink-soft text-sm leading-relaxed max-w-[90%]">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-8 right-8 w-10 h-10 bg-brand-gold flex items-center justify-center text-brand-navy transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 h-12 font-semibold text-[#2251FF] transition-all duration-300 hover:bg-brand-gold hover:text-brand-navy hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* 4 ── HOW TO APPLY (cream / sand-50) */}

<section className="bg-sand-50">
  <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-28">
    <div className="lg:sticky lg:top-32 lg:self-start">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal text-sm font-semibold mb-5">
        <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
        How we help
      </div>
      <h2 className="max-w-2xl text-3xl font-display font-extrabold leading-[1.15] tracking-tight text-balance text-brand-navy sm:text-4xl lg:text-[2.75rem]">
        Support for every step that needs a clearer answer.
      </h2>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
        From comparing courses to preparing for departure, our counsellors help you understand your options and complete each stage with greater confidence.
      </p>
      <div className="mt-9">
        <Link
          to="/services"
          className="btn-primary min-h-0 border-0 px-7 py-3.5 text-base font-semibold group"
        >
          See how we can help
          <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>

    <ol className="relative space-y-4">
      <div className="absolute left-5 top-2 bottom-2 w-px bg-linear-to-b from-brand-navy/60 via-brand-teal/50 to-transparent" aria-hidden="true"></div>

      {steps.map((step, i) => (
        <li key={i} className="relative">
          <div className="relative flex gap-5 rounded-2xl bg-white/70 p-5 pl-4 border border-transparent">
            <div className="relative z-10 flex flex-col items-center">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white ring-4 ring-sand-50">
                {step.number}
              </span>
            </div>
            <div className="pt-0.5">
              <h3 className="text-lg font-display font-extrabold tracking-tight text-brand-navy lg:text-xl">
                {step.title}
              </h3>
              <p className="mt-1.5 leading-relaxed text-ink-soft">
                {step.desc}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  </div>
</section>

      {/* 5 ── DESTINATIONS (grey / sand-100) */}
      <section className="py-24 bg-sand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal text-sm font-semibold mb-4">
                <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
                Global study options
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-brand-navy mb-4">
                Where would you like to study?
              </h2>
              <p className="text-ink-soft">
                Explore top destinations for international students.
              </p>
            </div>
            <Link to="/destinations" className="hidden md:inline-flex btn-secondary group">
              View All Destinations
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topDestinations.map((dest, i) => (
              <Link
                key={i}
                to="/destinations"
                className="group relative overflow-hidden h-80 block shadow-sm hover:shadow-2xl transition-all duration-300 ring-1 ring-brand-navy/5 hover:ring-brand-gold/60"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/60 to-brand-teal/10"></div>

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex justify-between items-end">
                    <h3 className="text-2xl font-display font-extrabold tracking-tight text-white">{dest.name}</h3>
                    <div className="w-10 h-10 bg-brand-gold flex items-center justify-center text-brand-navy transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 shrink-0">
                      <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link to="/destinations" className="btn-secondary group">
              View All Destinations
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6 ── CTA BAND (navy, unchanged) */}
      <section className="bg-brand-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#waves)"/>
          </svg>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white mb-6">
            Ready to start your journey?
          </h2>
          <p className="text-sand-200 text-lg mb-8 max-w-2xl mx-auto">
            Let Global Tides guide you through your application and visa process so you can focus on your future.
          </p>
          <Link to="/apply" className="btn-primary text-lg px-10">
            talk to a counsellor
          </Link>
        </div>
      </section>
    </div>
  )
}