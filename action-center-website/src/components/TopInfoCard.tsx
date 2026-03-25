import './TopInfoCard.css'

export default function TopInfoCard() {
  return (
    <aside className="top-info-card">
      <div className="top-info-date">FRIDAY, JUNE20</div>

      <div className="top-info-body">
        <div className="top-info-time">8:30</div>

        <div className="top-info-weather">
          <span>22°C ☼</span>
          <strong>BATANGAS</strong>
        </div>
      </div>

      <div className="top-info-logo">ACTION</div>
    </aside>
  )
}