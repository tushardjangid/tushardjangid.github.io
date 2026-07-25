import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  children: ReactNode
}

// A small set of variants covers every button in the site (resume
// download, contact, project links). Centralizing this means changing
// "primary" everywhere is a one-line edit here, not a find-and-replace
// across five page files.
const VARIANT_STYLES: Record<Variant, string> = {
  primary: 'bg-accent text-bg hover:bg-accent/90',
  outline: 'border border-border text-text hover:border-accent hover:text-accent',
  ghost: 'text-muted hover:text-text',
}

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-mono text-sm font-medium transition-colors',
        VARIANT_STYLES[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
