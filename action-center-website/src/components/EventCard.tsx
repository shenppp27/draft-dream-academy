import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './EventCard.css'
import { hoverLift, tapPress } from '../animations'

export interface EventItem {
  id: number
  category: string
  date: string
  title: string
  description: string
  image: string
}

interface EventCardProps {
  item: EventItem
}

export default function EventCard({ item }: EventCardProps) {
  return (
    <motion.article
      className="event-card"
      whileHover={hoverLift}
      whileTap={tapPress}
    >
      <Link to={`/events/${item.id}`} style={{ display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none', color: 'inherit' }}>
        <div className="event-image-wrap">
          <img src={item.image} alt={item.title} className="event-image" />
          <div className="event-tag">{item.category}</div>
        </div>

        <div className="event-content">
          <div className="event-date">🗓 {item.date}</div>
          <h3 className="event-title">{item.title}</h3>
          <p className="event-description">{item.description}</p>
          <span className="event-link">
            Read More <span>→</span>
          </span>
        </div>
      </Link>
    </motion.article>
  )
}