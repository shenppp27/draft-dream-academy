import { motion } from 'framer-motion'
import heroImg from '../assets/hero.png'
import aboutAnimateImg from '../assets/aboutanimate.jpg'
import atlasImg from '../assets/altas.png'
import partnershipImg from '../assets/partnership.png'
import rdImg from '../assets/rd_logoz.png'
import dprImg from '../assets/dprimage.jpg'
import inventoryImg from '../assets/inventory.jpg'
import logoImg from '../assets/actioncenter-logo-enhance.png'
import Footer from '../components/Footer'
import { fadeUp, staggerContainer, slideRight, slideLeft, scaleIn } from '../animations'
import './DREAMPage.css'

const statsCards = [
  {
    image: aboutAnimateImg,
    title: 'Graduation Trend',
    subtitle: 'Master in Disaster Risk Reduction and Management (2020–2025)',
  },
  {
    image: rdImg,
    title: 'Student Enrollment',
    subtitle: 'Number of Students Enrolled in MDRM',
  },
]

const profileStories = [
  {
    image: atlasImg,
    quote:
      'The Master in Disaster Risk Management Off-Campus Program gave me the opportunity to learn more and enrich my understanding in the field of disaster risk reduction and management. The fruitful and active class discussions, and knowledge sharing on real-life experiences are the key elements of this program that will serve as the building blocks in shaping my future to be a better public servant.',
    name: 'KELVIN ART T. OFRECIO',
    role: 'Master in Disaster Risk Management',
  },
  {
    image: partnershipImg,
    quote:
      'My Master in Disaster Risk Management journey was one of the integral parts of my life. Being in DRRM job was never a dream for me, but it seems to be my fate. One of the takeaways is the friendship and connections established during the journey of learning. As a member of the pioneer batch, I can proudly say that our weapon is being one, being united, and being a family to our classmates.',
    name: 'BELINA MACUHA-MONTALBO',
    role: 'Municipal Disaster Risk Reduction and Management Officer, Bauan, Batangas',
  },
]

const featuredQuotes = [
  {
    image: inventoryImg,
    quote:
      'Thinking of the days as a student of MDRM fills me with nostalgia. The BatStateU Master in Disaster Risk Management program opened my awareness to more scientific methods of conducting disaster management programs. The lessons and influences of my professors have provided me with the knowledge and skills necessary to improve as a public servant.',
    name: 'RODRIGO DELA ROCA',
    role: 'Batangas City Disaster Risk Reduction and Management Officer',
  },
  {
    image: dprImg,
    quote:
      'Our journey in MDRM made us function as military professionals and as a team working in diverse environments. The program contributed greatly to the dissemination and implementation of several DRRM methodologies and processes. We learned to be adaptive, disciplined, and responsive in different disaster scenarios.',
    name: 'CPT KRYSTLE ROSE V. ABAY (AGS) PA',
    role: 'Public Servant',
  },
]

const alumniCards = [
  {
    image: aboutAnimateImg,
    text:
      'My journey as a Disaster Risk Management student at Batangas State University, The National Engineering University, has been transformative. The program introduced me to foundational courses in disaster risk reduction and management, equipped me with essential skills, and prepared me to make meaningful contributions to resilient communities.',
    name: 'DOUREN A. LAROZA – MENDOZA',
    role: 'Disaster Risk Management Graduate',
    batch: 'Batch 2023',
  },
  {
    image: heroImg,
    text:
      'My journey as a Disaster Risk Management student at Batangas State University has been both rigorous and rewarding. Through academic knowledge, practical exposure, and collaborative learning, I developed a stronger understanding of risk reduction, disaster resilience, and public service.',
    name: 'SELIKA ALEXIS A. MELO',
    role: 'Disaster Risk Management Graduate',
    batch: 'Batch 2023',
  },
]

const vp = { once: true, margin: '-80px' as const }

