import { Briefcase, Calendar, Award, BookOpen } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { experiences, drdoPublication } from '@/data/experience'

export function Experience() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-20">
      {/* Header */}
      <div className="mb-12">
        <h1 className="font-display text-3xl font-semibold text-text sm:text-4xl">
          Professional Experience &amp; Research
        </h1>
        <p className="mt-3 font-mono text-sm text-muted">
          Track record of designing, building, and deploying production-grade AI &amp; Machine Learning systems.
        </p>
      </div>

      {/* Corporate Experience Timeline */}
      <div className="relative border-l border-border pl-6 sm:pl-8 space-y-10">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-bg group-hover:bg-accent transition-colors" />

            <div className="rounded-lg border border-border bg-surface p-6 shadow-sm transition-colors hover:border-accent/50">
              {/* Role Header */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="font-display text-xl font-semibold text-text">
                    {exp.role}
                  </h2>
                  <p className="font-mono text-sm text-accent mt-0.5 flex items-center gap-1.5">
                    <Briefcase size={14} />
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center font-mono text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar size={13} />
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
              </div>

              {/* Achievements */}
              <ul className="mt-4 list-disc list-inside space-y-2 text-sm text-muted leading-relaxed">
                {exp.achievements.map((item, idx) => (
                  <li key={idx} className="pl-1">
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="mt-6 border-t border-border/60 pt-4">
                <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">
                  Technologies &amp; Tools Used
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DRDO Research & Publication (In a separate box) */}
      <section className="mt-16 pt-10 border-t border-border">
        <div className="flex items-center gap-2 mb-6">
          <Award size={20} className="text-accent" />
          <h2 className="font-display text-2xl font-semibold text-text">
            Research &amp; Peer-Reviewed Publication
          </h2>
        </div>

        <div className="rounded-lg border border-accent/40 bg-accent/5 p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/60 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <BookOpen size={16} className="text-accent" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
                {drdoPublication.type}
              </span>
            </div>
            <div className="flex items-center gap-3 font-mono text-xs text-muted">
              <span>{drdoPublication.institution}</span>
              <span>&bull;</span>
              <span>{drdoPublication.period}</span>
            </div>
          </div>

          <h3 className="font-display text-lg font-semibold text-text">
            {drdoPublication.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-muted">
            {drdoPublication.description}
          </p>

          <div className="mt-6 border-t border-border/60 pt-4">
            <p className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">
              Research Domains &amp; Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {drdoPublication.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
