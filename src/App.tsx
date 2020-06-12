import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  Container
} from 'react-bootstrap'

import { MenuBar } from './components/MenuBar'

import Posts from './pages/Posts'
import RegisterPage from './pages/Register'

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <MenuBar />
          <br></br>
          <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/auth/register" component={RegisterPage} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
