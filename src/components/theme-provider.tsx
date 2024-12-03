import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

type Theme = 'light' | 'dark'
type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}

const THEME_KEY = 'isDark'
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedIsDark = localStorage.getItem(THEME_KEY)
    return savedIsDark === 'true' ? 'dark' : 'light'
  })

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem(THEME_KEY, newTheme === 'dark' ? 'true' : 'false')
      document.body.className = `${newTheme}-mode`
      return newTheme
    })
  }

  // Handle system theme changes and initial body class
  useEffect(() => {
    const savedIsDark = localStorage.getItem(THEME_KEY)
    if (savedIsDark === null) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      localStorage.setItem(THEME_KEY, prefersDark ? 'true' : 'false')
      setTheme(prefersDark ? 'dark' : 'light')
      document.body.className = prefersDark ? 'dark-mode' : 'light-mode'
    } else {
      document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode'
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme === 'dark' ? 'dark-mode' : ''} min-h-screen flex flex-col`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
} 