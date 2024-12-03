/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--background)',
          'bg-secondary': 'var(--background-secondary)',
          'bg-tertiary': 'var(--background-tertiary)',
          text: 'var(--text-primary)',
          'text-secondary': 'var(--text-secondary)',
          accent: 'var(--accent)',
          border: 'var(--border)',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: ['selector', '.dark-mode'],
} 