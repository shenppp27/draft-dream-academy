import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './AnnouncementCard.css'
import type { AnnouncementItem } from '../data/announcements'
import { fadeUp, hoverLift, tapPress } from '../animations'

interface AnnouncementCardProps {
  item: AnnouncementItem
}

export default function AnnouncementCard({ item }: AnnouncementCardProps) {
  return (
    <motion.article
      className="announcement-card"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      whileHover={hoverLift}
      whileTap={tapPress}
    >
      <Link to={`/announcements/${item.id}`} style={{ display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none', color: 'inherit' }}>
        <div className="announcement-image-wrap">
          <img src={item.image} alt={item.title} className="announcement-image" />
          <div className="announcement-tag">{item.category}</div>
        </div>

        <div className="announcement-content">
          <div className="announcement-date">🗓 {item.date}</div>
          <h3 className="announcement-title">{item.title}</h3>
          <p className="announcement-description">{item.description}</p>
          <span className="announcement-link">
            Read More →
          </span>
        </div>
      </Link>
    </motion.article>
  )
}