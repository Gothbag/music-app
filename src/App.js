import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Col, Grid } from "react-bootstrap";

import ItemDetail from "./containers/SongPage";
import Home from "./containers/Home";
import "./App.css";


class App extends Component {
  render() {
    return (
      <Router>
        <Grid>
          <Col sm={12}>
            <Route exact path="/" component={Home}/>
            <Route path="/detail/:songId" component={SongPage}/>
          </Col>
        </Grid>
      </Router>
    );
  }
}

export default App;