export default function DREAMPage() {
  return (
    <>
      <main className="dream-page-pro">

        {/* ── Hero ── */}
        <section className="dream-hero-pro">
          <div className="dream-shell dream-shell--hero">
            <motion.div
              className="dream-hero-pro__content"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <p className="dream-kicker">DREAM Academy</p>

              <h1 className="dream-hero-pro__title">
                Master in <span>Disaster Risk</span>
                <br />
                Management
              </h1>

              <p className="dream-hero-pro__lead">
                Prepares professionals to manage disasters, strengthen resilience,
                and contribute to emergency response, risk reduction, and humanitarian work.
              </p>
            </motion.div>

            <motion.div
              className="dream-hero-pro__image-wrap"
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <img src={heroImg} alt="Master in Disaster Risk Management" />
            </motion.div>
          </div>
        </section>

        {/* ── Analytics ── */}
        <section className="dream-analytics-pro">
          <div className="dream-shell">
            <motion.div
              className="dream-analytics-pro__grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              {statsCards.map((item) => (
                <motion.article key={item.title} className="dream-analytics-card" variants={scaleIn}>
                  <div className="dream-analytics-card__image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="dream-analytics-card__meta">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Stories ── */}
        <section className="dream-stories-pro">
          <div className="dream-shell dream-shell--narrow">
            {profileStories.map((item, index) => (
              <motion.article
                key={item.name}
                className={`dream-story-card ${index % 2 === 1 ? 'dream-story-card--reverse' : ''}`}
                variants={index % 2 === 0 ? slideRight : slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                <div className="dream-story-card__copy">
                  <div className="dream-story-card__brand">
                    <span className="dream-story-card__dot" />
                    <strong>ACTION Center</strong>
                  </div>

                  <p className="dream-story-card__quote">"{item.quote}"</p>

                  <div className="dream-story-card__person">
                    <h3>{item.name}</h3>
                    <p>{item.role}</p>
                  </div>
                </div>

                <div className="dream-story-card__photo">
                  <img src={item.image} alt={item.name} />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ── Featured Quotes ── */}
        <section className="dream-featured-pro">
          <div className="dream-shell dream-shell--narrow">
            <motion.div
              className="dream-featured-pro__heading"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <h2>
                "<span>Preparedness</span> is the
                <br />
                key to success."
              </h2>
              <p>Alexander Graham Bell</p>
            </motion.div>

            <motion.div
              className="dream-featured-pro__grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              {featuredQuotes.map((item) => (
                <motion.article key={item.name} className="dream-feature-card" variants={fadeUp}>
                  <p className="dream-feature-card__text">"{item.quote}"</p>

                  <div className="dream-feature-card__footer">
                    <div className="dream-feature-card__avatar">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="dream-feature-card__meta">
                      <h3>{item.name}</h3>
                      <p>{item.role}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Alumni ── */}
        <section className="dream-alumni-pro">
          <div className="dream-shell">
            <motion.div
              className="dream-section-heading-pro"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <h2>
                Master in Disaster <span>Risk Management</span>
                <br />
                Alumni Testimonial
              </h2>
              <div className="dream-section-heading-pro__line" />
            </motion.div>

            <motion.div
              className="dream-alumni-pro__grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              {alumniCards.map((item) => (
                <motion.article key={item.name} className="dream-alumni-pro__card" variants={fadeUp}>
                  <p className="dream-alumni-pro__text">{item.text}</p>

                  <div className="dream-alumni-pro__footer">
                    <div className="dream-alumni-pro__avatar">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="dream-alumni-pro__meta">
                      <h3>{item.name}</h3>
                      <p>{item.role}</p>
                      <span>{item.batch}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Facebook ── */}
        <motion.section
          className="dream-facebook-pro"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div className="dream-shell dream-shell--narrow">
            <div className="dream-section-heading-pro">
              <h2>
                Visit our <span>Facebook Page</span>
              </h2>
              <div className="dream-section-heading-pro__line" />
            </div>

            <article className="dream-facebook-card">
              <div className="dream-facebook-card__banner">
                <img src={atlasImg} alt="Dream Academy Facebook banner" />
              </div>

              <div className="dream-facebook-card__footer">
                <div className="dream-facebook-card__logo">
                  <img src={logoImg} alt="Dream Academy" />
                </div>

                <div className="dream-facebook-card__meta">
                  <h3>DREAM Academy - Batangas State University</h3>
                  <p>2.9K likes · 3.1K followers</p>
                </div>
              </div>
            </article>
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  )
}