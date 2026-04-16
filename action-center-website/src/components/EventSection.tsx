import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './EventSection.css'
import EventCard from './EventCard'
import { events } from '../data/events'
import { fadeUp, hoverSoft, tapPress } from '../animations'

export default function EventSection() {
  const realCount = events.length

  const loopEvents = useMemo(() => {
    return [...events, ...events, ...events]
  }, [])

  const [currentIndex, setCurrentIndex] = useState(realCount)
  const [withTransition, setWithTransition] = useState(true)

  const handleNext = () => {
    setWithTransition(true)
    setCurrentIndex((prev) => prev + 1)
  }

  const handlePrev = () => {
    setWithTransition(true)
    setCurrentIndex((prev) => prev - 1)
  }

  const handleTransitionEnd = () => {
    if (currentIndex >= realCount * 2) {
      setWithTransition(false)
      setCurrentIndex(currentIndex - realCount)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true)
        })
      })
    }

    if (currentIndex < realCount) {
      setWithTransition(false)
      setCurrentIndex(currentIndex + realCount)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true)
        })
      })
    }
  }

  return (
    <motion.section
      className="event-section"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
    >
      <div className="event-container">
        <motion.div className="event-header" variants={fadeUp}>
          <div className="event-heading-block">
            <p className="event-subtitle">— BatStateU</p>
            <h2 className="event-heading">
              Our Latest <span>News&amp;Events</span>
            </h2>
          </div>

          <motion.div
            whileHover={hoverSoft}
            whileTap={tapPress}
          >
            <Link
              to="/events"
              className="event-view-all-button"
            >
              View All
            </Link>
          </motion.div>
        </motion.div>

        <div className="event-slider-shell">
          <motion.button
            type="button"
            className="event-slider-arrow event-slider-arrow-left"
            aria-label="Previous events"
            whileHover={hoverSoft}
            whileTap={tapPress}
            onClick={handlePrev}
          >
            ‹
          </motion.button>

          <div className="event-slider-window">
            <div
              className={`event-track ${withTransition ? 'is-animated' : 'is-resetting'}`}
              style={{
                transform: `translateX(calc(-1 * ${currentIndex} * (var(--event-card-width) + var(--event-gap))))`,
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {loopEvents.map((item, index) => (
                <div className="event-card-slide" key={`${item.id}-${index}`}>
                  <EventCard item={item} />
                </div>
              ))}
            </div>
          </div>

          <motion.button
            type="button"
            className="event-slider-arrow event-slider-arrow-right"
            aria-label="Next events"
            whileHover={hoverSoft}
            whileTap={tapPress}
            onClick={handleNext}
          >
            ›
          </motion.button>
        </div>
      </div>
    </motion.section>
  )
}