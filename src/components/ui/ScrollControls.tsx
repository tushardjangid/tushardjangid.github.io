import { useState, useEffect } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

export function ScrollControls() {
  const [showUp, setShowUp] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll-up button after scrolling down 200px
      if (window.scrollY > 200) {
        setShowUp(true)
      } else {
        setShowUp(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      {showUp && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text shadow-md transition-transform hover:scale-110 hover:border-accent hover:text-accent focus:outline-none"
        >
          <ChevronUp size={18} />
        </button>
      )}

      <button
        type="button"
        onClick={scrollToBottom}
        aria-label="Scroll to bottom"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-text shadow-md transition-transform hover:scale-110 hover:border-accent hover:text-accent focus:outline-none"
      >
        <ChevronDown size={18} />
      </button>
    </div>
  )
}
