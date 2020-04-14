import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import Shipping from './Components/Shipping/Shipping';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
        <Route path="/home">
          <HomePage></HomePage>    
        </Route>
        <Route path="//fooditem/:itemId">
          <ItemDetail></ItemDetail>
        </Route>
        <Route path="/cart">
            <Cart></Cart>
        </Route>
        <Route path="/login">
            <Login></Login>
        </Route>
        <Route path="/shipping">
            <Shipping></Shipping>
        </Route>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
