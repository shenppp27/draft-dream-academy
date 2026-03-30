import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { announcements } from '../data/announcements'
import { fadeUp } from '../animations'
import Footer from '../components/Footer'
import { ChevronLeft } from 'lucide-react'
import './ItemDetail.css'

export default function AnnouncementDetail() {
  const { id } = useParams<{ id: string }>()
  const announcement = announcements.find((a) => a.id === Number(id))

  if (!announcement) {
    return (
      <div className="item-detail-page">
        <h2>Announcement not found.</h2>
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
            <span className="item-detail-category">{announcement.category}</span>
            <p className="item-detail-date">{announcement.date}</p>
            <h1 className="item-detail-title">{announcement.title}</h1>
          </header>

          <div className="item-detail-image-wrap">
            <img src={announcement.image} alt={announcement.title} />
          </div>

          <div className="item-detail-content">
            {announcement.fullContent.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
