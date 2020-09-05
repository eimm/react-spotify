import React from "react";
import AlbumItems from "./AlbumItems";

export default class AlbumItem extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'Drake',//mock
            spotifyLink: 'https://ru.reactjs.org/docs/typechecking-with-proptypes.html',
            image: [],
            releaseDate: '12.12.12',
            numberOTracks: 12,
            listOArtists: 'Drake'
        }
    }

    render() {
        return(
            <AlbumItems  props = {this.state}  />
        );
    }

}