import { BrowserRouter, Routes, Route } from 'react-router'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollControls } from '@/components/ui/ScrollControls'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Experience } from '@/pages/Experience'
import { Projects } from '@/pages/Projects'
import { Blogs } from '@/pages/Blogs'

function App() {
  return (
    <BrowserRouter>
      <div className="relative flex min-h-screen flex-col bg-bg text-text overflow-hidden">
        {/* Neel Mishra Style Ambient Glow Orbs */}
        <div className="bg-orb orb-blue" aria-hidden="true" />
        <div className="bg-orb orb-red" aria-hidden="true" />

        <Navbar />
        <main className="relative z-10 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>
        <Footer />
        <ScrollControls />
      </div>
    </BrowserRouter>
  )
}

export default App
