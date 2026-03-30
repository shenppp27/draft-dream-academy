import './Navbars.css'
import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'DPR', href: '/dpr' },
  { label: 'IACT4DRR', href: '/ddr' },
  { label: 'DREAM ACADEMY', href: '/dream-academy' },
]

export default function Navbars() {
  return (
    <header className="navbar">
      <NavLink to="/" className="brand-pill">
        BatStateU
      </NavLink>

      <nav className="nav-links">
        {navItems.map((item) =>
          item.href.startsWith('/') ? (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ) : (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ),
        )}
      </nav>
    </header>
  )
}