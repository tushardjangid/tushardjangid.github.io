import { Briefcase, ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-display text-3xl font-semibold text-text sm:text-4xl">
          Key Production Projects
        </h1>
        <p className="mt-3 font-mono text-sm text-muted">
          A showcase of multi-agent LLM platforms, anomaly detection pipelines, video analytics systems, and scalable ML applications.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex flex-col justify-between rounded-lg border border-border bg-surface p-6 shadow-sm transition-colors hover:border-accent"
          >
            <div>
              <div className="flex items-start justify-between">
                <h2 className="font-display text-xl font-semibold text-text group-hover:text-accent transition-colors">
                  {project.title}
                </h2>
                <Briefcase size={20} className="text-muted shrink-0 mt-1" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-border/60">
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-muted hover:text-accent flex items-center gap-1 shrink-0 ml-2"
                  >
                    GitHub <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
