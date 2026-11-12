import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className="py-32 text-center">
      <h1 className="text-6xl font-bold text-brand-navy mb-4">404</h1>
      <p className="text-xl text-ink-soft mb-8">Page not found.</p>
      <Link to="/" className="btn-primary">Return Home</Link>
    </div>
  )
}