import { Link, useLocation } from 'react-router-dom'
import { ThemeToggle } from './theme-toggle'

export function TabBar() {
  const location = useLocation()
  
  return (
    <nav className="tab-bar">
      <div className="flex items-center gap-4">
        <Link 
          to="/guide" 
          className={`tab ${location.pathname === '/guide' ? 'active' : ''}`}
        >
          Guide
        </Link>
        <Link 
          to="/api" 
          className={`tab ${location.pathname === '/api' ? 'active' : ''}`}
        >
          API Reference
        </Link>
      </div>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </nav>
  )
} 