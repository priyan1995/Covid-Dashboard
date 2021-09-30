import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <div className="App">

      <Router>

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
