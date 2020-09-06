import React from 'react'
import SearchForm from "./SearchForm";
import SpotifyAu from "./SpotifyAu";

export default class Header extends React.Component {

    render() {
        return(
            <header>
                <button>Your page</button>
                <SearchForm accessTokenToPass = {this.props.accessTokenToPass}/>
            </header>
        );
    }
}