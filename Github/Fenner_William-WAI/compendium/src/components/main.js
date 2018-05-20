/**
 * Created by MasterAnseen on 5/10/18.
 */
import React, { Component } from 'react'
import Read_text from './read_file'
import {
    BrowserRouter as Route
} from 'react-router-dom'
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

class Main extends Component{

    constructor({props}){
        super(props);
        var path = window.location.pathname + window.location.search;
        var path2 = path.split('/');
        path2 = path2[path2.length-1];
        var dot = path2.split('.');
        console.log(window.location.pathname + window.location.search);
        console.log(path2);
        console.log(dot[0]);

        this.state = {
            myTxt: require("../pages/Incident/" + "ANO_EE.txt")//+ path2)
        }
    }



    render(){
        return(
            <div className="main">
                <h1>Aul Compendium</h1>
                <Read_text txt={getTemplate(path2)} />
                <p>{5}</p>
                <Read_text txt={this.state.myTxt} />
            </div>
        );
    }
}

export default Main