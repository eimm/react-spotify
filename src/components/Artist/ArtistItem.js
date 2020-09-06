import React from "react";
import PropTypes from 'prop-types';
import style from "../cards.module.css";


export default class ArtistItem extends React.Component {
    render(){
        const  {
            name,
            spotifyLink,
            genres,
            image
        } = this.props.props;
        let chImage = '';
        if (image){
            chImage = image.url;
        }
        const genresLine = genres.join(', ')
        return(
            <article className={style.card}>
                <picture className={style.thumbnail}>
                    <img className={style.category__02} src={chImage}
                         alt=""/>
                </picture>
                <div className={style.cardContent}>
                    <p className={style.category__01}>{name}</p>
                    <h2>{name}</h2>
                    <p>Genres: {genresLine}</p>
                </div>
                <footer>
                    <div className={style.postMeta}>
                        <span className={style.comments}><a href={spotifyLink}> Spotify Link</a></span>
                    </div>
                </footer>
            </article>
        );
    }



}

ArtistItem.propTypes  = {
    name : PropTypes.string,
    spotifyLink: PropTypes.string,
    genres: PropTypes.string,
    image : PropTypes.array
}