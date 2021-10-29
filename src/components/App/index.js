// == Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SearchMap from 'src/containers/SearchMap';
import Header from 'src/components/Header';
import Profile from 'src/containers/Profile';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Contact from 'src/components/Contact';
import Marketplace from 'src/containers/Marketplace';
import SpotAdd from 'src/components/SpotAdd';
import Community from 'src/components/Community';

import './styles.scss';

function Communaute() {
  return <h2>Communaute</h2>;
}

function Page404() {
  return <h2>Page404</h2>;
}

// == Composant
const App = () => (
  <div className="app">
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Homeshow} />
        <Route path="/trouve-ton-skatepark" component={SearchMap} />
        <Route path="/results" component={SearchSkateResults} />
        <Route path="/ajoute-ton-spot" component={SpotAdd} />
        <Route path="/trouve-ton-matos" component={Marketplace} />
        <Route path="/communaute" component={Community} />
        <Route path="/contact" component={Contact} />
        <Route path="/profil" component={Profile} />
        <Route component={Page404} />
      </Switch>

      <Footer />
    </Router>
  </div>
);

// == Export
export default App;
