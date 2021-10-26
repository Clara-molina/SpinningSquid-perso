import imageHome from 'src/assets/img/home.jpg';
import './home.scss';

const Home = () => (
  <div className="image-container">
    <img className="image-home" src={imageHome} alt="skatepark" />
  </div>
);

export default Home;
