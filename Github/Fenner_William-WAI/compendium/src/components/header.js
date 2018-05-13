/**
 * Created by MasterAnseen on 5/3/18.
 */
import React, { Component } from 'react'
import Nav from './nav'

class Header extends Component{
    render(){
        return(
            <header className="header">
                <h1>Aul Compendium</h1>
                <Nav />
            </header>
        );
    }
}

export default Header