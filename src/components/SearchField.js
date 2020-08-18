import React from "react";
import {config,links} from "../config";
export default class SearchField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let searchLink = links.searchEndpoint +'?q=' + this.state.value.replace(/\s/g, "+")+ '&type=' + this.props.type;
        fetch(searchLink, {
            method: 'get',
            type: 'no-cors',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization":" Bearer "+  this.props.accessTokenToPass
            }
        })
            .then(response => (console.log(response)));
    }

    render() {
        // console.log(this.props.accessTokenToPass);
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Search:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}