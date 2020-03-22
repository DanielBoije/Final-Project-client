import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigaatio from "./komponentit/Navigaatio"
import Koti from "./komponentit/reitit/Koti"
import Lomakkeet from "./komponentit/reitit/Lomakkeet"
import Tilastot from "./komponentit/reitit/Tilastot"
import Lista from "./komponentit/reitit/Lista"
import Lomake from "./komponentit/reitit/Lomake"

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
          <Route path="/lista" component={Lista}/>
          <Route path="/lomake" component={Lomake}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
