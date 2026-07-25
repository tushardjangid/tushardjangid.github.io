import { useState, useEffect } from 'react'
import { NavLink } from 'react-router'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Blogs', to: '/blogs' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check initial theme from document or localStorage
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark

    setIsDark(initialDark)
    const root = document.documentElement
    if (initialDark) {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    const root = document.documentElement

    if (newIsDark) {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-sm transition-colors">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-text"
          onClick={() => setIsOpen(false)}
        >
          Tushar<span className="text-accent"> </span>Jangid
        </NavLink>

        {/* Desktop links + Theme Toggle */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-8 font-mono text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'transition-colors hover:text-accent',
                      isActive ? 'text-accent' : 'text-muted'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-muted transition-colors hover:border-accent hover:text-accent focus:outline-none"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-muted"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            className="text-text"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="flex flex-col gap-1 border-t border-border bg-bg px-6 py-4 font-mono text-sm md:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'block rounded-md px-2 py-2 transition-colors',
                    isActive ? 'text-accent' : 'text-muted hover:text-text'
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
