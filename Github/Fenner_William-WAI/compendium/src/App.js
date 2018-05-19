import React, { Component } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Main from './components/main';
import Footer from './components/footer';
//import logo from './logo.svg';
import './App.css';
import './css/style.css';

import {
BrowserRouter as Router, Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Sidebar />
                <Route path="/" component={Main}/>
                <Footer />
            </div>
         </Router>
    );
  }
}

export default App;
