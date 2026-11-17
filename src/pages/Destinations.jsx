import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faArrowRight, 
  faGlobe, 
  faBriefcase, 
  faLanguage,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'

export default function Destinations() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [hovered, setHovered] = useState({})
  // Why Study Abroad: hovered card per row — key = `why-${rowIndex}`
  const [hoveredWhy, setHoveredWhy] = useState({})

  // Data for destinations
  const destinations = [
    { 
      name: 'United Kingdom', 
      region: 'Europe', 
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop',
      desc: 'World-renowned universities and rich history.'
    },
    { 
      name: 'Canada', 
      region: 'North America', 
      image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=800&auto=format&fit=crop',
      desc: 'High quality of life and post-study work options.'
    },
    { 
      name: 'USA', 
      region: 'North America', 
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=800&auto=format&fit=crop',
      desc: 'Diverse campuses and endless career opportunities.'
    },
    { 
      name: 'Germany', 
      region: 'Europe', 
      image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=800&auto=format&fit=crop',
      desc: 'Low tuition fees and a strong engineering focus.'
    },
    { 
      name: 'Australia', 
      region: 'Oceania', 
      image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=800&auto=format&fit=crop',
      desc: 'Sunny climate, great lifestyle, and top-ranked institutions.'
    },
    { 
      name: 'New Zealand', 
      region: 'Oceania', 
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop',
      desc: 'Safe, welcoming, and stunning natural landscapes.'
    },
    { 
      name: 'South Korea', 
      region: 'Asia', 
      image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=800&auto=format&fit=crop',
      desc: 'Technological hub with generous scholarship options.'
    },
    { 
      name: 'Other Destinations', 
      region: 'Other', 
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop',
      desc: 'Explore more options in Europe, Asia, and beyond.'
    }
  ]

  // Why Study Abroad data
  const whyStudyAbroad = [
    {
      title: 'Global Exposure',
      desc: 'Experience new cultures, build international networks, and gain a global perspective that employers value.',
      icon: faGlobe,
    },
    {
      title: 'Career Prospects',
      desc: 'A degree from a top international institution opens doors to higher salaries and better job opportunities worldwide.',
      icon: faBriefcase,
    },
    {
      title: 'Personal Growth',
      desc: 'Living independently in a new country builds resilience, adaptability, and confidence.',
      icon: faLanguage,
    },
  ]

  // Chunk why-study-abroad into rows of 3
  const whyRows = []
  for (let i = 0; i < whyStudyAbroad.length; i += 3) {
    whyRows.push(whyStudyAbroad.slice(i, i + 3))
  }

  // Filter logic
  const filteredDestinations = activeFilter === 'All' 
    ? destinations 
    : destinations.filter(dest => dest.region === activeFilter)

  // Chunk filtered destinations into rows of 3 for the expanding row layout
  const destinationRows = []
  for (let i = 0; i < filteredDestinations.length; i += 3) {
    destinationRows.push(filteredDestinations.slice(i, i + 3))
  }

  const filters = ['All', 'Europe', 'North America', 'Oceania', 'Asia']

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

  // Why Study Abroad hover handlers
  const handleWhyCardEnter = (key, cardIndex) => {
    setHoveredWhy((prev) => ({ ...prev, [key]: cardIndex }))
  }

  const handleWhyRowLeave = (key) => {
    setHoveredWhy((prev) => {
      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  return (
    <div className="bg-white">
      
      {/* PAGE HERO */}
      <section className="bg-brand-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves-destinations" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#waves-destinations)"/>
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-teal text-sm font-semibold mb-6 backdrop-blur-sm">
            <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
            Global study options
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Explore{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-teal via-[#1098AD] to-brand-gold">
              Study Destinations
            </span>
          </h1>
          <p className="text-lg md:text-xl text-sand-200 max-w-2xl mx-auto leading-relaxed">
            Discover world-class education opportunities across the globe. Find the perfect country for your academic journey.
          </p>
        </div>
      </section>

      {/* DESTINATIONS GRID WITH FILTERS */}
      <section className="py-24 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section heading */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal-light text-brand-teal text-sm font-semibold mb-4">
              <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
              Where would you like to study?
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-brand-navy mb-4">
              Browse by region
            </h2>
            <p className="text-ink-soft">
              Filter destinations to find the region that fits your goals.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 text-sm font-semibold transition-all duration-300 rounded-full ${
                  activeFilter === filter 
                    ? 'bg-brand-navy text-white shadow-md' 
                    : 'bg-white text-ink-soft border border-sand-200 hover:border-brand-teal hover:text-brand-teal hover:shadow-sm'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Desktop: expanding rows of 3 */}
          <div className="hidden lg:flex lg:flex-col gap-6">
            {destinationRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex gap-6"
                onMouseLeave={() => handleRowLeave(rowIndex)}
              >
                {row.map((dest, i) => {
                  const isHovered = hovered[rowIndex] === i
                  const isOther = hovered[rowIndex] !== undefined && hovered[rowIndex] !== i
                  return (
                    <Link
                      key={dest.name}
                      to={`/destinations/${dest.name.toLowerCase().replace(/ /g, '-')}`}
                      onMouseEnter={() => handleRowEnter(rowIndex, i)}
                      style={{ flexGrow: isHovered ? 6 : isOther ? 3 : 4 }}
                      className="group relative overflow-hidden h-100 basis-0 min-w-0 block shadow-lg hover:shadow-2xl transition-all duration-500 ease-out ring-1 ring-brand-navy/5 hover:ring-brand-gold/60"
                    >
                      <img 
                        src={dest.image} 
                        alt={dest.name} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/60 to-brand-teal/10"></div>
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 p-8 w-full">
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-brand-teal text-sm font-bold uppercase tracking-wider mb-1">
                              {dest.region}
                            </p>
                            <h3 className="text-2xl font-display font-extrabold tracking-tight text-white mb-2">
                              {dest.name}
                            </h3>
                            <p className="text-sand-200 text-sm leading-relaxed max-w-[90%]">
                              {dest.desc}
                            </p>
                          </div>
                          <div className="w-10 h-10 bg-brand-gold flex items-center justify-center text-brand-navy transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 shrink-0">
                            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            ))}
          </div>

          {/* Mobile / tablet: standard grid, no expand */}
          <div className="grid sm:grid-cols-2 gap-6 lg:hidden">
            {filteredDestinations.map((dest, i) => (
              <Link 
                key={i} 
                to={`/destinations/${dest.name.toLowerCase().replace(/ /g, '-')}`} 
                className="group relative overflow-hidden h-100 block rounded-xl2 shadow-sm hover:shadow-2xl transition-all duration-300 ring-1 ring-brand-navy/5 hover:ring-brand-gold/60"
              >
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/60 to-brand-teal/10"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-brand-teal text-sm font-bold uppercase tracking-wider mb-1">
                        {dest.region}
                      </p>
                      <h3 className="text-2xl font-display font-extrabold tracking-tight text-white mb-2">
                        {dest.name}
                      </h3>
                      <p className="text-sand-200 text-sm leading-relaxed max-w-[90%]">
                        {dest.desc}
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-brand-gold flex items-center justify-center text-brand-navy transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 shrink-0">
                      <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-ink-soft text-lg">No destinations found for this region.</p>
            </div>
          )}

        </div>
      </section>

      {/* WHY STUDY ABROAD BAND — synced to #2251FF blue */}
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
              Why go global
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white mb-4">
              Why Study Abroad?
            </h2>
            <p className="text-white/80">
              Studying overseas is more than a degree—it's an investment in your future.
            </p>
          </div>

          {/* Desktop: expanding rows of 3 — fixed content height locks row, only width animates */}
          <div className="hidden lg:flex lg:flex-col gap-6">
            {whyRows.map((row, rowIndex) => {
              const key = `why-${rowIndex}`
              return (
                <div
                  key={rowIndex}
                  className="flex items-stretch gap-6"
                  onMouseLeave={() => handleWhyRowLeave(key)}
                >
                  {row.map((item, i) => {
                    const isHovered = hoveredWhy[key] === i
                    const isOther = hoveredWhy[key] !== undefined && hoveredWhy[key] !== i
                    return (
                      <div
                        key={i}
                        onMouseEnter={() => handleWhyCardEnter(key, i)}
                        style={{ flexGrow: isHovered ? 5 : isOther ? 3 : 4 }}
                        className="group bg-white p-8 h-[260px] shadow-lg hover:shadow-2xl text-center transition-all duration-500 ease-out ring-1 ring-white/0 hover:ring-white/40 flex flex-col items-center self-stretch basis-0 min-w-0 overflow-hidden"
                      >
                        <div className="w-16 h-16 shrink-0 rounded-full bg-brand-teal-light text-brand-teal flex items-center justify-center text-2xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300">
                          <FontAwesomeIcon icon={item.icon} />
                        </div>
                        <h3 className="text-xl font-display font-extrabold tracking-tight text-brand-navy mb-3 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-ink-soft leading-relaxed line-clamp-3">
                          {item.desc}
                        </p>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>

          {/* Mobile / tablet: standard grid, equal rows via auto-rows-fr */}
          <div className="grid md:grid-cols-2 auto-rows-fr gap-6 lg:hidden">
            {whyStudyAbroad.map((item, i) => (
              <div
                key={i}
                className="group bg-white p-8 shadow-lg hover:shadow-2xl text-center transition-all duration-300 ring-1 ring-white/0 hover:ring-white/40 hover:-translate-y-1 flex flex-col h-full self-stretch"
              >
                <div className="w-16 h-16 shrink-0 mx-auto rounded-full bg-brand-teal-light text-brand-teal flex items-center justify-center text-2xl mb-6 group-hover:bg-brand-gold group-hover:text-brand-navy transition-colors duration-300">
                  <FontAwesomeIcon icon={item.icon} />
                </div>
                <h3 className="text-xl font-display font-extrabold tracking-tight text-brand-navy mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-soft leading-relaxed line-clamp-3">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/destinations"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 h-12 font-semibold text-[#2251FF] transition-all duration-300 hover:bg-brand-gold hover:text-brand-navy hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-brand-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves-cta-destinations" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#waves-cta-destinations)"/>
          </svg>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white mb-6">
            Found your dream destination?
          </h2>
          <p className="text-sand-200 text-lg mb-8 max-w-2xl mx-auto">
            Let us help you get there. Start your application today.
          </p>
          <Link to="/apply" className="btn-primary text-lg px-10 group">
            Start Your Application
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  )
}