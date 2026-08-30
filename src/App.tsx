import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Events from './pages/Events'
import CivicProjects from './pages/CivicProjects'
import About from './pages/About'
import Join from './pages/Join'
import Contact from './pages/Contact'
import Archive from './pages/Archive'
import FlowerShowDetail from './pages/FlowerShowDetail'
import FlowerShowGuide from './pages/FlowerShowGuide'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-20">{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/flower-show-guide" element={<FlowerShowGuide />} />
          <Route path="/events/:slug" element={<FlowerShowDetail />} />
          <Route path="/civic-projects" element={<CivicProjects />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
