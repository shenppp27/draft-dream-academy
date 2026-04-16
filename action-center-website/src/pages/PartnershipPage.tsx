import { motion } from 'framer-motion'
import './PartnershipPage.css'
import Footer from '../components/Footer'
import { fadeUp, staggerContainer, scaleIn } from '../animations'

const vp = { once: true, margin: '-80px' as const }

export default function PartnershipPage() {
  return (
    <div className="page-wrapper pt-page">
      <main className="pt-main">
        
        {/* HERO SECTION */}
        <section className="pt-hero">
          <motion.h1 
            className="pt-hero__title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            PARTNERSHIP
          </motion.h1>
          <motion.div
            className="pt-hero__image-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
          >
            {/* Background image set via CSS */}
          </motion.div>
        </section>

        {/* KOMUNIDAD & PHILDEV SECTION */}
        <section className="pt-section">
          <motion.div className="pt-section__header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <h2>Partnership <span>with Komunidad</span><br/>and PhilDev</h2>
            <div className="pt-section__underline"></div>
          </motion.div>
          <motion.div className="pt-gallery pt-gallery--3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={vp}>
            <motion.div className="pt-gallery__img pt-gallery__img--kom1" variants={scaleIn}></motion.div>
            <motion.div className="pt-gallery__img pt-gallery__img--kom2" variants={scaleIn}></motion.div>
            <motion.div className="pt-gallery__img pt-gallery__img--kom3" variants={scaleIn}></motion.div>
          </motion.div>
          <motion.div className="pt-info-box" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <p>MOA Signing with the Komunidad Global Services and Operations Philippines Inc.<br/>and The Philippine Development Foundation (PhilDev)<br/>9 January 2024 | Batangas State University Pablo Borbon Campus, Batangas City</p>
          </motion.div>
        </section>

        {/* PDRF & CRS SECTION */}
        <section className="pt-section">
          <motion.div className="pt-section__header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <h2>Partnership with <span>PDRF and CRS</span></h2>
            <div className="pt-section__underline"></div>
          </motion.div>
          
          <motion.div className="pt-gallery pt-gallery--2" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={vp}>
            <motion.div className="pt-gallery__img pt-gallery__img--pdrf1" variants={scaleIn}></motion.div>
            <motion.div className="pt-gallery__img pt-gallery__img--pdrf2" variants={scaleIn}></motion.div>
          </motion.div>
          
          <motion.div className="pt-gallery pt-gallery--3" style={{marginTop: '24px'}} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={vp}>
            <motion.div className="pt-gallery__img pt-gallery__img--pdrf3" variants={scaleIn}></motion.div>
            <motion.div className="pt-gallery__img pt-gallery__img--pdrf4" variants={scaleIn}></motion.div>
            <motion.div className="pt-gallery__img pt-gallery__img--pdrf5" variants={scaleIn}></motion.div>
          </motion.div>

          <motion.div className="pt-info-box" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <p>MOA Signing with the Philippine Disaster Resilience Foundation (PDRF) and Catholic Relief Services (CRS)<br/>20 February 2024 | Batangas State University Pablo Borbon Campus, Batangas City</p>
          </motion.div>
        </section>

        {/* GIS CENTER SECTION */}
        <section className="pt-section pt-section--gis">
          <motion.div className="pt-section__header pt-section__header--left" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <h2>GIS Applications <span>Development</span> Center</h2>
            <h3>Services Offered</h3>
            <div className="pt-section__underline pt-section__underline--left"></div>
          </motion.div>

          <div className="pt-gis-split">
            <motion.div className="pt-gis-split__left" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
              <div className="pt-gis-split__image"></div>
            </motion.div>
            
            <motion.div className="pt-gis-split__right" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={vp}>
              {[
                { n: '1', text: 'Data Acquisition Drone Imagery Aerial Photography' },
                { n: '2', text: 'Consultation Project, Research and/or Study Assessment' },
                { n: '3', text: 'GIS Training Online Training Face-to-face Training' },
                { n: '4', text: 'Data Processing Data Analysis Map Creation' },
                { n: '5', text: 'Others Map Printing Image Interpretation' }
              ].map((item) => (
                <motion.div key={item.n} className="pt-service-item" variants={slideLeft}>
                  <div className="pt-service-item__number">{item.n}</div>
                  <div className="pt-service-item__text">{item.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* EQUIPMENT SECTION */}
        <section className="pt-section pt-section--dark">
          <div className="pt-equipment-container">
            <motion.h2 className="pt-equipment-title" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
              Equipment
            </motion.h2>
            <motion.div className="pt-equipment-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={vp}>
              {[
                { cls: 'eq1', label: 'Workstations with licensed ArcGIS Online and QGIS' },
                { cls: 'eq2', label: 'Large -format Printer HP DesignJet T830' },
                { cls: 'eq3', label: 'Drone- DJI Mavic Air 2' },
                { cls: 'eq4', label: 'GPS handheld devices' }
              ].map((eq, i) => (
                <motion.div key={i} className="pt-eq-card" variants={fadeUp}>
                  <div className={`pt-eq-card__image pt-eq-card__image--${eq.cls}`}></div>
                  <div className="pt-eq-card__footer">{eq.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 5-DAY BASIC GIS TRAINING */}
        <section className="pt-section">
          <motion.div className="pt-section__header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <h2>5-Day Basic <span>GIS Training</span> with<br/>BatStateU-TNEU</h2>
            <div className="pt-section__underline"></div>
          </motion.div>

          <motion.div className="pt-gallery pt-gallery--3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={vp}>
            <motion.div className="pt-gallery__img pt-gallery__img--basic1" variants={scaleIn}></motion.div>
            <motion.div className="pt-gallery__img pt-gallery__img--basic2" variants={scaleIn}></motion.div>
            <motion.div className="pt-gallery__img pt-gallery__img--basic3" variants={scaleIn}></motion.div>
          </motion.div>

          <motion.div className="pt-info-box" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <p>5-Day Basic GIS Training with BatStateU – GIS Applications Development Center<br/>3-7 July 2023 | STEER Hub, Batangas State University TNEU – Alangilan</p>
          </motion.div>
        </section>

        {/* 5-DAY ADVANCED GIS TRAINING */}
        <section className="pt-section">
          <motion.div className="pt-section__header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <h2>5-Day Advanced <span>GIS Training</span><br/>with BatStateU-TNEU</h2>
            <div className="pt-section__underline"></div>
          </motion.div>

          <motion.div className="pt-gallery pt-gallery--3" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={vp}>
            <motion.div className="pt-gallery__img pt-gallery__img--adv1" variants={scaleIn}></motion.div>
            <motion.div className="pt-gallery__img pt-gallery__img--adv2" variants={scaleIn}></motion.div>
            <motion.div className="pt-gallery__img pt-gallery__img--adv3" variants={scaleIn}></motion.div>
          </motion.div>

          <motion.div className="pt-info-box" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <p>5-Day Advanced GIS Training with BatStateU – GIS Applications Development Center<br/>6-10 November 2023 | STEER Hub, Batangas State University TNEU – Alangilan</p>
          </motion.div>
        </section>

        {/* OUR PARTNERS */}
        <section className="pt-section pt-section--partners">
          <motion.div className="pt-section__header" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <h2 className="pt-partners-title">Our <span>Partners</span></h2>
          </motion.div>

          <motion.div className="pt-partners-logos" variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
            <div className="pt-partners-logo pt-partners-logo--kom"></div>
            <div className="pt-partners-logo pt-partners-logo--pdrf"></div>
            <div className="pt-partners-logo pt-partners-logo--crs"></div>
          </motion.div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
