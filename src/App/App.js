import React from 'react';
import './App.css';
import MainPage from '../MainPage/MainPage';
import Nav from '../Nav/Nav';
import Gallery from '../Gallery/Gallery';
import About from '../About/About';
import Contact from '../Contact/Contact'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
      <Route exact path ="/"
      component={MainPage}/>

      <Route exact path ="/Gallery"
      component={Gallery}/>

      <Route exact path ="/About"
      component={About}/>

      <Route exact path ="/Contact"
      component={Contact}/>
      </div>
    </Router>
  );
}

export default App;
