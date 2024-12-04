import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'

interface NavItem {
  title: string
  href: string
  items?: {
    title: string
    href: string
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  }[]
}

export interface GuideSidebarProps {
  items: NavItem[]
  className?: string
  showSearch?: boolean
}

export function GuideSidebar({ items, className = '', showSearch = true }: GuideSidebarProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const filteredItems = items.map(section => ({
    ...section,
    items: section.items?.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (section.items?.length ?? 0) > 0
  )

  const MenuIcon = () => (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="text-theme-text"
    >
      {isOpen ? (
        // X icon
        <>
          <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" />
          <line x1="6" y1="18" x2="18" y2="6" stroke="currentColor" strokeWidth="1.5" />
        </>
      ) : (
        // Hamburger icon
        <>
          <line x1="4" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="1.5" />
          <line x1="4" y1="16" x2="20" y2="16" stroke="currentColor" strokeWidth="1.5" />
        </>
      )}
    </svg>
  )

  const MenuButton = () => (
    <button 
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden p-4"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <MenuIcon />
    </button>
  )

  const SidebarContent = () => (
    <>
      {showSearch && (
        <div className="border-b border-theme-border p-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full h-8 bg-theme-bg-secondary border border-theme-border rounded pl-8 pr-2 text-sm text-theme-text placeholder-theme-text-secondary focus:outline-none focus:ring-1 focus:ring-theme-accent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      )}
      <nav className={`flex-1 overflow-y-auto p-2 ${isMobile ? 'mt-20' : ''}`}>
        {filteredItems.map((section) => (
          <div key={section.title} className="mb-4">
            <div className="mb-1 px-2">
              <a
                href={section.href}
                className="text-sm text-zinc-400 hover:text-zinc-100"
                onClick={() => isMobile && setIsOpen(false)}
              >
                {section.title}
              </a>
            </div>
            {section.items?.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-center justify-between rounded-md px-2 py-1 text-sm text-zinc-500 hover:bg-zinc-800 hover:text-zinc-100"
                onClick={() => isMobile && setIsOpen(false)}
              >
                <span className="truncate">{item.title}</span>
                {item.method && (
                  <span className="ml-2 text-xs text-blue-400">{item.method}</span>
                )}
              </a>
            ))}
          </div>
        ))}
      </nav>
      <footer className="border-t border-zinc-800 p-4">
        <div className="text-xs text-zinc-600">
          accessprotocol.co
        </div>
      </footer>
    </>
  )

  if (isMobile) {
    return (
      <>
        <div className="sticky top-0 z-[60] w-full bg-theme-bg-secondary border-b border-theme-border">
          <MenuButton />
        </div>
        {isOpen && (
          <div className="fixed inset-x-0 top-[57px] bottom-0 z-50 bg-theme-bg-secondary">
            <div className="h-full overflow-y-auto">
              <SidebarContent />
            </div>
          </div>
        )}
      </>
    )
  }

  return (
    <aside className={`w-[280px] hidden md:flex flex-col h-screen bg-theme-bg-secondary text-theme-text border-r border-theme-border ${className} sticky top-0`}>
      <SidebarContent />
    </aside>
  )
}

