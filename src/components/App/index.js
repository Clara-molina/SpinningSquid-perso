/* eslint-disable import/no-extraneous-dependencies */
// == Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './styles.scss';

// Import Containers
import Connection from 'src/containers/Connection';
import Contact from 'src/containers/Contact';
import Header from 'src/containers/Header/';
import Marketplace from 'src/containers/Marketplace';
import NewsLetter from 'src/containers/NewsLetter';
import Profile from 'src/containers/Profile';
import SearchMap from 'src/containers/SearchMap';
import SpotAdd from 'src/containers/SpotAdd';

// Import Components
import AddPost from 'src/components/Community/AddPost';
import Community from 'src/components/Community';
import DetailsArticle from 'src/components/Marketplace/DetailsArticle';
import DetailsPost from 'src/components/Community/DetailsPost';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import PostArticle from 'src/components/Marketplace/PostArticle';
import SearchSkateResults from 'src/components/SearchSkateResults';

// Import page d'erreur
import NotFound from 'src/components/NotFound';

// == Composant
const App = (props) => {
  props.getLocalStorageDataToState();
  return (
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
          <Route exact path="/connexion">
            {props.isLogged ? <Redirect to="/connexion/profil" /> : <Connection />}
          </Route>
          <Route exact path="/connexion/profil" component={Profile} />
          <Route path="/newsletter" component={NewsLetter} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

// == Export
export default App;
