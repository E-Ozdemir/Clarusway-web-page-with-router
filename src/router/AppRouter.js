import React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import Navbar from "../components/Navbar";
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Footer from "../components/Footer";
import Html from '../pages/Html'
import Logo from '../pages/Logo'
import Css from '../pages/Css'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/html" component={Html} />
        <Route path="/css" component={Css} />
        <Route path="/logo" component={Logo} />
      </Switch>
      <Footer/>
    </Router>
  );
};

export default AppRouter;
