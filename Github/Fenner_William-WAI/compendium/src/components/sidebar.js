/**
 * Created by MasterAnseen on 5/10/18.
 */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class Sidebar extends Component{

    componentDidMount () {
        const script = document.createElement("script");

        //script.src = "../src/js/functions.js";
        //script.async = true;

        script.innerHTML = "var dropdown = document.getElementsByClassName('d-down-button');";
        script.innerHTML +="var i;";

        script.innerHTML +="for (i = 0; i < dropdown.length; i++) {";
        script.innerHTML +="dropdown[i].addEventListener('click', function() {";
        script.innerHTML +=       "this.classList.toggle('active');";
        script.innerHTML +=       "var dropdownContent = this.nextElementSibling;";
        script.innerHTML +=       "if (dropdownContent.style.display === 'block') {";
        script.innerHTML +=            "dropdownContent.style.display = 'none';";
        script.innerHTML +=       "} else {";
        script.innerHTML +=            "dropdownContent.style.display = 'block';";
        script.innerHTML +=       "}";
        script.innerHTML +=    "});";
        script.innerHTML +="}";

        document.body.appendChild(script);


    }

    render(){
        return(
            <nav className="side-bar">
                <button className="d-down-button">Profiles</button>
                <div className="dropdown">
                    <NavLink onClick={this.forceUpdate} to="/Profile/Crayn">Crayn Skilite</NavLink>
                    <NavLink onClick={this.forceUpdate} to="/Profile/Orenglaive">Orenglaive</NavLink>
                    
                </div>
                <button className="d-down-button">Bestiary</button>
                <div className="dropdown">
                    <NavLink onClick={this.forceUpdate} to="/Bestiary/WingedThearian">Winged Thearians</NavLink>
                    <NavLink onClick={this.forceUpdate} to="/Bestiary/Un-WingedThearian">Non-Winged Thearians</NavLink>
                </div>
                <button className="d-down-button">Locations</button>
                <div className="dropdown">
                    <NavLink onClick={this.forceUpdate} to="/Location/The-Maya">Maya of the Forest</NavLink>
                </div>
                <button className="d-down-button">Incident Report</button>
                <div className="dropdown">
                    <NavLink onClick={this.forceUpdate}to="/Incident/Chapter1">Stereve Chapter 1</NavLink>
                    <NavLink onClick={this.forceUpdate}to="/Incident/Chapter2">Stereve Chapter 2</NavLink>
                    <NavLink onClick={this.forceUpdate} to="/Incident/Chapter3">Stereve Chapter 3</NavLink>
                    <NavLink onClick={this.forceUpdate} to="/Incident/BC">Bandit Conquerer</NavLink>
                    <NavLink onClick={this.forceUpdate} to="/Incident/ANO_EE">Emerald Eyes</NavLink>
                </div>
            </nav>
        );
    }
}

export default Sidebar