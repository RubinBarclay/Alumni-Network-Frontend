import { Link } from 'react-router-dom'
import './navbar.css'
import keycloak from '../../keycloak'

type Props = {}

function Navbar({}: Props) {
  return (
    <nav className="navbar container">
        <ul>
          <li>
            <Link to="/">
              <strong>Alumni Network</strong>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/" className="secondary">Home</Link>
          </li>
          <li>
            <Link to="/" className="secondary">Profile</Link>
          </li>
          <li>
            <button onClick={() => keycloak.logout()}>
              <small>Logout</small>
            </button>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar