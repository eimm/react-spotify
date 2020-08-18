import SearchField from "./SearchField";
import React from "react";
import TypesButtons from "./TypeButtons";

export default class SearchForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            type : 'track'
        }

        this.changeHandlerType = this.changeHandlerType.bind(this)
    }
    changeHandlerType (typeVal){
        this.setState({
            type : typeVal
        })
    }
    render() {
        return(
            <div>
                <SearchField accessTokenToPass = {this.props.accessTokenToPass} type = {this.state.type}/>
                <TypesButtons changeHandler = {this.changeHandlerType} type = {this.state.type}/>
            </div>
        )
    }
}