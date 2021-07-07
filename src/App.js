import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home/Home';

function App() {
  return (

    <Router basename={process.env.PUBLIC_URL}>
      <Navbar/>     
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>

      <Footer />
    </Router>

  );
}

export default App;
