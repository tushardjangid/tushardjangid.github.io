import { User } from 'lucide-react'

function CardRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5 border-b border-border py-3.5 last:border-none sm:flex-row sm:items-baseline sm:justify-between">
      <span className="font-mono text-xs text-muted">{label}</span>
      <span className="font-mono text-sm text-text font-medium leading-relaxed">{value}</span>
    </div>
  )
}

export function About() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <User size={18} className="text-accent" />
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            Profile Overview
          </span>
        </div>
        <h1 className="font-display text-3xl font-semibold text-text sm:text-4xl">
          About Me
        </h1>
        <p className="mt-3 max-w-2xl font-mono text-sm text-muted">
          Senior AI/ML Engineer specialized in Large Language Models, agentic AI architectures, computer vision, and high-performance ML pipelines.
        </p>
      </div>

      {/* Main Profile Card (Model Card style without model_card label, location, specialization, or key strengths) */}
      <div className="rounded-lg border border-border bg-surface p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-border pb-3 mb-2">
          <span className="font-mono text-xs uppercase tracking-widest text-muted">
            Overview
          </span>
          <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-mono text-emerald-400 border border-emerald-500/20">
            status: active
          </span>
        </div>
        <CardRow label="role" value="Senior AI / ML Engineer" />
        <CardRow
          label="engineering_philosophy"
          value="Bridging advanced technical modeling with modern production engineering — constructing deterministic multi-agent systems, reducing RAG hallucination rates, and optimizing real-time computer vision inference pipelines."
        />
      </div>
    </div>
  )
}
