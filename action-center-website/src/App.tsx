import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbars from './components/Navbars'
import TopInfoCard from './components/TopInfoCard'
import PageTransition from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DPRPage from './pages/DPRPage'
import DDRPage from './pages/DDRPage'
import DREAMPage from './pages/DREAMPage'
import AnnouncementsList from './pages/AnnouncementsList'
import AnnouncementDetail from './pages/AnnouncementDetail'
import EventsList from './pages/EventsList'
import EventDetail from './pages/EventDetail'
import PartnershipPage from './pages/PartnershipPage'

export default function App() {
  const location = useLocation()

  return (
    <div className="app-shell">
      <ScrollToTop />

      {/* Static header — never animates out */}
      <header className="app-header">
        <Navbars />
        <TopInfoCard />
      </header>

      {/* Animated page content */}
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/dpr" element={<PageTransition><DPRPage /></PageTransition>} />
          <Route path="/ddr" element={<PageTransition><DDRPage /></PageTransition>} />
          <Route path="/dream-academy" element={<PageTransition><DREAMPage /></PageTransition>} />
          <Route path="/partnership" element={<PageTransition><PartnershipPage /></PageTransition>} />
          
          <Route path="/announcements" element={<PageTransition><AnnouncementsList /></PageTransition>} />
          <Route path="/announcements/:id" element={<PageTransition><AnnouncementDetail /></PageTransition>} />
          
          <Route path="/events" element={<PageTransition><EventsList /></PageTransition>} />
          <Route path="/events/:id" element={<PageTransition><EventDetail /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}