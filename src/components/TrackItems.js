import React from "react";
import TrackItem from "./TrackItem";

export default class TrackItems extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'Drake',//mock
            spotifyLink: 'https://ru.reactjs.org/docs/typechecking-with-proptypes.html',
            duration: 123,
            popularity: 123,
            albumName : 'gorod',
            albumSpotifyLink : 'https://ru.reactjs.org/docs/typechecking-with-proptypes.html',
            artistName : '12.12.12',
            artistSpotifyLink: 'https://ru.reactjs.org/docs/typechecking-with-proptypes.html'
        }
    }
    render() {
        return(
            <TrackItem props = {this.state}  />
        );
    }

}