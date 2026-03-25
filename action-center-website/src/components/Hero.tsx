import './Hero.css'
import universitySeal from '../assets/batstate-u-logo.png'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-contact-bar">
        <span className="hero-contact-icon">📞</span>
        <span>+63 43 980-0385</span>
      </div>

      <img
        src={universitySeal}
        alt="University Seal"
        className="hero-logo-image left-logo"
      />

      <div className="cloud cloud-one" />
      <div className="cloud cloud-two" />

      <div className="campus-art">
        <div className="building building-left" />
        <div className="building building-center" />
        <div className="building building-right" />
        <div className="tree tree-left" />
        <div className="tree tree-center" />
        <div className="tree tree-right" />
        <div className="vehicle" />
      </div>
    </section>
  )
}