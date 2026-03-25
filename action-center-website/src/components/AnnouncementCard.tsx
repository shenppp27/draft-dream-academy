import './AnnouncementCard.css'
import type { AnnouncementItem } from '../data/announcements'

interface AnnouncementCardProps {
  item: AnnouncementItem
}

export default function AnnouncementCard({ item }: AnnouncementCardProps) {
  return (
    <article className="announcement-card">
      <div className="announcement-image-wrap">
        <img src={item.image} alt={item.title} className="announcement-image" />
        <div className="announcement-tag">{item.category}</div>
      </div>

      <div className="announcement-content">
        <div className="announcement-date">🗓 {item.date}</div>
        <h3 className="announcement-title">{item.title}</h3>
        <p className="announcement-description">{item.description}</p>
        <a href="#" className="announcement-link">
          Read More →
        </a>
      </div>
    </article>
  )
}