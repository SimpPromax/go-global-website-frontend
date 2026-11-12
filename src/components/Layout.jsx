import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      {/* Main Content Area - flex-grow pushes footer to bottom */}
      <main className="grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}