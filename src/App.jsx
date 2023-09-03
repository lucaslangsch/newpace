import { Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Plans from './pages/Plans';
import Locality from './pages/Locality';
import Partners from './pages/Partners';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const TRACKING_ID = "G-C2E59CF5GX";
ReactGA.initialize(TRACKING_ID);

function App() {
 const location = useLocation().pathname;

  useEffect(() => {
    ReactGA.pageview(location);
  }, []);
  
  return (
    <Switch>
      <Route exact path="/planos" component={ Plans } />
      <Route exact path="/locais" component={ Locality } />
      <Route exact path="/parceiros" component={ Partners } />
      <Route exact path="/" component={ Home } />
    </Switch>
  );
}

export default App;
