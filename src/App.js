import React from 'react';
import Header from './components/Header';
import Home from './pages/index';
import Order from './pages/order';
import Confirmation from './pages/confirmation';
import Profile from './pages/profile';
import Cart from './pages/cart';
import Contact from './pages/contact';
import Privacy from './pages/privacy';
import MenuItem from './pages/MenuItem';
import { Container } from 'react-bootstrap';
import { Router, Route } from 'react-router-dom';
import history from './history';
import './App.css';

function App() {
  return (
    <Container fluid className="px-0 main-container">
      <Router history={history}>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/products/:id" component={MenuItem} />
        <Route path="/confirmation" component={Confirmation} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
      </Router>
    </Container>
  );
}

export default App;
