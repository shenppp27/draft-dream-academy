import './Footer.css'
import batstateuLogo from '../assets/batstate-u-logo.png'
import actionLogo from '../assets/actioncenter-logo-enhance.png'

export default function Footer() {
  return (
    <footer className="action-footer">
      <div className="action-footer__container">
        <div className="action-footer__logos">
          <img
            src={batstateuLogo}
            alt="BatStateU Logo"
            className="action-footer__logo action-footer__logo--rect"
          />

          <img
            src={actionLogo}
            alt="ACTION Center Logo"
            className="action-footer__logo action-footer__logo--round"
          />
        </div>

        <div className="action-footer__column">
          <h3 className="action-footer__title">CONTACT US</h3>

          <div className="action-footer__item">
            <span className="action-footer__icon">☎</span>
            <span className="action-footer__text">+63 43 980-0385</span>
          </div>

          <div className="action-footer__item">
            <span className="action-footer__icon">✉</span>
            <span className="action-footer__text">
              actioncenter.central@g.batstate-u.edu.ph
            </span>
          </div>

          <div className="action-footer__item">
            <span className="action-footer__icon">f</span>
            <span className="action-footer__text">ACTION Center - BatStateU</span>
          </div>

          <div className="action-footer__item">
            <span className="action-footer__icon">🌐</span>
            <span className="action-footer__text">actioncenter.batstateu.edu.ph</span>
          </div>
        </div>

        <div className="action-footer__column">
          <h3 className="action-footer__title">ADDRESS</h3>

          <div className="action-footer__item action-footer__item--top">
            <span className="action-footer__icon">📍</span>
            <span className="action-footer__text">
              Miguel Malvar Building, BatStateU - TNEU, Pablo Borbon, Rizal Avenue,
              Batangas City, 4200
            </span>
          </div>
        </div>

        <div className="action-footer__stats">
          <div className="action-footer__stats-group">
            <p>Total Visitors: 2356</p>
            <p>Total Views: 3080</p>
          </div>

          <div className="action-footer__stats-group">
            <p>Visitors Today: 0</p>
            <p>Views Today: 0</p>
          </div>
        </div>
      </div>
    </footer>
  )
}