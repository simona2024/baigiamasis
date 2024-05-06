import { NavLink } from 'react-router-dom'
import './PageHeader.css'

const PageHeader = () => {
  return (
    <header>
        <nav>
        <ul>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/plaukai">Plaukai</NavLink>
            </li>
            <li>
            <NavLink to="/nagai">Nagaiai</NavLink>
            </li>
            <li>
            <NavLink to="/veidas">veidas</NavLink>
            </li>
            <li>
            <NavLink to="/kvepalai">Kvepalai</NavLink>
            </li>
        </ul>
        </nav>
  </header>
  )
}

export default PageHeader