import { useState } from 'react'
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

  const filteredItems = items.map(section => ({
    ...section,
    items: section.items?.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (section.items?.length ?? 0) > 0
  )

  return (
    <aside className={`w-[280px] flex flex-col h-screen bg-theme-bg-secondary text-theme-text border-r border-theme-border ${className} sticky top-0`}>
        {showSearch && (
            <div className="border-b border-theme-border p-2">
                <div className="relative">
                    <>
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-zinc-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full h-8 bg-theme-bg-secondary border border-theme-border rounded pl-8 pr-2 text-sm text-theme-text placeholder-theme-text-secondary focus:outline-none focus:ring-1 focus:ring-theme-accent"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    </>
                </div>
            </div>
          )}
      <nav className="flex-1 overflow-y-auto p-2">
        {filteredItems.map((section) => (
          <div key={section.title} className="mb-4">
            <div className="mb-1 px-2">
              <a
                href={section.href}
                className="text-sm text-zinc-400 hover:text-zinc-100"
              >
                {section.title}
              </a>
            </div>
            {section.items?.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-center justify-between rounded-md px-2 py-1 text-sm text-zinc-500 hover:bg-zinc-800 hover:text-zinc-100"
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
    </aside>
  )
}

