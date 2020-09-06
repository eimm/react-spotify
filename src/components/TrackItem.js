import React from "react";
import PropTypes from 'prop-types';


export default class TrackItem extends React.Component {



}

TrackItem.propTypes  = {
    name : PropTypes.string,
    spotifyLink: PropTypes.string,
    duration: PropTypes.number,
    popularity: PropTypes.number,
    albumName : PropTypes.string,
    albumSpotifyLink : PropTypes.string,
    artistName : PropTypes.string,
    artistSpotifyLink: PropTypes.string
}