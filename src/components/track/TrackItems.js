import React from "react";
import TrackItem from "./TrackItem";
import {searchFailure, searchStart, searchSuccess} from "../../Actions/Actions";
import {connect} from "react-redux";

export default class TrackItems extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : this.props.item.name,
            spotifyLink: this.props.item.href,
            duration: this.props.item.duration_ms,
            popularity: this.props.item.popularity,
            albumName : this.props.item.album.name,
            albumSpotifyLink : this.props.item.album.href,
            artistName : this.props.item.artists[0].name,
            artistSpotifyLink: this.props.item.artists[0].href
        }
    }



    render() {
        return(
            <TrackItem props = {this.state}/>
        );
    }

}







