import { useState } from 'react'
import {
  Calendar,
  Clock,
  Tag,
  PanelRightClose,
  PanelRightOpen,
  BookOpen,
  Folder,
  FolderOpen,
  FileText,
  ChevronDown,
  ChevronRight,
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { blogFolders, type BlogFile } from '@/data/blogs'

export function Blogs() {
  // All files flattened for initial selection lookup
  const allFiles = blogFolders.flatMap((f) => f.files)

  const [selectedFileId, setSelectedFileId] = useState<string>(allFiles[0].id)
  const [showExplorer, setShowExplorer] = useState<boolean>(true)

  // Track expanded folder state (default all open)
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {}
    blogFolders.forEach((f) => {
      initial[f.id] = true
    })
    return initial
  })

  const toggleFolder = (folderId: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderId]: !prev[folderId],
    }))
  }

  // Active file & folder lookup
  const activeFile: BlogFile = allFiles.find((f) => f.id === selectedFileId) || allFiles[0]
  const activeFolder = blogFolders.find((f) => f.files.some((file) => file.id === activeFile.id))

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
      {/* Top Controls Header */}
      <div className="mb-8 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookOpen size={18} className="text-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              Knowledge Base &amp; Notes
            </span>
          </div>
          <h1 className="font-display text-2xl font-semibold text-text sm:text-3xl">
            Blog &amp; Folder Explorer
          </h1>
        </div>

        {/* Toggle Explorer Sidebar Button */}
        <button
          type="button"
          onClick={() => setShowExplorer((prev) => !prev)}
          className="flex items-center gap-2 self-start sm:self-auto rounded-md border border-border bg-surface px-3.5 py-2 font-mono text-xs text-text transition-all hover:border-accent hover:text-accent shadow-sm"
        >
          {showExplorer ? (
            <>
              <PanelRightClose size={16} />
              <span>Hide Folder Explorer</span>
            </>
          ) : (
            <>
              <PanelRightOpen size={16} />
              <span>Show Folder Explorer</span>
            </>
          )}
        </button>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Main Article Content Reader */}
        <div className={showExplorer ? 'lg:col-span-8' : 'lg:col-span-12'}>
          <article className="rounded-lg border border-border bg-surface p-6 shadow-sm sm:p-8">
            {/* File Breadcrumb path */}
            <div className="flex items-center gap-2 font-mono text-xs text-accent mb-4 bg-accent/5 rounded px-3 py-1.5 border border-accent/20">
              <Folder size={14} />
              <span>{activeFolder?.folderName}</span>
              <span>/</span>
              <FileText size={14} />
              <span className="font-semibold">{activeFile.title}</span>
            </div>

            {/* Meta bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 mb-6">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-accent">
                <Tag size={13} />
                {activeFile.category}
              </span>

              <div className="flex items-center gap-4 font-mono text-xs text-muted">
                <span className="flex items-center gap-1">
                  <Calendar size={13} />
                  {activeFile.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={13} />
                  {activeFile.readTime}
                </span>
              </div>
            </div>

            {/* Article Title */}
            <h2 className="font-display text-2xl font-bold leading-snug text-text sm:text-3xl">
              {activeFile.title}
            </h2>

            {/* Excerpt Lead */}
            <p className="mt-4 rounded-md border-l-2 border-accent bg-accent/5 p-4 text-sm font-medium leading-relaxed text-text">
              {activeFile.excerpt}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {activeFile.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>

            {/* Body Content */}
            <div className="mt-8 space-y-4 border-t border-border pt-6 text-sm leading-relaxed text-muted">
              {activeFile.content.map((paragraph, index) => (
                <p key={index} className={paragraph.startsWith('•') ? 'pl-4 font-mono text-xs text-text' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>

        {/* Right-Hand IDE-Style Folder Tree Explorer (Neel Mishra style, Hidable) */}
        {showExplorer && (
          <div className="lg:col-span-4">
            <aside className="sticky top-24 rounded-lg border border-border bg-surface p-5 shadow-sm">
              <div className="flex items-center justify-between border-b border-border pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <FolderOpen size={16} className="text-accent" />
                  <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                    Folder Tree
                  </span>
                </div>
                <span className="rounded-full bg-accent/10 border border-accent/20 px-2 py-0.5 font-mono text-xs text-accent">
                  {blogFolders.length} folders
                </span>
              </div>

              {/* Folder Tree Items */}
              <div className="space-y-4 font-mono text-xs">
                {blogFolders.map((folder) => {
                  const isFolderOpen = !!openFolders[folder.id]
                  return (
                    <div key={folder.id} className="rounded-md border border-border/80 bg-surface/40 p-2.5">
                      {/* Folder Header */}
                      <button
                        type="button"
                        title={folder.folderName}
                        onClick={() => toggleFolder(folder.id)}
                        className="flex w-full items-center justify-between font-semibold text-text hover:text-accent transition-colors"
                      >
                        <div className="flex items-center gap-2 truncate">
                          {isFolderOpen ? (
                            <FolderOpen size={15} className="text-accent shrink-0" />
                          ) : (
                            <Folder size={15} className="text-muted shrink-0" />
                          )}
                          <span className="truncate" title={folder.folderName}>
                            {folder.folderName}
                          </span>
                        </div>
                        {isFolderOpen ? (
                          <ChevronDown size={14} className="text-muted shrink-0" />
                        ) : (
                          <ChevronRight size={14} className="text-muted shrink-0" />
                        )}
                      </button>

                      {/* Folder Files List */}
                      {isFolderOpen && (
                        <div className="mt-2.5 space-y-1.5 pl-4 border-l border-border/60 ml-1.5 pt-1">
                          {folder.files.map((file) => {
                            const isSelected = file.id === activeFile.id
                            return (
                              <button
                                key={file.id}
                                type="button"
                                title={file.title}
                                onClick={() => setSelectedFileId(file.id)}
                                className={`flex w-full items-center gap-2 rounded px-2.5 py-2 text-left transition-all ${
                                  isSelected
                                    ? 'bg-accent/15 text-accent font-semibold border border-accent/30'
                                    : 'text-muted hover:bg-surface-hover hover:text-text'
                                }`}
                              >
                                <FileText size={13} className={isSelected ? 'text-accent' : 'text-muted'} />
                                <span className="truncate leading-snug" title={file.title}>
                                  {file.title}
                                </span>
                              </button>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  )
}
