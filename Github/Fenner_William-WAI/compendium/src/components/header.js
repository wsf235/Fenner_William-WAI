/**
 * Created by MasterAnseen on 5/3/18.
 */
import React, { Component } from 'react'
import Nav from './nav'
import Login from './login';

class Header extends Component{

    presented(){
        const _logged = localStorage.getItem("logged");
        console.log(_logged);

        if(_logged === "out") {
            return <Login />
        }
    }

    set_out(){
        localStorage.setItem("logged", "out");
    }

    not_presented(){
        const _logged = localStorage.getItem("logged");
        console.log(_logged);

        if(_logged === "in") {
            return <button onSubmit={this.set_out()}>Logged in</button>
        }
    }


    render(){
        return(
            <header className="header">
                <h1>Aul Compendium</h1>
                <Nav />
                {this.presented()}
                {this.not_presented()}
            </header>
        );
    }
}

export default Header