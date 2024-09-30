import './NavHeader.css'
import { NavLink } from 'react-router-dom'

const NavHeader = () => {
  return (
    <nav>
      <ul className='ul-header '>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `link-home ${isActive ? 'active' : ''}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/bingo'
            className={({ isActive }) =>
              `link-bingo ${isActive ? 'active' : ''}`
            }
          >
            Bingo
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/tres-en-raya'
            className={({ isActive }) =>
              `link-tres-en-raya ${isActive ? 'active' : ''}`
            }
          >
            Tres en raya
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavHeader
