import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import './header.scss';

const Header = () => (
  <nav className="nav">
    <div className="left-half-header">
      <NavLink
        className="nav-logo left-header"
        to="/"
        exact
      >
        Logo
      </NavLink>
    </div>

    <div className="right-half-header">
      <NavLink
        to="/"
        exact
        className="nav-link right-header"
        activeClassName="nav-link--active"
      >
        Accueil
      </NavLink>

      <NavLink
        to="/trouve-ton-skatepark"
        className="nav-link right-header"
        activeClassName="nav-link--active"
      >
        Trouve ton skatepark
      </NavLink>

      <NavLink
        to="/communaute"
        className="nav-link right-header"
        activeClassName="nav-link--active"
      >
        Whassup ?!
      </NavLink>

      <NavLink
        to="/profil"
        className="nav-link right-header"
        activeClassName="nav-link--active"
      >
        Connexion
      </NavLink>

      <NavLink
        to="/contact"
        className="nav-link right-header"
        activeClassName="nav-link--active"
      >
        Question ?
      </NavLink>

      {/* Menu burger */}
      <Menu right isOpen={false}>
        <NavLink className="nav-link" to="/" exact activeClassName="nav-link--active">Accueil</NavLink>
        <NavLink className="nav-link" to="/trouve-ton-skatepark" activeClassName="nav-link--active">Trouve ton skatepark</NavLink>
        <NavLink className="nav-link" to="/communaute" activeClassName="nav-link--active">Whassup ?!</NavLink>
        <NavLink className="nav-link" to="/profil" activeClassName="nav-link--active">Connexion</NavLink>
        <NavLink className="nav-link" to="/contact" activeClassName="nav-link--active">Question</NavLink>
      </Menu>

    </div>
  </nav>
);

export default Header;
