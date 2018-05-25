/**
 * Created by MasterAnseen on 5/24/18.
 */
import React from "react";


class Writetext extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };
    }

    componentDidMount() {
        console.log(this.props.name+" form");
        //this.write(this.props.txt);
    }

    write = file => {
        /*var txt_file = new XMLHttpRequest();
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
        txt_file.send(null);*/
    };

    render() {
        return (
            <form id={this.props.name.split(' ').join('')}>
                <h3>{this.props.name} Submission Form</h3>
                <label for="title">{this.props.name} Title</label>
                <input type="text" id="title" required/><br /><br />
                <label for="tags">Notes</label>
                <input type="text" id="tags" required/><br /><br />
                <label for="_content">Content</label>
                <textarea id="_content" required/><br /><br />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Writetext;