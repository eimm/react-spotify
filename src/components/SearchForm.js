import SearchField from "./SearchField";
import React from "react";
import TypesButtons from "./TypeButtons";
import LimitButtons from "./LimitButtons";
import {searchFailure, searchStart, searchSuccess} from "../Actions/Actions";
import {connect} from "react-redux";

export default class SearchForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            type : 'track',
            limit: '20'
        }

        this.changeHandlerType = this.changeHandlerType.bind(this);
        this.changeHandlerLimit = this.changeHandlerLimit.bind(this);
    }
    changeHandlerType (typeVal){
        this.setState({
            type : typeVal
        })
    }
    changeHandlerLimit (typeVal){
        this.setState({
            limit : typeVal
        })
        console.log(typeVal);
    }
    render() {
        let pass = {
            accessTokenToPass : this.props.accessTokenToPass,
            type : this.state.type,
            limit : this.state.limit
        }
        return(
            <div>
                <SearchField  pass = {pass} />
                <TypesButtons changeHandler = {this.changeHandlerType} type = {this.state.type}/>
                <LimitButtons changeHandler = {this.changeHandlerLimit} limit = {this.state.limit}/>
            </div>
        )
    }
}

