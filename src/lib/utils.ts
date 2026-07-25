import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merges Tailwind classes safely — lets you do conditional classes
 * (e.g. cn('text-white', isActive && 'text-accent')) without
 * conflicting utility classes fighting each other.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
