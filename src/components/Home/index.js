import { Link } from 'react-router-dom';
// import des images//
import imageHome from 'src/assets/img/1.jpg';
import image1 from 'src/assets/img/home.jpg';
import image2 from 'src/assets/img/2.jpg';
import image3 from 'src/assets/img/3.jpg';

import './home.scss';

const Home = () => (
  <div className="home-container">
    <h1 className="home-title">Spinning Squid</h1>
    <img className="home-image" src={imageHome} alt="skatepark" />
    <p className="home-p">Présentation de Spinning Squid</p>

    <Link to="/trouve-ton-skatepark" className="home-nav">
      <img className="home-nav-image" src={image1} alt="skatepark" />
      <p className="home-nav-description">Description de la page Trouve ton skatepark Animation au survol à faire</p>
    </Link>
    <Link to="/trouve-ton-matos" className="home-nav">
      <img className="home-nav-image" src={image2} alt="skatepark" />
      <p className="home-nav-description">Description de la page Trouve ton matos Animation au survol à faire</p>
    </Link>
    <Link to="/communaute" className="home-nav">
      <img className="home-nav-image" src={image3} alt="skatepark" />
      <p className="home-nav-description">Description de la page Whassup ?! Animation au survol à faire</p>
    </Link>
  </div>
);

export default Home;
