import { useTheme } from './theme-provider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md bg-theme-bg-tertiary"
    >
      {theme === 'dark' ? '🌞' : '🌙'}
    </button>
  )
} 