import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import { fadeUp, staggerContainer, scaleIn } from '../animations'
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
    id: 1,
    icon: <ShieldCheck size={22} strokeWidth={2} />,
    boldText: 'Protect',
    text: ' whatever economic gains people and communities have garnered through formal education and research using science and technology.',
  },
  {
    id: 2,
    icon: <Users size={22} strokeWidth={2} />,
    boldText: 'Take a pro-active',
    text: ' role in making people and communities safer and more resilient to save their lives and properties in times of natural calamities through professional education, skills training and innovative research.',
  },
  {
    id: 3,
    icon: <Building2 size={22} strokeWidth={2} />,
    boldText: 'Make local',
    text: ' leaders and communities more aware of the dangers of natural hazards and be prepared when such disasters occur.',
  },
  {
    id: 4,
    icon: <FileSearch size={22} strokeWidth={2} />,
    boldText: 'Inform people',
    text: ' and communities about all possible natural hazards in their areas, the warning information and the suggested actions to take during these events.',
  },
]

const timelineItems: {
  id: number
  title: string
  subtitle: string
  text: string
  quote?: string
}[] = [
    {
      id: 1,
      title: 'Establishment of BatStateU ACTION Center',
      subtitle: 'Board Resolution No. 482-A, S.2016',
      text: "The Board of Regents approved the creation of the BatStateU ACTION Center on November 19, 2016, alongside the approval of the University's Disaster and Risk Reduction Management Plan.",
    },
    {
      id: 2,
      title: 'National Recognition',
      subtitle: 'Republic Act 11694',
      text: 'An Act Declaring the Batangas State University as The National Engineering University and appropriating Funds therefor.',
      quote:
        'Section 3 (j): "Provide an avenue for the professional advancement of Disaster Risk Management (DRM) managers and practitioners by offering academic programs in DRM and contribute in ensuring a resilient community through the Adaptive Capacity-building and Technology Innovation for Occupational Health and Natural Disaster (ACTION) Center endorsed by the Regional Development Council-CALABARZON as National Center for Disaster Risk Reduction and Management, and Climate Change Adaptation Education and Research."',
    },
  ]

const facilitySlides = [
  {
    id: 1,
    className: 'facility-card__image--front-desk',
    tag: 'Front Desk',
    buildingName: 'Command Center Building',
    roomLabel: 'FRONT DESK',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    className: 'facility-card__image--command-room',
    tag: 'Command and Control Room',
    buildingName: 'Command Center Building',
    roomLabel: 'COMMAND AND CONTROL ROOM',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    className: 'facility-card__image--operations',
    tag: 'Operations Area',
    buildingName: 'Command Center Building',
    roomLabel: 'OPERATIONS AREA',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 4,
    className: 'facility-card__image--monitoring',
    tag: 'Monitoring Area',
    buildingName: 'Command Center Building',
    roomLabel: 'MONITORING AREA',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
]

const featureCards = [
  { id: 1, className: 'about-feature-card--history', title: 'HISTORY' },
  { id: 2, className: 'about-feature-card--org', title: 'ORGANIZATIONAL STRUCTURE' },
  { id: 3, className: 'about-feature-card--awards', title: 'AWARDS AND RECOGNITION' },
]

const vp = { once: true, margin: '-80px' as const }

export default function AboutPage() {
  const [slideIndex, setSlideIndex] = useState(0)

  const nextSlide = () =>
    setSlideIndex((prev) => (prev + 2) % facilitySlides.length)
  const prevSlide = () =>
    setSlideIndex((prev) => (prev - 2 + facilitySlides.length) % facilitySlides.length)

  const visibleSlides = useMemo(
    () => [
      facilitySlides[slideIndex],
      facilitySlides[(slideIndex + 1) % facilitySlides.length],
    ],
    [slideIndex],
  )

  return (
    <>
      <main className="about-page">

        {/* ─── TOP GRADIENT (white → red) ─── */}
        <div className="about-top-bg">
          <section className="about-hero">
            <motion.h1
              className="about-hero__title"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              ABOUT
            </motion.h1>

            <motion.div
              className="about-hero__card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <div className="about-hero__image" />
              <div className="about-hero__panel">
                The BatStateU ACTION Center is the University's research and training arm for
                disaster response and training, and caters to stakeholders and communities both
                internal and external to the University.
              </div>
            </motion.div>
          </section>

          {/* ─── ACTION Acronym ─── */}
          <section className="about-action">
            <motion.div
              className="about-action__inner"
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <div className="about-action__pill">ACTION</div>
              <h2 className="about-action__subtitle">
                Adaptive Capacity-building and Technology Innovation
              </h2>
              <p className="about-action__desc">for Occupational Hazards and Natural Disasters</p>
            </motion.div>
          </section>
        </div>

        {/* ─── DARK NAVY  (aims) ─── */}
        <div className="about-dark-bg">
          <section className="about-aims">
            <motion.h2
              className="about-aims__heading"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              The <strong>ACTION</strong>{' '}
              <span>Center Aims To:</span>
            </motion.h2>

            <motion.div
              className="about-aims__grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              {aimCards.map((card) => (
                <motion.article key={card.id} className="about-aim-card" variants={fadeUp}>
                  <div className="about-aim-card__icon">{card.icon}</div>
                  <p>
                    <strong>{card.boldText}</strong>
                    {card.text}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </section>
        </div>

        {/* ─── MAUVE / HISTORY ─── */}
        <div className="about-history-bg">
          <section className="about-history">
            <motion.div
              className="about-history__timeline"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <div className="about-history__line" />

              {timelineItems.map((item) => (
                <motion.div key={item.id} className="about-history__row" variants={fadeUp}>
                  <div className="about-history__marker" />
                  <article className="about-history__card">
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                    <p>{item.text}</p>
                    {item.quote && (
                      <div className="about-history__quote">
                        <p>{item.quote}</p>
                      </div>
                    )}
                  </article>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>

        {/* ─── FACILITIES (white) ─── */}
        <motion.section
          className="about-facilities"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div className="about-facilities__header">
            <p>— BatStateU</p>
            <h2>Our <span>Facilities</span></h2>
          </div>

          <div className="about-facilities__slider">
            <button type="button" className="about-facilities__arrow" onClick={prevSlide}>
              <ChevronLeft size={22} />
            </button>

            <div className="about-facilities__track">
              {visibleSlides.map((item) => (
                <article key={item.id} className="facility-card">
                  <div className={`facility-card__image ${item.className}`} />
                  <div className="facility-card__body">
                    <span className="facility-card__tag">{item.tag}</span>
                    <h3>{item.buildingName}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <button type="button" className="about-facilities__arrow" onClick={nextSlide}>
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="about-facilities__dots">
            <span className={slideIndex === 0 ? 'active' : ''} />
            <span className={slideIndex === 2 ? 'active' : ''} />
          </div>

          {/* ─── Feature cards (History / Org / Awards) ─── */}
          <motion.div
            className="about-features"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {featureCards.map((card) => (
              <motion.article key={card.id} className={`about-feature-card ${card.className}`} variants={scaleIn}>
                <div className="about-feature-card__banner">{card.title}</div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>
      </main>

      <Footer />
    </>
  )
}