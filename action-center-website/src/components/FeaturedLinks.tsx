import './FeaturedLinks.css'

export default function FeaturedLinks() {
  return (
    <section className="featured-links">
      <div className="featured-links__container">
        <div className="featured-links__card featured-links__card--inventory">
          <div className="featured-links__label">INVENTORY</div>
        </div>

        <div className="featured-links__card featured-links__card--research">
          <div className="featured-links__label">RESEARCH AND DEVELOPMENT</div>
        </div>

        <div className="featured-links__card featured-links__card--atlas">
          <div className="featured-links__label">ATLAS</div>
        </div>

        <div className="featured-links__card featured-links__card--partnership">
          <div className="featured-links__label">PARTNERSHIP</div>
        </div>
      </div>
    </section>
  )
}