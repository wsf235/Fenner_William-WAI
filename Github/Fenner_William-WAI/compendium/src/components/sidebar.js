/**
 * Created by MasterAnseen on 5/10/18.
 */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import FaHome from 'react-icons/lib/ti/home-outline'
import FaSearch from 'react-icons/lib/fa/search'
import FaHeart from 'react-icons/lib/fa/heart'

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
                    <NavLink to="/Profiles">Top</NavLink>
                    <NavLink to="/Profiles/Orenglaive">Orenglaive</NavLink>
                    <NavLink to="/Profiles">Top</NavLink>
                    <NavLink to="/Profiles/Orenglaive">Orenglaive</NavLink>
                    <NavLink to="/Profiles">Top</NavLink>
                    <NavLink to="/Profiles/Orenglaive">Orenglaive</NavLink>
                    <NavLink to="/Profiles">Top</NavLink>
                    <NavLink to="/Profiles/Orenglaive">Orenglaive</NavLink>
                    <NavLink to="/Profiles">Top</NavLink>
                    <NavLink to="/Profiles/Orenglaive">Orenglaive</NavLink>
                    <NavLink to="/Profiles">Top</NavLink>
                    <NavLink to="/Profiles/Orenglaive">Orenglaive</NavLink>
                    <NavLink to="/Profiles">Top</NavLink>
                    <NavLink to="/Profiles/Orenglaive">Orenglaive</NavLink>
                </div>
                <button className="d-down-button">Bestiary</button>
                <div className="dropdown">
                    <NavLink to="/Bestiary/Thearians">Thearians</NavLink>
                </div>
                <button className="d-down-button">Locations</button>
                <div className="dropdown">
                    <NavLink to="/Locations/The-Maya">Maya of the Forest</NavLink>
                </div>
                <button className="d-down-button">Incident Report</button>
                <div className="dropdown">
                    <NavLink to="/Incident-Report/Chapter1">Stereve Chapter 1</NavLink>
                </div>
            </nav>
        );
    }
}

export default Sidebar