import { Routes, Route, Outlet } from 'react-router-dom'
import Navbars from './components/Navbars'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function MainLayout() {
  return (
    <div className="app-shell">
      <Navbars />
      <Outlet />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  )
}