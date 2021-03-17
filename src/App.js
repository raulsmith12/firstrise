import React from 'react';
import Header from './components/Header';
import Home from './pages/index';
import Order from './pages/order';
import Confirmation from './pages/confirmation';
import Profile from './pages/profile';
import Contact from './pages/contact';
import Privacy from './pages/privacy';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Container fluid>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/confirmation" component={Confirmation} />
        <Route path="/profile" component={Profile} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
      </Router>
    </Container>
  );
}

export default App;
