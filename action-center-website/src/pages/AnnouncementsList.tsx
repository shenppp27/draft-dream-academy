import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { announcements } from '../data/announcements'
import { fadeUp, slideRight, slideLeft } from '../animations'
import Footer from '../components/Footer'
import { ChevronDown, ChevronLeft } from 'lucide-react'
import './ListView.css'

export default function AnnouncementsList() {
  // Mock image shows specific year selected (e.g. 2024 or 2025). 
  // We'll set 2025 as default to always show something.
  const [selectedYear, setSelectedYear] = useState<number>(2025)

  const featuredItem = useMemo(() => {
    return announcements.find((a) => a.year === selectedYear) || announcements[0]
  }, [selectedYear])

  const listItems = useMemo(() => {
    return announcements
      .filter((a) => a.year === selectedYear && a.id !== featuredItem?.id)
      .slice(0, 3)
  }, [selectedYear, featuredItem])

  return (
    <>
      <main className="lv-page">
        <div className="lv-container">
          <header className="lv-header">
            <Link to="/" className="lv-back">
              <ChevronLeft size={20} /> Back to Home
            </Link>
            <h1 className="lv-title">Announcements</h1>
          </header>

          <motion.div
            className="lv-grid"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            {/* -- LEFT: FEATURED ITEM -- */}
            <motion.div variants={slideRight}>
              <Link to={`/announcements/${featuredItem.id}`} className="lv-featured-card">
                <div className="lv-featured-inner">
                  <img src={featuredItem.image} alt={featuredItem.title} className="lv-featured-image" />
                  <div className="lv-featured-overlay">
                    <h2 className="lv-featured-title">{featuredItem.title}</h2>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* -- RIGHT: LIST ITEMS -- */}
            <motion.div className="lv-list-side" variants={slideLeft}>
              <div className="lv-list-header-row">
                <span className="lv-list-label">LATEST</span>
                <div className="lv-list-select-wrap">
                  <select
                    className="lv-list-select"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(Number(e.target.value))}
                  >
                    <option value={2025}>2025</option>
                    <option value={2024}>2024</option>
                  </select>
                  <ChevronDown size={18} className="lv-list-select-icon" />
                </div>
              </div>

              <div className="lv-items-stack">
                <AnimatePresence mode="popLayout">
                  {listItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link to={`/announcements/${item.id}`} className="lv-item-card">
                        <h3 className="lv-item-title">{item.title}</h3>
                        <p className="lv-item-date">{item.date}</p>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {listItems.length === 0 && (
                  <p className="lv-empty">No more announcements found for {selectedYear}.</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
