import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">

      <Router>

        <Header />

        <Switch>

          <Route path="/">
            <Dashboard />
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
