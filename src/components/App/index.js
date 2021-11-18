// == Import
import {
  Router,
  Route,
  Switch,
  Redirect,
}
  from 'react-router-dom';
import { history } from 'src/store';
import './styles.scss';

// Import Containers
import AddSale from 'src/containers/AddSale';
import AddPost from 'src/containers/AddPost';
import Community from 'src/containers/Community';
import Connection from 'src/containers/Connection';
import Contact from 'src/containers/Contact';
import DetailsArticle from 'src/containers/DetailsArticle';
import DetailsPost from 'src/containers/DetailsPost';
import Header from 'src/containers/Header/';
import Marketplace from 'src/containers/Marketplace';
import NewsLetter from 'src/containers/NewsLetter';
import Profile from 'src/containers/Profile';
import SearchMap from 'src/containers/SearchMap';
import SearchSkateResults from 'src/containers/SearchSkateResults';
import SpotAdd from 'src/containers/SpotAdd';
import SpotEdit from 'src/containers/SpotEdit';

// Import Components
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import Loading from 'src/components/Loading';
import Squad from 'src/components/Squad';

// Import 404
import NotFound from 'src/components/NotFound';

// == Composant
const App = (props) => {
  props.getLocalStorageDataToState();
  return (
    <div className="app">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/connexion">
            {props.isLogged ? (
              <Redirect to="/connexion/profil" />
            ) : (
              <Connection />
            )}
          </Route>
          <Route exact path="/trouve-ton-skatepark" component={SearchMap} />
          <Route exact path="/trouve-ton-matos" component={Marketplace} />
          <Route exact path="/communaute" component={Community} />
          <Route path="/trouve-ton-skatepark/ajoute-ton-spot" component={SpotAdd} />
          <Route path="/trouve-ton-matos/ajoute-ton-matos" component={AddSale} />
          <Route path="/trouve-ton-skatepark/modifie-ton-spot/:skateparkId" component={SpotEdit} />
          <Route path="/trouve-ton-skatepark/:resultat" component={SearchSkateResults} />
          <Route path="/trouve-ton-matos/:saleId" component={DetailsArticle} />
          <Route path="/communaute/ajoute-ton-evenement" component={AddPost} />
          <Route path="/communaute/modifie-ton-evenement" component={AddPost} />
          <Route path="/communaute/:articleId" component={DetailsPost} />
          <Route path="/connexion/profil" component={Profile} />
          <Route path="/contact" component={Contact} />
          <Route path="/newsletter" component={NewsLetter} />
          <Route path="/loading" component={Loading} />
          <Route path="/spinning-squad" component={Squad} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

// == Export
export default App;
