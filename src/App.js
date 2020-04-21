import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Index from './pages/Index';
import Products from './pages/Products';
import Palette from './pages/Palette';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './bootstrap.min.css'
import './baealex.scss'
import './App.scss';

class App extends React.Component {
  componentDidMount = () => {
    AOS.init({
      duration : 500
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Route exact path="/" component={Index}/>
        <Route exact path="/product" component={Products}/>
        <Route exact path="/palette" component={Palette}/>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;