// == Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Import Components
import AddPost from 'src/components/Community/AddPost';
import Community from 'src/components/Community';
import Contact from 'src/components/Contact';
import DetailsArticle from 'src/components/Marketplace/DetailsArticle';
import DetailsPost from 'src/components/Community/DetailsPost';
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import PostArticle from 'src/components/Marketplace/PostArticle';
import Profile from 'src/components/Profile';
import SearchSkateResults from 'src/components/SearchSkateResults';
import SpotAdd from 'src/components/SpotAdd';

//Import Containers
import Connection from 'src/containers/Connection';
import Marketplace from 'src/containers/Marketplace';
import SearchMap from 'src/containers/SearchMap';

import './styles.scss';

function Page404() {
  return <h2>Page404</h2>;
}

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
        <Route path="/connexion/profil" component={Profile} />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </Router>
  </div>
);

// == Export
export default App;
