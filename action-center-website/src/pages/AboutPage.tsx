import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import heroImage from '../assets/hero.png'
import Footer from '../components/Footer'
import { fadeUp, staggerContainer, slideRight, slideLeft, scaleIn } from '../animations'
import {
  ShieldCheck,
  Users,
  Building2,
  FileSearch,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import './AboutPage.css'

const aimCards = [
  {
    icon: <ShieldCheck size={18} strokeWidth={2.2} />,
    title: 'Protect assets and gains',
    text: 'Safeguard the progress, resources, and welfare of people and communities through science-based risk reduction, education, and action.',
  },
  {
    icon: <Users size={18} strokeWidth={2.2} />,
    title: 'Build proactive communities',
    text: 'Promote preparedness, awareness, and resilience through professional education, skills training, and practical disaster readiness initiatives.',
  },
  {
    icon: <Building2 size={18} strokeWidth={2.2} />,
    title: 'Strengthen local readiness',
    text: 'Help local leaders and communities better understand hazard risks and improve their readiness before disruptive events occur.',
  },
  {
    icon: <FileSearch size={18} strokeWidth={2.2} />,
    title: 'Deliver reliable information',
    text: 'Provide timely, relevant, and actionable hazard information to guide communities before, during, and after emergencies.',
  },
]

const timelineItems = [
  {
    title: 'Establishment of the BatStateU ACTION Center',
    subtitle: 'Board Resolution No. 482-A, S.2016',
    text: "The Board of Regents approved the creation of the BatStateU ACTION Center on November 19, 2016, alongside the approval of the University's Disaster and Risk Reduction Management Plan.",
  },
  {
    title: 'National Recognition',
    subtitle: 'Republic Act 11694',
    text: 'Batangas State University was declared the National Engineering University, strengthening its role in research, innovation, and national development.',
    quote:
      'Section 3 (j): "Provide an avenue for the professional advancement of Disaster Risk Management (DRM) managers and practitioners by offering academic programs in DRM and contribute in ensuring a resilient community..."',
  },
]

const facilitySlides = [
  {
    image: heroImage,
    tag: 'Front Desk',
    title: 'Command Center Building',
    label: 'FRONT DESK',
    text: 'A key receiving and coordination point that supports visitor assistance, operational flow, and front-facing communication.',
  },
  {
    image: heroImage,
    tag: 'Command and Control Room',
    title: 'Command Center Building',
    label: 'COMMAND AND CONTROL ROOM',
    text: 'A centralized operational environment for monitoring, coordination, and decision support during hazard and emergency-related events.',
  },
  {
    image: heroImage,
    tag: 'Operations Area',
    title: 'Command Center Building',
    label: 'OPERATIONS AREA',
    text: 'A support space for planning, documentation, logistics coordination, and team-based operational activities.',
  },
  {
    image: heroImage,
    tag: 'Monitoring Area',
    title: 'Command Center Building',
    label: 'MONITORING AREA',
    text: 'A dedicated space for real-time observation, information tracking, and situational awareness activities.',
  },
]

const featureCards = [
  { image: heroImage, title: 'HISTORY' },
  { image: heroImage, title: 'ORGANIZATIONAL STRUCTURE' },
  { image: heroImage, title: 'AWARDS AND RECOGNITION' },
]

const vp = { once: true, margin: '-80px' as const }

export default function AboutPage() {
  const [slideIndex, setSlideIndex] = useState(0)

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 2) % facilitySlides.length)
  }

  const prevSlide = () => {
    setSlideIndex((prev) => (prev - 2 + facilitySlides.length) % facilitySlides.length)
  }

  const visibleSlides = useMemo(
    () => [facilitySlides[slideIndex], facilitySlides[(slideIndex + 1) % facilitySlides.length]],
    [slideIndex]
  )

  return (
    <>
      <main className="about-page-pro">

        {/* ── TOP GRADIENT WRAPPER ── */}
        <div className="about-top-wrapper">
          {/* ── Hero ── */}
          <section className="about-hero-pro">
            <motion.div
            className="about-hero-pro__text"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <p className="about-hero-pro__eyebrow">BatStateU ACTION Center</p>
            <h1 className="about-hero-pro__title">ABOUT</h1>
            <p className="about-hero-pro__lead">
              The BatStateU ACTION Center serves as the University's hub for disaster
              preparedness, training, risk reduction, and community-centered resilience
              initiatives.
            </p>
          </motion.div>

          <motion.div
            className="about-hero-pro__media"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <img src={heroImage} alt="BatStateU ACTION Center" />
            <div className="about-hero-pro__panel">
              The Center advances coordinated action in preparedness, response, education,
              and innovation for communities within and beyond the University.
            </div>
          </motion.div>
        </section>

        {/* ── Purpose ── */}
        <motion.section
          className="about-purpose-pro"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div className="about-purpose-pro__inner">
            <p className="about-purpose-pro__label">ACTION</p>
            <h2>Adaptive Capacity-building and Technology Innovation</h2>
            <p>for Occupational Hazards and Natural Disasters</p>
            </div>
          </motion.section>
        </div> {/* End about-top-wrapper */}

        {/* ── DARK WRAPPER ── */}
        <div className="about-dark-wrapper">
          {/* ── Aims ── */}
          <section className="about-aims-pro">
            <motion.div
              className="about-section-heading about-section-heading--light"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <p>Institutional Direction</p>
            <h2>
              The ACTION <span>Center Aims To</span>
            </h2>
          </motion.div>

          <motion.div
            className="about-aims-pro__grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {aimCards.map((item) => (
              <motion.article key={item.title} className="about-aim-pro-card" variants={fadeUp}>
                <div className="about-aim-pro-card__icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.article>
              ))}
            </motion.div>
          </section>
        </div> {/* End about-dark-wrapper */}

        {/* ── RED WRAPPER ── */}
        <div className="about-red-wrapper">
          {/* ── History ── */}
          <motion.section
            className="about-history-pro"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div className="about-section-heading about-section-heading--light">
            <p>Institutional Milestones</p>
            <h2>History and Recognition</h2>
          </div>

          <motion.div
            className="about-history-pro__timeline"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            <div className="about-history-pro__line" />

            {timelineItems.map((item) => (
              <motion.div key={item.title} className="about-history-pro__row" variants={fadeUp}>
                <div className="about-history-pro__marker" />

                <article className="about-history-pro__card">
                  <h3>{item.title}</h3>
                  <h4>{item.subtitle}</h4>
                  <p>{item.text}</p>

                  {item.quote && (
                    <div className="about-history-pro__quote">
                      <p>{item.quote}</p>
                    </div>
                  )}
                </article>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
        </div> {/* End about-red-wrapper */}

        {/* ── Facilities ── */}
        <motion.section
          className="facilities-pro"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div className="about-section-heading">
            <p>BatStateU</p>
            <h2>
              Our <span>Facilities</span>
            </h2>
          </div>

          <div className="facilities-pro__slider">
            <button type="button" className="facilities-pro__arrow" onClick={prevSlide}>
              <ChevronLeft size={22} />
            </button>

            <div className="facilities-pro__track">
              {visibleSlides.map((item) => (
                <article key={`${item.title}-${item.label}`} className="facility-pro-card">
                  <div className="facility-pro-card__image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="facility-pro-card__content">
                    <span className="facility-pro-card__tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <h4>{item.label}</h4>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <button type="button" className="facilities-pro__arrow" onClick={nextSlide}>
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="facilities-pro__dots">
            <span className={slideIndex === 0 ? 'active' : ''} />
            <span className={slideIndex === 2 ? 'active' : ''} />
          </div>

          <motion.div
            className="facilities-pro__features"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {featureCards.map((item) => (
              <motion.article key={item.title} className="facility-feature-card" variants={scaleIn}>
                <img src={item.image} alt={item.title} />
                <div className="facility-feature-card__overlay" />
                <div className="facility-feature-card__title">{item.title}</div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </>
  )
}