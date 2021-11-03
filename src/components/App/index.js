/* eslint-disable import/no-extraneous-dependencies */
// == Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles.scss';

// Import Containers
import Header from 'src/containers/Header/';
import Connection from 'src/containers/Connection';
import Marketplace from 'src/containers/Marketplace';
import Profile from 'src/containers/Profile';
import SearchMap from 'src/containers/SearchMap';
import SpotAdd from 'src/containers/SpotAdd';

// Import Components
import AddPost from '../Community/AddPost';
import Community from '../Community';
import Contact from '../Contact';
import DetailsArticle from '../Marketplace/DetailsArticle';
import DetailsPost from '../Community/DetailsPost';
import Footer from '../Footer';
import Home from '../Home';
import PostArticle from '../Marketplace/PostArticle';
import SearchSkateResults from '../SearchSkateResults';
import NewsLetter from '../NewsLetter';

// Import page d'erreur
import NotFound from '../NotFound';

// == Composant
const App = () => (
  <div className="app">
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/trouve-ton-skatepark" component={SearchMap} />
        <Route
          path="/trouve-ton-skatepark/ajoute-ton-spot"
          component={SpotAdd}
        />
        <Route
          path="/trouve-ton-skatepark/resultat"
          component={SearchSkateResults}
        />
        <Route exact path="/trouve-ton-matos" component={Marketplace} />
        <Route
          exact
          path="/trouve-ton-matos/ajoute-ton-matos"
          component={PostArticle}
        />
        <Route path="/trouve-ton-matos/details" component={DetailsArticle} />
        <Route exact path="/communaute" component={Community} />
        <Route path="/communaute/details" component={DetailsPost} />
        <Route path="/communaute/ajoute-ton-evenement" component={AddPost} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/connexion" component={Connection} />
        <Route exact path="/connexion/profil" component={Profile} />
        <Route path="/newsletter" component={NewsLetter} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  </div>
);

// == Export
export default App;
