/**
 * Created by MasterAnseen on 5/23/18.
 */
import React, { Component } from 'react'
import Writetext from './create-entry'

/*
 var myTxt = require("../pages/Incident/BC.txt");
 //import Nav from './nav'
 var path = window.location.pathname + window.location.search;
 var path2 = path.split('/');
 path2 = path2[path2.length-1];
 var dot = path2.split('.');
 console.log(window.location.pathname + window.location.search);
 console.log(path2);
 console.log(dot[0]);

 window.addEventListener("hashchange", function(){
 window.location.reload(true);
 });
 function getTemplate(templateName) {
 return require("../pages/Incident/"+templateName);
 }

 console.log(getTemplate(path2));
 */

class Submit extends Component{

    constructor(props){
        super(props);
        var _path = window.location.pathname + window.location.search;
        var path2 = _path.split('/');
        path2 = path2[path2.length-1];
        var dot = path2.split('.');
        console.log(window.location.pathname + window.location.search);
        console.log(path2);
        console.log(dot[0]);
        console.log(this.props.name);

        this.state = {
            my_path: path2
            //myTxt: require("../pages" + _path + ".txt")
        }

        this.open_tab = this.open_tab.bind(this);
    }



    open_tab(evt, cityName){
        var i, tab_content, tab_button;

        tab_content = document.getElementsByClassName('tab_content');
        for (i = 0; i < tab_content.length; i++) {
            tab_content[i].style.display = 'none';
        }

        tab_button = document.getElementsByClassName('tab_button');
        for (i = 0; i < tab_button.length; i++) {
            tab_button[i].className = tab_button[i].className.replace(" active", '');
        }

        document.getElementById(cityName).style.display = 'block';
        evt.currentTarget.className += " active";
    }


    render(){
        return(
            <div className="main">
                <h1>Aul Compendium</h1>
                <div className="tab">
                    <button className="tab_button active" onClick={(e) => this.open_tab(e, 'profile')}>Profile</button>
                    <button className="tab_button" onClick={(e) => this.open_tab(e, 'bestiary')}>Bestiary</button>
                    <button className="tab_button" onClick={(e) => this.open_tab(e, 'location')}>Location</button>
                    <button className="tab_button" onClick={(e) => this.open_tab(e, 'incident_report')}>Incident Reports</button>
                </div>

                <div id="profile" className="tab_content" style={{display: 'block'}}>
                    <Writetext name="Profile" />
                </div>

                <div id="bestiary" className="tab_content" style={{display: 'none'}}>
                    <Writetext name="Bestiary" />
                </div>

                <div id="location" className="tab_content" style={{display: 'none'}}>
                    <Writetext name="Location" />
                </div>

                <div id="incident_report" className="tab_content" style={{display: 'none'}}>
                    <Writetext name="Incident Report" />
                </div>

            </div>
        );
    }
}

export default Submit