import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isActive, setIsActive] = useState(false)

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <span>Next.js Fullstack Demo</span>
        </div>
        <a
          role="button"
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarMenu"
          onClick={() => {
            setIsActive(!isActive)
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarMenu"
        className={`navbar-menu ${isActive ? 'is-active' : ''}`}
      >
        <div className="navbar-start">
          <Link href="/" className="navbar-item">
            Home
          </Link>
          <Link href="/devices" className="navbar-item">
            Devices
          </Link>
          <Link href="/about" className="navbar-item">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
