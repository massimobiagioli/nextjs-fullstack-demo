import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { useState } from 'react'
import { AuthInfo, signOut } from '../../libs/cognito/auth'

type NavbarProps = {
  authInfo?: AuthInfo
}

function logout() {
  signOut()
  Router.push('/')
}

export default function Navbar(props: NavbarProps) {
  const [isActive, setIsActive] = useState(false)
  const { asPath } = useRouter()

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <span className="is-size-5">Next.js Fullstack Demo</span>
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
          <Link
            href="/"
            className={'navbar-item' + (asPath === '/' ? ' is-active' : '')}
          >
            Home
          </Link>
          <Link
            href="/devices"
            className={
              'navbar-item' + (asPath === '/devices' ? ' is-active' : '')
            }
          >
            Devices
          </Link>
          <Link
            href="/about"
            className={
              'navbar-item' + (asPath === '/about' ? ' is-active' : '')
            }
          >
            About
          </Link>
        </div>

        <div className="navbar-end">
          {props.authInfo?.authenticated ? (
            <>
              <Link
                href="/userProfile"
                className={
                  'navbar-item' +
                  (asPath === '/userProfile' ? ' is-active' : '')
                }
              >
                <i className="fas fa-circle-user fa-2x mr-2"></i>
                {props.authInfo?.userInfo?.nickname}
              </Link>
              <div className="navbar-item">
                <button className="button is-light" onClick={logout}>
                  Logout
                </button>
              </div>
            </>
          ) : (
            <div className="navbar-item">
              <Link href="/login" className="button is-light">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
