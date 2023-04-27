import { Link } from 'react-router-dom'
import keycloak from '../../keycloak'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

type Props = {}

function Navbar({ }: Props) {
  const user = useSelector((state: RootState) => state.user)

  return (
    <div className="navbar bg-base-100 container mx-auto">

      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Item 1</Link></li>
            <li><Link to="/">Item 2</Link></li>
            <li><Link to="/">Item 3</Link></li>
          </ul>
        </div>
      </div>

      <div className="navbar-start basis-0 lg:basis-auto">
        <Link to="/" className="font-bold tracking-wide normal-case text-xl text-center whitespace-nowrap py-2">Alumni Network</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Item 1</Link></li>
          <li><Link to="/">Item 2</Link></li>
          <li><Link to="/">Item 3</Link></li>
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar placeholder">
            {/* Avatar placeholder */}
            <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
              <span className="text-xl">{user.name ? user.name[0].toUpperCase() : "ツ"}</span>
            </div>
            {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <Link to="/" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><Link to="/">Settings</Link></li>
            <li><button onClick={() => keycloak.logout()}>Logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar