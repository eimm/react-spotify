import React from "react";
import PropTypes from 'prop-types';
import style from '../cards.module.css'


export default class TrackItem extends React.Component {

render(){
    const  {
        name,
            spotifyLink,
            duration,
            popularity,
            albumName,
            albumSpotifyLink,
            artistName,
            artistSpotifyLink
    } = this.props.props;
    return(
        <article className={style.card}>
            <picture className="thumbnail">
                <img className="category__01" src="https://abbeyjfitzgerald.com/wp-content/uploads/2018/01/cloud.svg"
                     alt=""/>
            </picture>
            <div className={style.cardContent}>
                <p className={style.category__01}>{name}</p>
                <h2>{artistName}</h2>
                <p>Album: {albumName}, Duration: {duration}, Popularity: {popularity}</p>
            </div>
            <footer>
                <div className={style.postMeta}>
                    <span className={style.comments}><a href={spotifyLink}> Spotify Link</a></span>
                    <span className={style.comments}><a href={albumSpotifyLink}> Album</a></span>
                    <span className={style.comments}><a href={artistSpotifyLink}> Artist</a></span>
                </div>
            </footer>
        </article>
    );
}

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