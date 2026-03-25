import Hero from '../components/Hero'
import TopInfoCard from '../components/TopInfoCard'
import AnnouncementSection from '../components/AnnouncementSection'
import EventSection from '../components/EventSection'
import FeaturedLinks from '../components/FeaturedLinks'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <section className="top-section">
        <h1 className="main-title">ACTION CENTER</h1>
        <TopInfoCard />
      </section>

      <main className="home-layout">
        <Hero />
        <AnnouncementSection />
        <EventSection />
        <FeaturedLinks />
        <Footer />
      </main>
    </>
  )
}