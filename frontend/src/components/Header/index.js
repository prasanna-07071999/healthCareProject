import { Link } from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Health Care</h1>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/doctors" className="nav-link">Doctors</Link>
      </nav>
    </header>
  )
}

export default Header
