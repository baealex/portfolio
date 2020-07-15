import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Index from './pages/Index';
import Products from './pages/Products';
import Palette from './pages/Palette';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NoMatch from './components/NoMatch';
import ScrollToTop from './components/ScrollToTop';

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
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route component={NoMatch}/>
          </Switch>
          <Footer/>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;