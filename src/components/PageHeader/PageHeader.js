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
            <NavLink to="/nagai">Nagai</NavLink>
            </li>
            <li>
            <NavLink to="/kremai">Kremai</NavLink>
            </li>
            <li>
            <NavLink to="/kvepalai">Kvepalai</NavLink>
            
                {/* <NavLink to="/kvepalai/kvepalas">Kvepalas</NavLink> */}
            
            </li>
        </ul>
        </nav>
  </header>
  )
}

export default PageHeader