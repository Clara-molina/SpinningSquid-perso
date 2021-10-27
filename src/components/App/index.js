// == Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SearchMap from 'src/containers/SearchMap';
import Header from '../Header';
import Profile from 'src/containers/Profile';
import Home from '../Home';
import Footer from '../Footer';
import Contact from '../Contact';

import './styles.scss';

function Marketplace() {
  return <h2>Marketplace</h2>;
}

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
        <Route exact path="/" component={Home} />
        <Route path="/trouve-ton-skatepark" component={SearchMap} />
        <Route path="/trouve-ton-matos" component={Marketplace} />
        <Route path="/communaute" component={Communaute} />
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
