import { Link } from 'react-router-dom';
// import des images//
import imageHome from 'src/assets/img/home.jpg';
import image1 from 'src/assets/img/1.jpg';
import image2 from 'src/assets/img/2.jpg';
import image3 from 'src/assets/img/3.jpg';
import logo from 'src/assets/img/logo1.png';

import './home.scss';

const Home = () => (
  <div className="home-container main-containerw">
    <h1 className="home-title">Spinning Squid</h1>
    <img className="home-logo" src={logo} alt="logo spinning squid" />
    <img className="home-image" src={imageHome} alt="skatepark" />
    <p className="home-p">Présentation de Spinning Squid</p>

    <Link to="/trouve-ton-skatepark" className="home-nav">
      <div className="home-nav-container">
        <img className="home-nav-image" src={image1} alt="skatepark" />
        <p className="home-nav-description">Si tu cherches un Skatepark, ça se passe ici !</p>
      </div>
    </Link>
    <Link to="/trouve-ton-matos" className="home-nav">
      <div className="home-nav-container">
        <img className="home-nav-image" src={image2} alt="skatepark" />
        <p className="home-nav-description">Description de la page Trouve ton matos Animation au survol à faire</p>
      </div>
    </Link>
    <Link to="/communaute" className="home-nav">
      <div className="home-nav-container">
        <img className="home-nav-image" src={image3} alt="skatepark" />
        <p className="home-nav-description">Description de la page Whassup ?! Animation au survol à faire</p>
      </div>
    </Link>
  </div>
);

export default Home;
