import heroImage from '../assets/hero.png'
import { FileText, Cpu, Globe2, Building2 } from 'lucide-react'
import Footer from '../components/Footer'
import './DDRPage.css'

const solutions = [
  {
    icon: <Cpu size={22} strokeWidth={2.2} />,
    title: 'WISER',
    subtitle: 'Wireless Integrated Solution for Emergency Response',
    text:
      'WISER is a wireless sensor network solution for disaster risk management composed of interconnected sensor nodes that gather and exchange data wirelessly. These nodes are strategically deployed in hazard-prone areas and equipped with various sensors and early warning systems to support emergency monitoring and response.',
  },
  {
    icon: <Globe2 size={22} strokeWidth={2.2} />,
    title: 'GUIDE',
    subtitle: 'GIS Utilization for Incidents, Disasters, and Emergencies',
    text:
      'GUIDE is a geospatial information system for disaster risk reduction that combines spatial data with hazard and vulnerability information to support decision-making in disaster-prone areas. It uses mapping, satellite imagery, and aerial data to analyze and visualize risk and disaster impacts.',
  },
  {
    icon: <Building2 size={22} strokeWidth={2.2} />,
    title: 'DIGITAL TWIN RESEARCH CENTER',
    subtitle: 'The Digital Twin Research Center is a proposed niche center in the region',
    text:
      'Focused on digital twin applications, this initiative explores the use of virtual replicas or simulations of physical environments to model and analyze potential disaster scenarios. It leverages real-time data, sensor networks, and advanced analytics to create dynamic digital representations of the physical world.',
  },
]

export default function DDRPage() {
  return (
    <>
      <main className="ddr-page">
        <section className="ddr-hero">
          <div className="ddr-hero__container">
            <div className="ddr-top-space" />

            <div className="ddr-hero__content">
              <h1 className="ddr-hero__title">
                Intelligent <span>Action Center</span> for
                <br />
                Disaster Risk Reduction
              </h1>

              <p className="ddr-hero__lead">
                Advanced technology solutions for disaster preparedness,
                response, and recovery. Protecting communities through
                innovation and data-driven insights.
              </p>

              <div className="ddr-hero__image-wrap">
                <img src={heroImage} alt="Disaster Risk Reduction" />
              </div>
            </div>
          </div>
        </section>

        <section className="ddr-dashboard">
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
        </section>

        <section className="ddr-solutions">
          <div className="ddr-solutions__container">
            <div className="ddr-section-heading">
              <h2>
                Our technology <span>Solutions</span>
              </h2>
              <div className="ddr-section-heading__line" />
            </div>

            <div className="ddr-solutions__list">
              {solutions.map((item) => (
                <article key={item.title} className="ddr-solution-card">
                  <div className="ddr-solution-card__icon">{item.icon}</div>

                  <div className="ddr-solution-card__content">
                    <h3>{item.title}</h3>
                    <h4>{item.subtitle}</h4>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}