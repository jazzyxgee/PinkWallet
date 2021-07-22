import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home/Home';
import Services from './Components/Pages/Services/Services';
import Products from './Components/Pages/Products/Products';
import SignUp from './Components/Pages/SignUp/SignUp';
import SignIn from './Components/Pages/SignIn/SignIn';
import Dashboard from './Components/Sections/Dashboard';

import PrivateRoute from "./Components/Firebase/PrivateRoute"
import { AuthProvider } from './Contexts/AuthContext';

function App() {
  return (

    <Router basename={process.env.PUBLIC_URL}>
      <AuthProvider>
        <Switch>

          <Route path='/' exact component={Home} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Products} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/sign-in" component={SignIn} />

        </Switch>
      </AuthProvider>
    </Router>

  );
}

export default App;
