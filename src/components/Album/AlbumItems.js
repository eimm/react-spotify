import React from "react";
import PropTypes from 'prop-types';


export default class AlbumItems extends React.Component {



}

AlbumItems.propTypes  = {
    name : PropTypes.string,
    spotifyLink: PropTypes.string,
    image: PropTypes.array,
    releaseDate: PropTypes.string,
    numberOTracks: PropTypes.number,
    listOArtists: PropTypes.string
}