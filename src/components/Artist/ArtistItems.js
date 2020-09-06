import React from "react";
import ArtistItem from "./ArtistItem";

export default class ArtistItems extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : this.props.item.name,
            spotifyLink: this.props.item.href,
            genres: this.props.item.genres,
            image : this.props.item.images[0]
        }
    }
    render() {
        return(
            <ArtistItem props = {this.state}  />
        );
    }

}