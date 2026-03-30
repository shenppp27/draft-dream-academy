import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import './AnnouncementSection.css'
import AnnouncementCard from './AnnouncementCard'
import { announcements } from '../data/announcements'
import { fadeUp, hoverSoft, tapPress } from '../animations'

type SlideDirection = 'left' | 'right'

export default function AnnouncementSection() {
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState<SlideDirection>('right')

  const pages = [
    announcements.slice(0, 3),
    announcements.slice(3, 5),
  ]

  const currentItems = pages[page] ?? []

  const goToPage = (nextPage: number, newDirection: SlideDirection) => {
    if (nextPage === page) return
    setDirection(newDirection)
    setPage(nextPage)
  }

  const handleNext = () => {
    goToPage(page === 0 ? 1 : 0, 'right')
  }

  const handlePrev = () => {
    goToPage(page === 0 ? 1 : 0, 'left')
  }

  return (
    <motion.section
      className="announcement-section"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="announcement-container">
        <motion.div className="announcement-header" variants={fadeUp}>
          <div className="announcement-heading-block">
            <p className="announcement-subtitle">— BatStateU</p>
            <h2 className="announcement-heading">
              Our Latest <span>Announcements</span>
            </h2>
          </div>

          <motion.div
            whileHover={hoverSoft}
            whileTap={tapPress}
          >
            <Link
              to="/announcements"
              className="announcement-view-all-button"
            >
              View All
            </Link>
          </motion.div>
        </motion.div>

        <div className="announcement-slider-shell">
          <motion.button
            type="button"
            className="announcement-slider-arrow"
            aria-label="Previous announcements"
            whileHover={hoverSoft}
            whileTap={tapPress}
            onClick={handlePrev}
          >
            ‹
          </motion.button>

          <div className="announcement-slider-window">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={page}
                className={`announcement-grid ${
                  currentItems.length === 3
                    ? 'announcement-grid--three'
                    : 'announcement-grid--two'
                }`}
                initial={{
                  opacity: 0,
                  x: direction === 'right' ? -100 : 100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: direction === 'right' ? 100 : -100,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {currentItems.map((item) => (
                  <AnnouncementCard key={item.id} item={item} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            type="button"
            className="announcement-slider-arrow"
            aria-label="Next announcements"
            whileHover={hoverSoft}
            whileTap={tapPress}
            onClick={handleNext}
          >
            ›
          </motion.button>
        </div>

        <div className="announcement-slider-dots">
          <button
            type="button"
            className={`announcement-slider-dot ${page === 0 ? 'is-active' : ''}`}
            onClick={() => goToPage(0, 'left')}
            aria-label="Show first set"
          />
          <button
            type="button"
            className={`announcement-slider-dot ${page === 1 ? 'is-active' : ''}`}
            onClick={() => goToPage(1, 'right')}
            aria-label="Show second set"
          />
        </div>
      </div>
    </motion.section>
  )
}