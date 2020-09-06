import SearchField from "./SearchField";
import React from "react";
import TypesButtons from "./TypeButtons";
import LimitButtons from "./LimitButtons";
import {searchFailure, searchStart, searchSuccess} from "../Actions/Actions";
import {connect} from "react-redux";

export default class SearchForm extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        let pass = {
            accessTokenToPass : this.props.accessTokenToPass,
        }
        return(
            <div>
                <SearchField  pass = {pass} />
                <TypesButtons initialValues={{track: 'true'}}/>
                <LimitButtons initialValues={{limit: '20'}}/>
            </div>
        )
    }
}

