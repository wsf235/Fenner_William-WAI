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
//import {withRouter} from 'react-router'

var path = window.location.pathname + window.location.search;

class App extends Component {

    constructor(){
        super();
        var path = window.location.pathname + window.location.search;
        var path2 = path.split('/');
        path2 = path2[path2.length-1];
        var dot = path2.split('.');
        console.log(window.location.pathname + window.location.search);
        console.log(path2);
        console.log(dot[0]);

        this.state ={
            true_path: path
        }
    }

    //componentDidUpdate(prevProps){
    //    if(this.state.true_path !== path){
    //        this.route_changed();
    //    }
    //}

    route_changed(){
        console.log("New Route: " + this.state.true_path);
    }

  render() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Sidebar />
                <Main name={path} />
                {path}
                <Footer />
            </div>
         </Router>
    );
  }
}

export default App;
