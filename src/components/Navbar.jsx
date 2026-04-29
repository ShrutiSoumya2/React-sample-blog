import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext.jsx'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/bollywood', label: 'Bollywood' },
  { to: '/technology', label: 'Technology' },
  { to: '/hollywood', label: 'Hollywood' },
  { to: '/fitness', label: 'Fitness' },
  { to: '/food', label: 'Food' },
]

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <>
    <div>
      <h1>SP</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark 🌙" : "Light ☀️"}
      </button>
    </div>
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@500&display=swap');

        :root {
          --peach: #F9C9A8;
          --peach-light: #FDE8D8;
          --peach-deep: #F0A882;
          --lavender: #C8B8E8;
          --lavender-light: #EAE4F7;
          --lavender-deep: #A899D0;
          --blush: #F2D0D8;
          --text-dark: #3D3450;
          --text-mid: #6B5F7A;
          --text-soft: #9B8FAA;
          --white-glass: rgba(255, 255, 255, 0.72);
          --shadow-soft: 0 4px 32px rgba(180, 160, 200, 0.18);
          --shadow-hover: 0 8px 40px rgba(180, 160, 200, 0.28);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .navbar {
          position: sticky;
          top: 0;
          z-index: 1000;
          font-family: 'DM Sans', sans-serif;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar-inner {
          background: var(--white-glass);
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-bottom: 1.5px solid rgba(200, 184, 232, 0.25);
          box-shadow: var(--shadow-soft);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar-inner.scrolled {
          box-shadow: var(--shadow-hover);
          border-bottom-color: rgba(200, 184, 232, 0.4);
        }

        .navbar-container {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 28px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo */
        .navbar-logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.35rem;
          font-weight: 500;
          color: var(--text-dark);
          text-decoration: none;
          letter-spacing: 0.02em;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: opacity 0.2s;
        }
        .navbar-logo:hover { opacity: 0.75; }
        .logo-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--peach-deep), var(--lavender-deep));
          display: inline-block;
          animation: pulse-dot 2.5s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.35); opacity: 0.7; }
        }

        /* Desktop nav links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
        }

        .nav-link {
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-mid);
          padding: 8px 14px;
          border-radius: 100px;
          position: relative;
          transition: color 0.25s ease, background 0.25s ease, transform 0.2s ease;
          letter-spacing: 0.015em;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 60%;
          height: 2px;
          border-radius: 2px;
          background: linear-gradient(90deg, var(--peach-deep), var(--lavender-deep));
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link:hover {
          color: var(--text-dark);
          background: linear-gradient(135deg, var(--peach-light), var(--lavender-light));
          transform: translateY(-1px);
        }
        .nav-link:hover::after { transform: translateX(-50%) scaleX(1); }

        .nav-link.active {
          color: var(--text-dark);
          background: linear-gradient(135deg, var(--peach-light), var(--lavender-light));
          font-weight: 600;
        }
        .nav-link.active::after { transform: translateX(-50%) scaleX(1); }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 4px;
          border-radius: 10px;
          transition: background 0.2s;
        }
        .hamburger:hover {
          background: var(--lavender-light);
        }
        .hamburger span {
          display: block;
          height: 2px;
          border-radius: 2px;
          background: var(--text-mid);
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }
        .hamburger span:nth-child(1) { width: 22px; }
        .hamburger span:nth-child(2) { width: 16px; }
        .hamburger span:nth-child(3) { width: 22px; }

        .hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
          width: 22px;
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0; transform: scaleX(0);
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
          width: 22px;
        }

        /* Mobile drawer */
        .mobile-menu {
          position: fixed;
          top: 64px;
          left: 0; right: 0;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(20px);
          border-bottom: 1.5px solid rgba(200, 184, 232, 0.3);
          box-shadow: 0 16px 48px rgba(180, 160, 200, 0.22);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.35s ease;
          opacity: 0;
          z-index: 999;
        }
        .mobile-menu.open {
          max-height: 480px;
          opacity: 1;
        }

        .mobile-links {
          list-style: none;
          padding: 12px 20px 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mobile-link {
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 1rem;
          font-weight: 500;
          color: var(--text-mid);
          padding: 13px 18px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: background 0.22s ease, color 0.22s ease, transform 0.2s ease;
          letter-spacing: 0.01em;
        }
        .mobile-link:hover, .mobile-link.active {
          background: linear-gradient(135deg, var(--peach-light), var(--lavender-light));
          color: var(--text-dark);
          transform: translateX(4px);
        }
        .mobile-link-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--peach-deep), var(--lavender-deep));
          flex-shrink: 0;
          opacity: 0.6;
          transition: opacity 0.2s;
        }
        .mobile-link:hover .mobile-link-dot,
        .mobile-link.active .mobile-link-dot { opacity: 1; }

        /* Backdrop */
        .mobile-backdrop {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(60, 45, 80, 0.12);
          z-index: 998;
          animation: fadeIn 0.25s ease;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .mobile-backdrop { display: block; }
        }
      `}</style>

      <nav className="navbar">
        <div className={`navbar-inner${scrolled ? ' scrolled' : ''}`}>
          <div className="navbar-container">
            {/* Logo */}
            <Link to="/" className="navbar-logo">
              <span className="logo-dot" />
              Pulse
            </Link>

            {/* Desktop links */}
            <ul className="nav-links">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className={`nav-link${location.pathname === to ? ' active' : ''}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Hamburger */}
            <button
              className={`hamburger${isOpen ? ' open' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div className={`mobile-menu${isOpen ? ' open' : ''}`} role="navigation">
          <ul className="mobile-links">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`mobile-link${location.pathname === to ? ' active' : ''}`}
                >
                  <span className="mobile-link-dot" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Backdrop — closes menu on outside tap */}
      {isOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar