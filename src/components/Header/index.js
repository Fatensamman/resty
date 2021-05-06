import './Header.scss'
import { NavLink } from 'react-router-dom';

const Header = ()=>{
    return(
    <header>
      <div>

       <h1>RESTy</h1>
      </div>
       {/* <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              Home
             </NavLink>
          </li>
          <li>
            <NavLink to="/history">
            History
             </NavLink>
          </li>
          <li>
            <NavLink to="/help">
            Help
             </NavLink>
          </li>
        </ul>
      </nav> */}
     </header>
    ) 
   }

 export default Header;
