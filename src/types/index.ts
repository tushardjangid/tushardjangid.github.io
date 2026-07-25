// Central place for the "shape" of your data.
// Once your resume data files (in src/data/) satisfy these interfaces,
// TypeScript will catch typos or missing fields at compile time —
// e.g. forgetting `company` on an experience entry becomes a red
// squiggly in your editor instead of a blank spot on the live site.

export interface Experience {
  id: string
  company: string
  role: string
  startDate: string // e.g. "Jan 2022"
  endDate: string // e.g. "Present"
  location?: string
  technologies: string[]
  achievements: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  tags: string[]
  slug: string
  readTime?: string
}

export interface SkillCategory {
  category: string
  skills: string[]
}
