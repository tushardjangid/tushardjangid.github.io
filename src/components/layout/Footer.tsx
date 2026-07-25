import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'

// PLACEHOLDER links — update once resume/profile details are shared.
const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/tushardjangid', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/tusharjangid', icon: LinkedinIcon },
  { label: 'Email', href: 'mailto:tjtusharjangid5@gmail.com', icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <p className="font-mono text-xs">
          <span className="opacity-60">Copyright 2026</span> <span className="font-medium text-text">Tushar Jangid</span>
        </p>
        <div className="flex gap-4">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="transition-colors hover:text-accent"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
