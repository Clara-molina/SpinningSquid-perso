// == Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import SearchMap from 'src/containers/SearchMap';
import SearchSkateResults from 'src/components/SearchSkateResults';
import SpotAdd from 'src/components/SpotAdd';
import Marketplace from 'src/containers/Marketplace';
import Community from 'src/components/Community';
import DetailsPost from 'src/components/Community/DetailsPost';
import AddPost from 'src/components/Community/AddPost';
import Contact from 'src/components/Contact';
import Connection from 'src/containers/Connection';
import Profile from 'src/components/Profile';

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
        <Route path="/trouve-ton-matos/details" component={Marketplace} />
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
