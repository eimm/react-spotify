import React from "react";
import PlaylistItems from "./PlaylistItems";

export default class PlaylistItem extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'Drake',//mock
            spotifyLink: 'https://ru.reactjs.org/docs/typechecking-with-proptypes.html',
            image: [],
            ownerName: '12.12.12',
            numberOTracks: 12,
        }
    }

    render() {
        return(
            <PlaylistItems  props = {this.state}  />
        );
    }

}