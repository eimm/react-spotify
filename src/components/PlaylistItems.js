import React from "react";
import PropTypes from 'prop-types';


export default class PlaylistItems extends React.Component {



}

PlaylistItems.propTypes  = {
    name : PropTypes.string,
    spotifyLink: PropTypes.string,
    image: PropTypes.array,
    ownerName: PropTypes.string,
    numberOTracks: PropTypes.number,
}