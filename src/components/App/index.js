/* eslint-disable import/no-extraneous-dependencies */
// == Import
import { Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { history } from 'src/store';
import './styles.scss';

// Import Containers
import AddSale from 'src/containers/AddSale';
import AddPost from 'src/containers/AddPost';
import Community from 'src/containers/Community';
import Connection from 'src/containers/Connection';
import Contact from 'src/containers/Contact';
import DetailsArticle from 'src/containers/Marketplace/DetailsArticle';
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
// import PostArticle from 'src/components/Marketplace/PostArticle';

// Import page d'erreur
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
          <Route exact path="/trouve-ton-skatepark" component={SearchMap} />
          <Route
            path="/trouve-ton-skatepark/ajoute-ton-spot"
            component={SpotAdd}
          />
          <Route
            path="/trouve-ton-skatepark/modifie-ton-spot/:skateparkId"
            component={SpotEdit}
          />
          <Route
            path="/trouve-ton-skatepark/:resultat"
            component={SearchSkateResults}
          />
          <Route exact path="/trouve-ton-matos" component={Marketplace} />
          <Route
            exact
            path="/trouve-ton-matos/ajoute-ton-matos"
            component={AddSale}
          />
          {/* <Route
            exact
            path="/trouve-ton-matos/modifie-ton-matos"
            component={PostArticle}
          /> */}
          <Route
            path="/trouve-ton-matos/:articleId"
            component={DetailsArticle}
          />
          <Route exact path="/communaute" component={Community} />
          <Route path="/communaute/:articleId" component={DetailsPost} />
          <Route path="/communaute/ajoute-ton-evenement" component={AddPost} />
          <Route path="/communaute/modifie-ton-evenement" component={AddPost} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/connexion">
            {props.isLogged ? (
              <Redirect to="/connexion/profil" />
            ) : (
              <Connection />
            )}
          </Route>
          <Route exact path="/connexion/profil" component={Profile} />
          <Route path="/newsletter" component={NewsLetter} />
          <Route path="/loading" component={Loading} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

// == Export
export default App;
