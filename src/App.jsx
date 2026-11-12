import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Destinations from './pages/Destinations'
import HowToApply from './pages/HowToApply'
import Apply from './pages/Apply'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ApplicationForm from './pages/ApplicationForm'

function App() {
  // Prevent scroll restoration issues
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />
      <Header />
      
      {/* pt-28 accounts for the Top Bar + Main Navbar height */}
      <main className="grow pt-28">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/how-to-apply" element={<HowToApply />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply/:slug" element={<ApplicationForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App