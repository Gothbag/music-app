import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ItemDetail from "./components/ItemDetail";
import Home from "./containers/Home";
import "./App.css";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/detail/:songId" component={ItemDetail}/>
        </div>
      </Router>
    );
  }
}

export default App;
