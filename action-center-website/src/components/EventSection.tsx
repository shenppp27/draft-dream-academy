import './EventSection.css'
import EventCard from './EventCard'
import { events } from '../data/events'

export default function EventSection() {
  return (
    <section className="event-section">
      <div className="event-container">
        <div className="event-header">
          <div className="event-heading-block">
            <p className="event-subtitle">— BatStateU</p>
            <h2 className="event-heading">
              Our Latest <span>News&Events</span>
            </h2>
          </div>

          <a href="#" className="event-view-all-button">
            View All
          </a>
        </div>

        <div className="event-slider-shell">
          <button className="event-slider-arrow event-slider-arrow-left" aria-label="Previous events">
            ‹
          </button>

          <div className="event-grid">
            {events.map((item) => (
              <EventCard key={item.id} item={item} />
            ))}
          </div>

          <button className="event-slider-arrow event-slider-arrow-right" aria-label="Next events">
            ›
          </button>
        </div>
      </div>
    </section>
  )
}