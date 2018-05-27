/**
 * Created by MasterAnseen on 5/25/18.
 */
import React from "react";
import {Button, FormGroup, FormControl, ControlLabel} from "react-bootstrap";

class Login extends React.Component{
    constructor(props){
        super(props);

        this.state={
            username: "",
            password: ""
        }
    }

    validate(){
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    change = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    prevent_submit = e => {
        //e.preventDefault();
        if(this.state.username === localStorage.getItem("MasterUser")){
            if(this.state.password === localStorage.getItem("MasterPass")){
                console.log("Logged in");
                localStorage.setItem("logged", "in");
                localStorage.setItem("userID", this.state.username);
                localStorage.setItem("passID", this.state.password);
            }
            else{
                console.log("Incorrect Password");
            }
        }
        else{
            console.log("Username doesn't exist");
        }
    };

    render(){return(
        <div className="login">
            <form onSubmit={this.prevent_submit}>
                <FormGroup controlId="username">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        value={this.state.username}
                        onChange={this.change}
                    />
                </FormGroup>
                <FormGroup controlId="password">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        value={this.state.password}
                        onChange={this.change}
                        type="password"
                    />
                </FormGroup>
                <Button
                    block
                    bsSize="large"
                    disabled={!((e) => this.validate(e))}
                    type="submit"
                >
                    Login
                </Button>
            </form>
        </div>
    )}

}


export default Login;