import './app.scss';
import { HashRouter as Router, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './Home';
import Navbar from './components/navbar/Navbar';
import ProductMenu from './components/productMenu/ProductMenu';
import BurgerMenu from './components/burgermenu/BurgerMenu';
import HowItWorks from './HowItWorks';
import Pricing from './Pricing';
import Observer from './Observer';

function App() {
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar productMenuOpen={productMenuOpen} setProductMenuOpen={setProductMenuOpen} burgerMenuOpen={burgerMenuOpen} setBurgerMenuOpen={setBurgerMenuOpen}/>
        <ProductMenu productMenuOpen={productMenuOpen} setProductMenuOpen={setProductMenuOpen}/>
        <BurgerMenu burgerMenuOpen={burgerMenuOpen} setBurgerMenuOpen={setBurgerMenuOpen} />
        <Route exact path="/" >
          <Home />
        </Route>
        <Route path="/howitworks" >
          <HowItWorks />
        </Route>
        <Route path="/pricing" >
          <Pricing />
        </Route>
        <Route path="/observer" >
          <Observer/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
