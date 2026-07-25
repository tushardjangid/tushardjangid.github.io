import { Link } from 'react-router'
import {
  ArrowRight,
  Sparkles,
  Briefcase,
  FolderGit2,
  BookOpen,
  User,
  Award,
  FileText,
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { projects } from '@/data/projects'
import { experiences } from '@/data/experience'

const SUBFIELD_TAGS = [
  'Agentic AI & Multi-Agent Fleets',
  'RAG & Vector Search',
  'LLM Fine-Tuning (LoRA / QLoRA)',
  'Computer Vision & ANPR',
  'Signal Anomaly Detection',
]

const HERO_BADGES = [
  '1 Peer-Reviewed Publication',
]

export function Home() {
  const topProjects = projects.filter((p) => p.featured).slice(0, 2)
  const topExperience = experiences.slice(0, 1)

  return (
    <div className="mx-auto max-w-7xl px-6">
      {/* ---------- Hero Section (Reduced Top Padding) ---------- */}
      <section className="pt-4 pb-8 md:pt-6 md:pb-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Senior AI / ML Engineer
            </p>
          </div>

          <h1 className="font-display text-3xl font-semibold leading-tight text-text sm:text-4xl lg:text-5xl">
            Building production-grade LLM agents, RAG systems &amp; computer vision applications.
          </h1>

          <p className="max-w-4xl text-sm text-muted sm:text-base leading-relaxed">
            Architecting end-to-end Machine Learning systems — from multi-agent orchestration and vector search pipelines to real-time video analytics and automated anomaly detection.
          </p>

          {/* Hero Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {HERO_BADGES.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-text"
              >
                <Sparkles size={12} className="text-accent" />
                {badge}
              </div>
            ))}
          </div>

          {/* Core Technical Focus Section */}
          <div className="mt-2 border-t border-border pt-4">
            <h2 className="mb-2.5 font-mono text-xs uppercase tracking-widest text-muted">
              Core Technical Focus
            </h2>
            <ul className="flex flex-wrap gap-2">
              {SUBFIELD_TAGS.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-accent/20 bg-accent/5 px-3 py-1.5 font-mono text-xs text-accent"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- About Teaser ---------- */}
      <section className="py-6 border-t border-border">
        <Link
          to="/about"
          className="group block rounded-lg border border-border bg-surface p-5 transition-all hover:border-accent shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <User size={18} className="text-accent" />
              <h2 className="font-display text-lg font-semibold text-text group-hover:text-accent transition-colors">
                About Me
              </h2>
            </div>
            <span className="font-mono text-xs text-muted group-hover:text-accent transition-colors flex items-center gap-1">
              view full bio <ArrowRight size={14} />
            </span>
          </div>

          <p className="mt-2 text-sm text-muted leading-relaxed">
            Senior AI/ML Engineer specialized in bridging advanced technical modeling with production multi-agent LLM systems, RAG vector retrieval, and real-time computer vision.
          </p>
        </Link>
      </section>

      {/* ---------- Experience Teaser (Top 1 only) ---------- */}
      <section className="py-8 border-t border-border">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <Link to="/experience" className="group flex items-center gap-2">
              <Briefcase size={18} className="text-accent" />
              <h2 className="font-display text-xl font-semibold text-text group-hover:text-accent transition-colors">
                Experience
              </h2>
            </Link>
          </div>
          <Link
            to="/experience"
            className="font-mono text-xs text-muted transition-colors hover:text-accent flex items-center gap-1"
          >
            view all experience <ArrowRight size={14} />
          </Link>
        </div>

        {topExperience.map((exp) => (
          <Link
            key={exp.id}
            to="/experience"
            className="group block rounded-lg border border-border bg-surface p-5 transition-all hover:border-accent/60"
          >
            <div className="flex flex-col justify-between sm:flex-row sm:items-center">
              <div>
                <h3 className="font-display text-base font-medium text-text group-hover:text-accent transition-colors">
                  {exp.role} &bull; <span className="text-accent">{exp.company}</span>
                </h3>
              </div>
              <span className="font-mono text-xs text-muted mt-2 sm:mt-0 rounded-full border border-border px-3 py-1 bg-surface">
                {exp.startDate} — {exp.endDate}
              </span>
            </div>
            <ul className="mt-3 list-disc list-inside space-y-1 text-xs sm:text-sm text-muted">
              {exp.achievements.slice(0, 2).map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {exp.technologies.slice(0, 5).map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </Link>
        ))}
      </section>

      {/* ---------- Featured Projects Teaser (Top 2 only) ---------- */}
      <section className="py-8 border-t border-border">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <Link to="/projects" className="group flex items-center gap-2">
              <FolderGit2 size={18} className="text-accent" />
              <h2 className="font-display text-xl font-semibold text-text group-hover:text-accent transition-colors">
                Featured Projects
              </h2>
            </Link>
          </div>
          <Link
            to="/projects"
            className="font-mono text-xs text-muted transition-colors hover:text-accent flex items-center gap-1"
          >
            view all projects <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {topProjects.map((project) => (
            <Link
              key={project.id}
              to="/projects"
              className="group flex flex-col justify-between rounded-lg border border-border bg-surface p-5 transition-all hover:border-accent"
            >
              <div>
                <h3 className="font-display text-base font-medium text-text group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border/40">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- Blog Teaser (Top 1 only) ---------- */}
      <section className="py-8 border-t border-border">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <Link to="/blogs" className="group flex items-center gap-2">
              <BookOpen size={18} className="text-accent" />
              <h2 className="font-display text-xl font-semibold text-text group-hover:text-accent transition-colors">
                Blog &amp; Writing
              </h2>
            </Link>
          </div>
          <Link
            to="/blogs"
            className="font-mono text-xs text-muted transition-colors hover:text-accent flex items-center gap-1"
          >
            view all articles <ArrowRight size={14} />
          </Link>
        </div>

        <Link
          to="/blogs"
          className="group block rounded-lg border border-border bg-surface/50 p-5 transition-all hover:border-accent"
        >
          <h3 className="font-display text-base font-medium text-text group-hover:text-accent transition-colors">
            Architecting Multi-Agent AI Systems with LangGraph and MCP Tools &rarr;
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-muted">
            Exploring deterministic multi-agent workflows, combining Model Context Protocol (MCP) tool execution with LangGraph state management.
          </p>
        </Link>
      </section>

      {/* ---------- Publication (AT THE VERY END OF HOME PAGE) ---------- */}
      <section className="py-8 border-t border-border mb-12">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Award size={18} className="text-accent" />
            <h2 className="font-display text-xl font-semibold text-text">
              Publications &amp; Research
            </h2>
          </div>
          <Badge>Case Study Coming Soon</Badge>
        </div>

        <div className="rounded-lg border border-border bg-surface p-5">
          <div className="flex items-center gap-2 mb-2">
            <FileText size={14} className="text-accent" />
            <span className="font-mono text-xs text-muted">DRDO Peer-Reviewed Research</span>
          </div>
          <h3 className="font-display text-base font-medium text-text">
            Automatic Extraction of Road Network from Satellite Images of Urban Areas Using a Convolution Neural Network
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
            Research paper on satellite remote sensing segmentation using deep Convolutional Neural Networks (CNNs) for road extraction from urban aerial imagery.
          </p>
        </div>
      </section>
    </div>
  )
}
