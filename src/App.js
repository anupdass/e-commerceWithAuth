import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import { createContext, useState } from 'react';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Privateroute from './components/Privateroute/Privateroute';
import Shipment from './components/Shipment/Shipment';


export const userContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [login, setLogin] = useState({
    isLogin: false,
    email: '',
    name: '',
    photo: '',
  })
  return (
    <userContext.Provider value={{ cartItem: [cart, setCart], loginItem: [login, setLogin] }}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Products></Products>
          </Route>
          <Route path='/product'>
            <Products></Products>
          </Route>
          <Route path='/cart'>
            <Cart></Cart>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Privateroute path="/shipment">
            <Shipment></Shipment>
          </Privateroute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
