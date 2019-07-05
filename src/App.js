import React from 'react';
//import Cards from './component/moviescards/cars';
//import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './component/moviescards/Navbar';
import Footer from './component/moviescards/Footer';
import Home from './component/pages/Home';
import Body from './component/pages/Body';
import ValidationLoginForm from './component/Login/ValidationLoginForm';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Home />
      <Footer />
      <ValidationLoginForm />
     
    </div>
  );
}

export default App;
