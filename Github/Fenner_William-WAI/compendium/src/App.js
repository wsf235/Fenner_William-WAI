import React, { Component } from 'react';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Main from './components/main';
import Submit from './components/submit-new';
import Footer from './components/footer';
//import logo from './logo.svg';
import './App.css';
import './css/style.css';

import {
BrowserRouter as Router, Route, Switch
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
            true_path: path //,
            //refresh: function(){
            //    Router.dispatch(location.getCurrentPath(), null)
            //}
        }
    }



  render() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Sidebar />
                <Switch>
                    <Route exact path="/submit" component={Submit} />
                    <Route path={this.state.true_path}
                           render={(props)=> <Main {...props} name={path} />}
                    />
                </Switch>
                <Footer />
            </div>
         </Router>
    );
  }
}

export default App;
