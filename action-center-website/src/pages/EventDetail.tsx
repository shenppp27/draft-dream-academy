import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { events } from '../data/events'
import { fadeUp } from '../animations'
import Footer from '../components/Footer'
import { ChevronLeft, MapPin, Clock } from 'lucide-react'
import './ItemDetail.css'

export default function EventDetail() {
  const { id } = useParams<{ id: string }>()
  const event = events.find((e) => e.id === Number(id))

  if (!event) {
    return (
      <div className="item-detail-page">
        <h2>Event not found.</h2>
        <Link to="/">Go back home</Link>
      </div>
    )
  }

  return (
    <>
      <main className="item-detail-page">
        <motion.div
          className="item-detail-container"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <Link to="/" className="item-detail-back">
            <ChevronLeft size={20} /> Back to Home
          </Link>

          <header className="item-detail-header">
            <span className="item-detail-category" style={{ background: '#0f766e' }}>
              {event.category}
            </span>
            <p className="item-detail-date">{event.date}</p>
            <h1 className="item-detail-title">{event.title}</h1>
          </header>

          <div className="item-detail-meta-bar">
            {event.location && (
              <div className="item-detail-meta-item">
                <MapPin size={18} /> {event.location}
              </div>
            )}
            {event.time && (
              <div className="item-detail-meta-item">
                <Clock size={18} /> {event.time}
              </div>
            )}
          </div>

          <div className="item-detail-image-wrap">
            <img src={event.image} alt={event.title} />
          </div>

          <div className="item-detail-content">
            {event.fullContent.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
