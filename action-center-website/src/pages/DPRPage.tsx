import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import heroImage from '../assets/hero.png'
import {
  ShieldAlert,
  GraduationCap,
  Presentation,
  Building2,
  ChevronLeft,
  ChevronRight,
  Phone,
  BookOpen,
} from 'lucide-react'
import Footer from '../components/Footer'
import { fadeUp, staggerContainer, slideRight, slideLeft, scaleIn } from '../animations'
import './DPRPage.css'

const programItems = [
  {
    number: '1',
    icon: <GraduationCap size={18} strokeWidth={2.2} />,
    title: 'TRAININGS',
    text: 'Structured learning sessions that strengthen preparedness, response capability, and safety awareness across the university community.',
    button: 'More Trainings',
  },
  {
    number: '2',
    icon: <Presentation size={18} strokeWidth={2.2} />,
    title: 'SEMINARS',
    text: 'Informative discussions that build awareness, promote hazard understanding, and support campus-wide disaster readiness.',
    button: 'More Seminars',
  },
  {
    number: '3',
    icon: <Building2 size={18} strokeWidth={2.2} />,
    title: 'BENCHMARKING ACTIVITIES',
    text: 'Institutional learning activities that help improve emergency preparedness systems, protocols, and response practices.',
    button: 'More Benchmarking',
  },
]

const campusCards = [
  'PABLO BORBON',
  'ALANGILAN',
  'MALVAR',
  'NASUGBU',
  'LIPA',
  'BALAYAN',
  'LEMERY',
  'SAN JUAN',
  'ROSARIO',
  'LOBO',
  'MABINI',
]

const facilitySlides = [
  {
    image: heroImage,
    tag: 'Front Desk',
    title: 'Command Center Building',
    label: 'FRONT DESK',
    text: 'A receiving and coordination point that supports visitor assistance, communication flow, and operational guidance.',
  },
  {
    image: heroImage,
    tag: 'Command and Control Room',
    title: 'Command Center Building',
    label: 'COMMAND AND CONTROL ROOM',
    text: 'A centralized monitoring space for coordination, situational awareness, and response support during emergencies.',
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
    text: 'A dedicated area for observation, information tracking, and incident monitoring activities.',
  },
]

const resourceCards = [
  {
    icon: <Phone size={20} strokeWidth={2.2} />,
    title: 'EMERGENCY CONTACTS',
    subtitle: 'OF BATSTATEU CAMPUSES',
    tag: 'EMERGENCY CONTACT',
  },
  {
    icon: <BookOpen size={20} strokeWidth={2.2} />,
    title: 'MULTI-HAZARD',
    subtitle: 'EMERGENCY PREPAREDNESS GUIDE',
    tag: 'MULTI HAZARD',
  },
]

const vp = { once: true, margin: '-80px' as const }

export default function DPRPage() {
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
      <main className="dpr-page">

        {/* ── Hero ── */}
        <section className="dpr-hero">
          <div className="dpr-hero__container">
            <motion.div
              className="dpr-hero__text"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <p className="dpr-hero__eyebrow">BatStateU ACTION Center</p>
              <h1 className="dpr-hero__title">
                DISASTER PREPAREDNESS
                <br />
                AND RESPONSE
              </h1>
            </motion.div>

            <motion.div
              className="dpr-hero__image-wrap"
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <img src={heroImage} alt="Disaster Preparedness and Response" />
              <div className="dpr-hero__image-badge">
                <ShieldAlert size={18} strokeWidth={2.2} />
                <span>Preparedness and Protection</span>
              </div>
            </motion.div>

            <motion.div
              className="dpr-hero__description"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <p>
                Disaster Preparedness and Response refers to a comprehensive set of
                strategies, plans, and actions aimed at reducing the impact of disasters,
                ensuring effective emergency response, and facilitating recovery efforts.
                It involves assessing potential risks, developing contingency plans,
                training communities and responders, and equipping individuals and
                organizations with the knowledge and resources needed to handle
                emergencies efficiently.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Programs ── */}
        <section className="dpr-programs">
          <div className="dpr-programs__container">
            <motion.div
              className="dpr-programs__media"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <img src={heroImage} alt="Training and preparedness activities" />
            </motion.div>

            <motion.div
              className="dpr-programs__list"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              {programItems.map((item) => (
                <motion.article key={item.number} className="dpr-program-card" variants={fadeUp}>
                  <div className="dpr-program-card__number">{item.number}</div>

                  <div className="dpr-program-card__content">
                    <div className="dpr-program-card__icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <button type="button">{item.button}</button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Drills ── */}
        <motion.section
          className="dpr-drills"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div className="dpr-drills__container">
            <div className="dpr-drills__heading">
              <h2>
                CAMPUS <span>DRILLS</span>
              </h2>
              <p>Emergency Preparedness Overview</p>
            </div>

            <div className="dpr-drills__notice">
              Next scheduled drill: NASUGBU Campus - Fire Safety Drill (Tomorrow 2:00 PM)
            </div>

            <div className="dpr-drills__stats">
              <div className="dpr-drills__stat">
                <strong>11</strong>
                <span>TOTAL CAMPUSES</span>
              </div>
              <div className="dpr-drills__stat">
                <strong>23</strong>
                <span>TOTAL DRILLS</span>
              </div>
              <div className="dpr-drills__stat">
                <strong>16</strong>
                <span>TOTAL MONTH</span>
              </div>
            </div>

            <motion.div
              className="dpr-drills__grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              {campusCards.map((campus, index) => (
                <motion.article key={campus} className="dpr-drill-card" variants={scaleIn}>
                  {index === 0 && (
                    <div className="dpr-drill-card__image">
                      <img src={heroImage} alt={campus} />
                    </div>
                  )}
                  <div className="dpr-drill-card__label">{campus}</div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* ── Facilities ── */}
        <motion.section
          className="dpr-facilities"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div className="dpr-section-heading">
            <p>BatStateU</p>
            <h2>
              Our <span>Facilities</span>
            </h2>
          </div>

          <div className="dpr-facilities__slider">
            <button type="button" className="dpr-facilities__arrow" onClick={prevSlide}>
              <ChevronLeft size={22} />
            </button>

            <div className="dpr-facilities__track">
              {visibleSlides.map((item) => (
                <article key={`${item.title}-${item.label}`} className="dpr-facility-card">
                  <div className="dpr-facility-card__image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="dpr-facility-card__content">
                    <span className="dpr-facility-card__tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <h4>{item.label}</h4>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <button type="button" className="dpr-facilities__arrow" onClick={nextSlide}>
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="dpr-facilities__dots">
            <span className={slideIndex === 0 ? 'active' : ''} />
            <span className={slideIndex === 2 ? 'active' : ''} />
          </div>
        </motion.section>

        {/* ── Resources ── */}
        <motion.section
          className="dpr-resources"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div className="dpr-resources__grid">
            {resourceCards.map((item) => (
              <motion.article key={item.title} className="dpr-resource-card" variants={slideLeft}>
                <div className="dpr-resource-card__bg" />
                <div className="dpr-resource-card__content">
                  <div className="dpr-resource-card__icon">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                  <span>{item.tag}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </main>

      <Footer />
    </>
  )
}