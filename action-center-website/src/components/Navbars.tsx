import './Navbars.css'

const navItems = ['HOME', 'ABOUT', 'DPR', 'IACT4DRR', 'DREAM ACADEMY']

export default function Navbars() {
  return (
    <header className="navbar">
      <div className="brand-pill">BatStateU</div>

      <nav className="nav-links">
        {navItems.map((item) => (
          <a key={item} href="#" className="nav-link">
            {item}
          </a>
        ))}
      </nav>
    </header>
  )
}