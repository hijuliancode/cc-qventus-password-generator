import { Link, NavLink } from "react-router-dom"

import styles from './header-component.module.css'
import LogoQventus from '@/assets/design/logo-qventus.svg'
import { getNavLinkClass } from "./header-component.utils"

export const Header = () => {

  const navItems = [
    {
      name: 'Dashboard',
      path: '#dashboard',
      isDummy: true,
    },
    {
      name: 'Passwords generator',
      path: '/',
    },
    {
      name: 'Password list',
      path: '/passwords-list',
    },
    {
      name: 'My account',
      path: '#my-account',
      isDummy: true,
    },
  ]

  return (
    <header className={styles.Header}>
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          className="h-8 object-cover max-w-full"
          src={LogoQventus}
          alt="Qventus Logo"
        />
      </Link>

      {/* Navigation */}
      <nav>
        <ul className="flex">
          {navItems && navItems.map((navItem, index) => (
            <li key={index}>
              {navItem.isDummy
                ? <Link
                  className={styles.NavLink}
                  to={navItem.path}
                >
                  {navItem.name}
                </Link>
                : <NavLink
                  className={(navData) => getNavLinkClass(navData.isActive)}
                  to={navItem.path}
                >
                  {navItem.name}
                </NavLink>
              }
            </li>
          ))}

        </ul>
      </nav>
    </header>
  )
}
