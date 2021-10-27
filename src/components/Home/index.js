import { Link } from 'react-router-dom';
// import des images//
import homeImg from '../../assets/img/home.jpg';

import './home.scss';

const Homeshow = () => (
  <div className="home-container">
    <h1 className="home-title" style={{backgroundImage: `url(${homeImg})`}}>Spinning Squid</h1>
    {/* <img className="home-image" src={imageHome} alt="skatepark" /> */}
    <p className="home-p">Présentation de Spinning Squid</p>

  
  </div>
);

export default Homeshow;
