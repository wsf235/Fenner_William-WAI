/**
 * Created by MasterAnseen on 5/10/18.
 */
import React, { Component } from 'react'
import Readtext from './read_file'

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

class Main extends Component{

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
            my_path: path2,
            myTxt: require("../pages/Incident/" + path2)
        }
    }

    componentWillReceiveProps(){
        this.setState({myTxt: require("../pages/Incident/" + this.state.my_path)})
    }



    render(){
        return(
            <div className="main">
                <h1>Aul Compendium</h1>
                <p>{this.props.name}</p>
                <Readtext txt={this.state.myTxt} />
            </div>
        );
    }
}

export default Main