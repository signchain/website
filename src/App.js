import React, {useEffect} from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';

function App() {


  useEffect(() => {
    const currentLocation = window.location.href.toString().split(window.location.host)[1];
    if (currentLocation == '/demo') {
      window.location.href = "https://youtu.be/XZy307J-0dI";
    } else if (currentLocation == '/pitchdeck') {
      window.location.href = "https://youtu.be/Py8_82ORj-k";
    }


  }, []);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
