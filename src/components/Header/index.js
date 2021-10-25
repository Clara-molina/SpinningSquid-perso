import { NavLink, Link } from 'react-router-dom';

import './header.scss';

const Header = () => (
  <nav className="menu">
    <NavLink
      className="menu-logo"
      activeClassName="menu-link--active"
      to="/"
      exact
    >
      Logo

    </NavLink>
    <ul>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/trouve-ton-skatepark">Trouve to skatepark</Link>
      </li>
      <li>
        <Link to="/trouve-ton-matos">Trouve ton matos</Link>
      </li>
      <li>
        <Link to="/communaute">Whassup ?!</Link>
      </li>
      <li>
        <Link to="/profil">Connexion</Link>
      </li>
      <li>
        <Link to="/contact">Question ?</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
