import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if(!localStorage.getItem("exist")) {
    localStorage.setItem("exist", true);
    localStorage.setItem("userID", "");
    localStorage.setItem("passID", "");
    localStorage.setItem("MasterUser", "Orenglaive");
    localStorage.setItem("MasterPass", "Powerhouse");
    localStorage.setItem("logged", "in");
    console.log("Recreated");
}

ReactDOM.render(<App item={window.location.pathname}/>, document.getElementById('root'));
registerServiceWorker();
