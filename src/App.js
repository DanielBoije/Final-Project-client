import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigaatio from "./komponentit/Navigaatio"
import Koti from "./komponentit/Koti"
import Lomakkeet from "./komponentit/Lomakkeet"
import Tilastot from "./komponentit/Tilastot"

function App() {
  return (
    <Router>
    <div className="App">
      <div className="header">
      <Navigaatio/>
      </div>
      <Switch>
          <Route exact path="/" component={Koti}/>
          <Route path="/lomakkeet" component={Lomakkeet}/>
          <Route path="/tilastot" component={Tilastot}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
