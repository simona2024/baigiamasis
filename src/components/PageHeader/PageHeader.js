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
                        <ul>
                            <li>
                                <NavLink to="/sampunai">Šampunai</NavLink>
                            </li>
                            <li>
                                <NavLink to="/balzamai">Balzamaii</NavLink>
                            </li>
                            <li>
                                <NavLink to="/aliejai">Aliejai</NavLink>
                            </li>
                        </ul>
                </li>
                <li>
                    <NavLink to="/nagai">Nagai</NavLink>
                </li>
                <li>
                    <NavLink to="/kremai">Kremai</NavLink>
                </li>
                <li>
                    <NavLink to="/kvepalai">Kvepalai</NavLink>
            
                </li>
                <li>
                     <NavLink to="/sukurti-priemone">Sukurti Kvepalus</NavLink>
                    
                </li>
                
                
            </ul>
        </nav>
        <div className="contacts">
            <button onClick={() => alert('Jūsų užklausa buvo išsiųsta!')}>Skambinti</button>
            <a href="mailto:info@example.com">El. paštas: info@example.com</a>
        </div>
  </header>
  )
}

export default PageHeader