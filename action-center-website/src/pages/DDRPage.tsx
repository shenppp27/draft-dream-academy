import { motion } from 'framer-motion'
import rdImg from '../assets/rd_logoz.png'
import aboutAnimateImg from '../assets/aboutanimate.jpg'
import dprImg from '../assets/dprimage.jpg'
import atlasImg from '../assets/altas.png'
import { FileText, Cpu, Globe2, Building2 } from 'lucide-react'
import Footer from '../components/Footer'
import { fadeUp, staggerContainer, slideRight, slideLeft, scaleIn } from '../animations'
import './DDRPage.css'

const solutions = [
  {
    image: rdImg,
    icon: <Cpu size={22} strokeWidth={2.2} />,
    title: 'WISER',
    subtitle: 'Wireless Integrated Solution for Emergency Response',
    text:
      'WISER is a wireless sensor network solution for disaster risk management composed of interconnected sensor nodes that gather and exchange data wirelessly. These nodes are strategically deployed in hazard-prone areas and equipped with various sensors and early warning systems to support emergency monitoring and response.',
  },
  {
    image: atlasImg,
    icon: <Globe2 size={22} strokeWidth={2.2} />,
    title: 'GUIDE',
    subtitle: 'GIS Utilization for Incidents, Disasters, and Emergencies',
    text:
      'GUIDE is a geospatial information system for disaster risk reduction that combines spatial data with hazard and vulnerability information to support decision-making in disaster-prone areas. It uses mapping, satellite imagery, and aerial data to analyze and visualize risk and disaster impacts.',
  },
  {
    image: aboutAnimateImg,
    icon: <Building2 size={22} strokeWidth={2.2} />,
    title: 'DIGITAL TWIN RESEARCH CENTER',
    subtitle: 'The Digital Twin Research Center is a proposed niche center in the region',
    text:
      'Focused on digital twin applications, this initiative explores the use of virtual replicas or simulations of physical environments to model and analyze potential disaster scenarios. It leverages real-time data, sensor networks, and advanced analytics to create dynamic digital representations of the physical world.',
  },
]

const vp = { once: true, margin: '-80px' as const }

export default function DDRPage() {
  return (
    <>
      <main className="ddr-page">

        {/* ── Hero ── */}
        <section className="ddr-hero">
          <div className="ddr-hero__container">
            <div className="ddr-top-space" />

            <div className="ddr-hero__content">
              <motion.h1
                className="ddr-hero__title"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                Intelligent <span>Action Center</span> for
                <br />
                Disaster Risk Reduction
              </motion.h1>

              <motion.p
                className="ddr-hero__lead"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                Advanced technology solutions for disaster preparedness,
                response, and recovery. Protecting communities through
                innovation and data-driven insights.
              </motion.p>

              <motion.div
                className="ddr-hero__image-wrap"
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={vp}
              >
                <img src={dprImg} alt="Disaster Risk Reduction" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Dashboard ── */}
        <motion.section
          className="ddr-dashboard"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={vp}
        >
          <div className="ddr-dashboard__container">
            <h2 className="ddr-dashboard__title">
              Data-Driven <span>Dashboard</span>
            </h2>

            <div className="ddr-dashboard__card">
              <div className="ddr-dashboard__icon">
                <FileText size={22} strokeWidth={2.2} />
              </div>

              <p>
                The data-driven dashboard provides information about major
                incidents brought about by various natural and human-induced
                hazards, based on reports from various partners such as Disaster
                Risk Reduction and Management Offices, line agencies of the
                government, LGUs, and NGOs.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── Solutions ── */}
        <section className="ddr-solutions">
          <div className="ddr-solutions__container">
            <motion.div
              className="ddr-section-heading"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              <h2>
                Our technology <span>Solutions</span>
              </h2>
              <div className="ddr-section-heading__line" />
            </motion.div>

            <motion.div
              className="ddr-solutions__list"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={vp}
            >
              {solutions.map((item, index) => (
                <motion.article
                  key={item.title}
                  className="ddr-solution-card"
                  variants={index % 2 === 0 ? slideRight : slideLeft}
                >
                  <div className="ddr-solution-card__icon">{item.icon}</div>

                  <div className="ddr-solution-card__content">
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                    <p>{item.text}</p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}