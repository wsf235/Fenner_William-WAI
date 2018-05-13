/**
 * Created by MasterAnseen on 5/10/18.
 */
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import FaHome from 'react-icons/lib/ti/home-outline'
import FaSearch from 'react-icons/lib/fa/search'
import FaHeart from 'react-icons/lib/fa/heart'

class Sidebar extends Component{
    render(){
        return(
            <nav className="">
                <NavLink to="/Profiles"><FaHome /> Home - Top Recipes</NavLink>
                <NavLink to="/Bestiary"><FaSearch /> Search</NavLink>
                <NavLink to="/Locations"><FaHeart /> Your Recipes</NavLink>
                <NavLink to="/Incident-Report"><FaHeart /> Your Recipes</NavLink>

            </nav>
        );
    }
}

export default Sidebar