import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { formConfigs } from '../data/formConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCheckCircle, 
  faCloudArrowUp, 
  faFile, 
  faXmark, 
  faCircleNotch,
  faPhone,
  faEnvelope,
  faHeadset,
  faArrowRight,
  faArrowLeft,
  faCheck
} from '@fortawesome/free-solid-svg-icons'

export default function ApplicationForm() {
  const { slug } = useParams()
  const config = formConfigs[slug]

  // State
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})
  const [files, setFiles] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState({})

  // If no config matches the URL, show 404 message
  if (!config) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-24 text-center bg-sand-50">
        <div className="bg-white p-10 rounded-xl2 shadow-xl border border-sand-200 max-w-md w-full">
          <div className="w-16 h-16 bg-rose-100 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
            !
          </div>
          <h1 className="text-2xl font-display font-extrabold tracking-tight text-brand-navy mb-2">Form Not Found</h1>
          <p className="text-ink-soft mb-6 text-sm">We couldn't find the application form you are looking for.</p>
          <Link to="/apply" className="inline-block w-full py-3 px-6 rounded-full bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold transition-all shadow-md hover:shadow-lg">
            Return to Apply Page
          </Link>
        </div>
      </div>
    )
  }

  const totalSteps = config.sections.length
  const currentSection = config.sections[currentStep]
  const isLastStep = currentStep === totalSteps - 1
  const isFirstStep = currentStep === 0

  // Handle text/select/textarea changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }))
  }

  // Handle file uploads
  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, [fieldName]: 'File must be less than 5MB' }))
        return
      }
      setFiles(prev => ({ ...prev, [fieldName]: file }))
      setErrors(prev => ({ ...prev, [fieldName]: null }))
    }
  }

  const removeFile = (fieldName) => {
    setFiles(prev => {
      const newFiles = { ...prev }
      delete newFiles[fieldName]
      return newFiles
    })
  }

  // Validate current step ONLY
  const validateCurrentStep = () => {
    const newErrors = {}
    currentSection.fields.forEach(field => {
      if (field.required) {
        if (field.type === 'file' && !files[field.name]) {
          newErrors[field.name] = 'This document is required'
        } else if (field.type !== 'file' && !formData[field.name]) {
          newErrors[field.name] = 'This field is required'
        }
      }
    })
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return false
    }
    return true
  }

  // Next Step
  const handleNext = () => {
    if (validateCurrentStep()) {
      setCurrentStep(prev => prev + 1)
      window.scrollTo({ top: 300, behavior: 'smooth' })
    }
  }

  // Previous Step
  const handlePrev = () => {
    setCurrentStep(prev => prev - 1)
    setErrors({})
    window.scrollTo({ top: 300, behavior: 'smooth' })
  }

  // Final Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateCurrentStep()) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 1500)
  }

  // Calculate Progress Percentage
  const progressPercent = ((currentStep + 1) / totalSteps) * 100

  // --- SUCCESS SCREEN ---
  if (isSuccess) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center bg-sand-50 py-16 px-4">
        <div className="max-w-2xl w-full bg-white p-8 md:p-14 text-center rounded-xl2 shadow-xl border border-sand-200">
          <div className="w-20 h-20 mx-auto bg-brand-teal-light text-brand-teal rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-brand-navy mb-3">
            Application Submitted
          </h1>
          <p className="text-ink-soft text-base md:text-lg mb-8 leading-relaxed max-w-lg mx-auto">
            Thank you for applying through Global Tides. Your application has been successfully received.
          </p>
          
          <div className="bg-sand-50 border border-sand-200 rounded-xl p-5 mb-8 max-w-md mx-auto">
            <p className="text-xs text-ink-muted uppercase tracking-wider font-bold mb-1">Reference Number</p>
            <p className="text-2xl font-mono font-bold text-brand-navy tracking-wider">GT-2026-8492</p>
          </div>
          
          <p className="text-xs md:text-sm text-ink-muted mb-8 max-w-md mx-auto">
            A confirmation message will be sent to your email address. Our team will contact you regarding subsequent steps.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/" className="btn-primary text-base px-8 group">
              Return to Home
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Back to Apply pill below the success card content */}
          <div className="mt-8 pt-6 border-t border-sand-100">
            <Link
              to="/apply"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sand-200 bg-white px-8 h-12 font-semibold text-brand-navy transition-all duration-300 hover:border-brand-teal hover:text-brand-teal hover:shadow-md focus:outline-none focus:ring-4 focus:ring-brand-teal/20 group"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
              Back to Apply
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // --- WIZARD FORM RENDERER ---
  return (
    <div className="bg-sand-50 min-h-screen pb-24 font-sans text-ink">
      
      {/* FORM HERO */}
      <section className="bg-brand-navy py-20 md:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves-form-hero" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10 Q 25 0, 50 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"/>
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#waves-form-hero)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-teal text-sm font-semibold mb-6 backdrop-blur-sm">
            <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" />
            Application form
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight leading-[1.15] mb-4">
            {config.title}
          </h1>
          <p className="text-sand-200 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {config.description}
          </p>
        </div>
      </section>

      {/* FORM LAYOUT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white rounded-xl2 shadow-xl border border-sand-200 overflow-hidden">
          
          {/* PROGRESS BAR */}
          <div className="w-full bg-sand-100 h-2">
            <div 
              className="bg-brand-teal h-2 transition-all duration-500 ease-out"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          {/* STEP INDICATORS (Desktop) */}
          <div className="hidden md:flex justify-between px-10 pt-8 pb-6 border-b border-sand-100">
            {config.sections.map((section, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 w-full relative">
                {/* Connector Line */}
                {idx !== totalSteps - 1 && (
                  <div className={`absolute top-4 left-1/2 w-full h-0.5 transition-colors duration-300 ${idx < currentStep ? 'bg-brand-teal' : 'bg-sand-200'}`}></div>
                )}
                
                {/* Circle */}
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold z-10 transition-all duration-300 ${
                  idx < currentStep 
                    ? 'bg-brand-teal text-white shadow-md' 
                    : idx === currentStep 
                      ? 'bg-brand-navy text-white ring-4 ring-brand-navy/10 shadow-md' 
                      : 'bg-sand-100 text-ink-muted border border-sand-200'
                }`}>
                  {idx < currentStep ? <FontAwesomeIcon icon={faCheck} /> : idx + 1}
                </div>
                
                {/* Label */}
                <span className={`text-xs font-medium text-center transition-colors duration-300 ${
                  idx <= currentStep ? 'text-brand-navy font-semibold' : 'text-ink-muted'
                }`}>
                  {section.title.split('.')[1]?.trim() || section.title}
                </span>
              </div>
            ))}
          </div>

          {/* FORM FIELDS */}
          <div className="p-6 sm:p-10">
            <form onSubmit={handleSubmit}>
              
              <div className="mb-8">
                <div className="flex items-center justify-between border-b border-sand-100 pb-4">
                  <h2 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-brand-navy">
                    {currentSection.title}
                  </h2>
                  <span className="text-xs font-bold text-brand-teal bg-brand-teal-light px-3 py-1 rounded-full border border-brand-teal/20">
                    Step {currentStep + 1} of {totalSteps}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 min-h-75">
                {currentSection.fields.map((field, fIndex) => (
                  <div key={fIndex} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                    
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-navy mb-2" htmlFor={field.name}>
                      {field.label} {field.required && <span className="text-rose-500 font-bold">*</span>}
                    </label>

                    {/* Text, Email, Tel, Date, Number */}
                    {['text', 'email', 'tel', 'date', 'number'].includes(field.type) && (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name] || ''}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-sand-50/50 rounded-xl border text-brand-navy placeholder-ink-muted text-sm transition-all focus:outline-none focus:bg-white focus:ring-2 ${
                          errors[field.name] 
                            ? 'border-rose-400 focus:ring-rose-200 focus:border-rose-500' 
                            : 'border-sand-200 focus:ring-brand-teal/20 focus:border-brand-teal'
                        }`}
                      />
                    )}

                    {/* Select */}
                    {field.type === 'select' && (
                      <select
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-sand-50/50 rounded-xl border text-brand-navy text-sm transition-all focus:outline-none focus:bg-white focus:ring-2 ${
                          errors[field.name] 
                            ? 'border-rose-400 focus:ring-rose-200 focus:border-rose-500' 
                            : 'border-sand-200 focus:ring-brand-teal/20 focus:border-brand-teal'
                        }`}
                      >
                        <option value="">Select an option...</option>
                        {field.options.map((opt, i) => (
                          <option key={i} value={opt}>{opt}</option>
                        ))}
                      </select>
                    )}

                    {/* Textarea */}
                    {field.type === 'textarea' && (
                      <textarea
                        id={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        rows="4"
                        value={formData[field.name] || ''}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-sand-50/50 rounded-xl border text-brand-navy placeholder-ink-muted text-sm transition-all resize-y focus:outline-none focus:bg-white focus:ring-2 ${
                          errors[field.name] 
                            ? 'border-rose-400 focus:ring-rose-200 focus:border-rose-500' 
                            : 'border-sand-200 focus:ring-brand-teal/20 focus:border-brand-teal'
                        }`}
                      ></textarea>
                    )}

                    {/* File Upload */}
                    {field.type === 'file' && (
                      <div>
                        {!files[field.name] ? (
                          <div className={`relative border-2 border-dashed rounded-xl bg-sand-50/50 hover:bg-sand-50 transition-all p-6 text-center cursor-pointer group ${
                            errors[field.name] ? 'border-rose-300 hover:border-rose-400' : 'border-sand-200 hover:border-brand-teal'
                          }`}>
                            <input
                              type="file"
                              id={field.name}
                              onChange={(e) => handleFileChange(e, field.name)}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              accept=".pdf,.jpg,.jpeg,.png"
                            />
                            <div className="w-12 h-12 bg-brand-teal-light text-brand-teal rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                              <FontAwesomeIcon icon={faCloudArrowUp} className="text-xl" />
                            </div>
                            <p className="text-sm font-semibold text-brand-navy">Click to upload</p>
                            <p className="text-xs text-ink-muted mt-1">{field.hint || 'PDF, PNG, JPG up to 5MB'}</p>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between p-4 border border-brand-teal/30 bg-brand-teal-light/40 rounded-xl">
                            <div className="flex items-center gap-3 overflow-hidden">
                              <div className="w-8 h-8 rounded-lg bg-brand-teal-light text-brand-teal flex items-center justify-center shrink-0">
                                <FontAwesomeIcon icon={faFile} />
                              </div>
                              <span className="text-sm font-medium text-brand-navy truncate">{files[field.name].name}</span>
                            </div>
                            <button 
                              type="button" 
                              onClick={() => removeFile(field.name)}
                              className="text-ink-muted hover:text-rose-500 p-2 transition-colors"
                            >
                              <FontAwesomeIcon icon={faXmark} />
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Error Message */}
                    {errors[field.name] && (
                      <p className="text-rose-500 text-xs mt-1.5 font-medium flex items-center gap-1">
                        <span>•</span> {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}

                {/* Consent Checkbox (Only on last step) */}
                {isLastStep && (
                  <div className="md:col-span-2 mt-4 bg-sand-50 p-5 rounded-xl border border-sand-200">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        required
                        className="mt-1 w-4 h-4 text-brand-teal border-sand-300 rounded focus:ring-brand-teal accent-brand-teal cursor-pointer"
                      />
                      <span className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                        I confirm that the information provided is accurate and complete. I consent to Global Tides processing my information for the purpose of this application.
                      </span>
                    </label>
                  </div>
                )}
              </div>

              {/* NAVIGATION BUTTONS */}
              <div className="mt-10 pt-6 border-t border-sand-100 flex justify-between items-center">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={isFirstStep}
                  className={`flex items-center gap-2 font-semibold text-sm px-4 py-2.5 rounded-full transition-all ${
                    isFirstStep 
                      ? 'text-ink-muted/40 cursor-not-allowed opacity-50' 
                      : 'text-ink-soft hover:text-brand-navy hover:bg-sand-100'
                  }`}
                >
                  <FontAwesomeIcon icon={faArrowLeft} /> Previous
                </button>

                {isLastStep ? (
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-brand-teal hover:bg-brand-teal/90 active:bg-brand-teal/80 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-70 flex items-center gap-2 text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <FontAwesomeIcon icon={faCircleNotch} className="animate-spin" /> Processing...
                      </>
                    ) : (
                      <>
                        Submit Application <FontAwesomeIcon icon={faCheckCircle} />
                      </>
                    )}
                  </button>
                ) : (
                  <button 
                    type="button" 
                    onClick={handleNext}
                    className="bg-brand-navy hover:bg-brand-navy/90 active:bg-brand-navy/80 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 text-sm group"
                  >
                    Next Step 
                    <FontAwesomeIcon icon={faArrowRight} className="transform group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>

            </form>
          </div>
          
          {/* Mobile Sidebar Assistance (Bottom of form) */}
          <div className="bg-sand-50 p-4 border-t border-sand-100 text-center md:hidden">
            <p className="text-xs text-ink-soft">
              Need help? Call <a href="tel:+254700123456" className="text-brand-teal font-bold hover:underline">+254 700 123 456</a>
            </p>
          </div>
          
        </div>

        {/* Desktop Sidebar Assistance */}
        <div className="hidden md:flex items-center justify-center gap-6 mt-8 text-xs sm:text-sm text-ink-soft">
          <span className="flex items-center gap-2">
            <FontAwesomeIcon icon={faHeadset} className="text-brand-teal" />
            Need help filling this out?
          </span>
          <a href="tel:+254700123456" className="flex items-center gap-2 font-medium hover:text-brand-navy transition-colors">
            <FontAwesomeIcon icon={faPhone} /> +254 700 123 456
          </a>
          <a href="mailto:hello@globaltides.com" className="flex items-center gap-2 font-medium hover:text-brand-navy transition-colors">
            <FontAwesomeIcon icon={faEnvelope} /> hello@globaltides.com
          </a>
        </div>

        {/* Back to Apply pill — below the form + support strip */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/apply"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-sand-200 bg-white px-8 h-12 font-semibold text-brand-navy transition-all duration-300 hover:border-brand-teal hover:text-brand-teal hover:shadow-md focus:outline-none focus:ring-4 focus:ring-brand-teal/20 group"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to Apply
          </Link>
        </div>

      </section>
    </div>
  )
}