import { motion } from 'framer-motion'
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
      <div className="event-image-wrap">
        <img src={item.image} alt={item.title} className="event-image" />
        <div className="event-tag">{item.category}</div>
      </div>

      <div className="event-content">
        <div className="event-date">🗓 {item.date}</div>
        <h3 className="event-title">{item.title}</h3>
        <p className="event-description">{item.description}</p>
        <a href="#" className="event-link">
          Read More <span>→</span>
        </a>
      </div>
    </motion.article>
  )
}