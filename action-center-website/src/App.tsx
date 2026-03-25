import Navbars from './components/Navbars'
import Hero from './components/Hero'
import TopInfoCard from './components/TopInfoCard'
import AnnouncementSection from './components/AnnouncementSection'
import EventSection from './components/EventSection'

export default function App() {
  return (
    <div className="app-shell">
      <section className="top-section">
        <Navbars />
        <h1 className="main-title">ACTION CENTER</h1>
        <TopInfoCard />
      </section>

      <main className="home-layout">
        <Hero />
        <AnnouncementSection />
        <EventSection />
      </main>
    </div>
  )
}