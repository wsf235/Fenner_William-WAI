/**
 * Created by MasterAnseen on 5/15/18.
 */
import React from "react";


/*
 Read a text file and out put the content.

 Example Usage:
 var myTxt = require("./myTxt.txt");
 ...
 <TextFileReader
 txt={myTxt}
 />
 */
class Read_text extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };
    }

    componentDidMount() {
        this.read(this.props.txt);
    }

    read = file => {
        var txt_file = new XMLHttpRequest();
        txt_file.open("GET", file, false);
        txt_file.onreadystatechange = () => {
            if (txt_file.readyState === 4) {
                if (txt_file.status === 200 || txt_file.status === 0) {
                    var Text = txt_file.responseText;
                    this.setState({
                        text: Text
                    });
                }
            }
        };
        txt_file.send(null);
    };

    render() {
        return (
            <div>
                {this.state.text.split("\n").map((item, key) => {
                    return <span key={key}>{item}<br /></span>;
                })}
            </div>
        );
    }
}

export default Read_text;