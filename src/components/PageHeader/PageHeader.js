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
                    <NavLink to="/nagai">Nagai</NavLink>
                    <ul>
                         <li>
                            <NavLink to="/sukurti-nagus">Sukurti Nagų priemonę</NavLink>
                    
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/kremai">Kremai</NavLink>
                    <ul>
                        <li>
                                <NavLink to="/sukurti-krema">Sukurti Krema </NavLink>
                        
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/kvepalai">Kvepalai</NavLink>
                    <ul>
                         <li>
                            <NavLink to="/sukurti-priemone">Sukurti Kvepalus</NavLink>
                    
                        </li>
                    </ul>
            
                </li>

                <li>
                    <NavLink to="/plaukai">Plaukai</NavLink>
                        <ul>
                             <li>
                                <NavLink to="/balzamai">Balzamaii</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="/aliejai">Aliejai</NavLink>
                            </li>
                            <li>
                                <NavLink to="/sampunai">Šampunai</NavLink>
                            </li>
                        </ul>
                </li>
                <li>
                     <NavLink to="/galerija">Produktų Galerija</NavLink>
                    
                </li>
                
                
                
            </ul>
        </nav>
        <div className="contacts">
            <button className="call" onClick={() => alert('Jūsų užklausa buvo išsiųsta!')}>Skambinti</button>
            <a href="mailto:info@example.com">El. paštas: info@kosmetika.com</a>
        </div>
  </header>
  )
}

export default PageHeader