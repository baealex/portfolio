import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Index from './pages';
import Product from './pages/product';
import Palette from './pages/palette';

import Navbar from './components/navbar';
import Footer from './components/footer';
import NoMatch from './components/no-match';
import ScrollToTop from './components/scroll-to-top';

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
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Index}/>
            <Route exact path="/product" component={Product}/>
            <Route exact path="/palette" component={Palette}/>
            <Route component={NoMatch}/>
          </Switch>
          <Footer/>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;