import heroImage from '../assets/hero.png'
import Footer from '../components/Footer'
import './AboutPage.css'

const aimCards = [
  {
    title: 'Protect assets',
    text: 'Maintain responsive emergency action and support timely crisis management across the university.',
  },
  {
    title: 'Take a proactive role',
    text: 'Promote awareness, prevention, preparedness, and resilience-building among stakeholders.',
  },
  {
    title: 'Support safer communities',
    text: 'Advance disaster risk reduction through research, extension work, and collaboration.',
  },
  {
    title: 'Deliver reliable information',
    text: 'Provide useful and timely information before, during, and after hazards and emergencies.',
  },
]

export default function AboutPage() {
  return (
    <>
      <main className="about-page">
        <section className="about-page__hero">
          <div className="about-page__hero-text">
            <p className="about-page__eyebrow">About ACTION Center</p>
            <h1 className="about-page__title">Building resilience through action.</h1>
            <p className="about-page__description">
              The BatStateU ACTION Center serves as a university hub for disaster
              preparedness, risk reduction, training, and community-oriented response.
            </p>
          </div>

          <div className="about-page__hero-image-wrap">
            <img src={heroImage} alt="About ACTION Center" className="about-page__hero-image" />
          </div>
        </section>

        <section className="about-page__purpose">
          <h2>THE PURPOSE</h2>
          <p>
            Adaptive Capacity-building and Technology Innovation for Occupational
            Health and Natural Disasters.
          </p>
        </section>

        <section className="about-page__aims">
          <h2>
            The ACTION <span>Center</span> Aims To:
          </h2>

          <div className="about-page__aims-grid">
            {aimCards.map((item) => (
              <article key={item.title} className="about-page__aim-card">
                <div className="about-page__aim-icon">◈</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}