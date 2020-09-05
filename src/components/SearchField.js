import React from "react";
import {connect} from "react-redux";
import {config,links} from "../config";
import {searchStart,searchFailure,searchSuccess} from "../Actions/Actions";

class SearchField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.searchHandlerSucc = this.searchHandlerSucc.bind(this);
        // this.searchHandlerFail = this.searchHandlerFail.bind(this);

    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.props.type);
        let searchLink = links.searchEndpoint + '?q=' + this.state.value.replace(/\s/g, "+") + '&type=' + this.props.type + '&limit=' + this.props.limit;
        this.props.searchSt();
        const that = this;
        fetch(searchLink, {
            method: 'get',
            type: 'no-cors',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": " Bearer " + this.props.pass.accessTokenToPass
            }
        })
            .then(function(response) {
                return response.json();
            }).then(function(data) {
            that.searchHandlerSucc(data);
            }).catch(function (err) {
            that.props.searchFail(err)
            });



    }


    searchHandlerSucc (data){
        if (data.error){
            alert(data.error.message);
            this.props.searchFail(data.error);
            if(data.error.status == 401){
                localStorage.clear();
            }
            return;
        }
        this.props.searchSuc(data);
    }

    // searchHandlerFail (e){
    //     localStorage.clear();
    //     this.props.searchFail(e);
    // }

    render() {
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

const mapDispatchToProps = (dispatch) => ({
        searchSt: () => dispatch(searchStart()),
        searchFail: (payload) => dispatch(searchFailure(payload)),
        searchSuc: (payload) => dispatch(searchSuccess(payload))
})

function mapStateToProps(state) {
    const type  = state.search.searchTypes;
    const limit = state.search.searchLimit;
    return { type,limit }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchField)


