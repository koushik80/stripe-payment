//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pay  from './Pay';
import Success from './Success';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        </Switch>
    </Router>
  );
};

export default App;
