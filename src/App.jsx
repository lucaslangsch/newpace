import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Plans from './pages/Plans';
import Locality from './pages/Locality';

function App() {
  return (
    <Switch>
      <Route exact path="/planos" component={ Plans } />
      <Route exact path="/locais" component={ Locality } />
      <Route exact path="/" component={ Home } />
    </Switch>
  );
}

export default App;
