import React from "react";
import AlbumItem from "./AlbumItem";
import ArtistItem from "./ArtistItem";

export default class ArtistItems extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'Drake',//mock
            spotifyLink: 'https://ru.reactjs.org/docs/typechecking-with-proptypes.html',
            genres: 'joinedstring',
            image : []
        }
    }
    render() {
        return(
            <ArtistItem props = {this.state}  />
        );
    }

}