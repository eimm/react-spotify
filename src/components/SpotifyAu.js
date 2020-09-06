import React from 'react';
import '../App.css';
import { config, links } from '../config';
import parrot from '../parrot.gif';
import Header from "./Header";

class SpotifyAu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isAuth : false,
            message : 'Hello spotify, are you authorized?',
            accessToken: '',
            refreshToken: '',
            tokenType: ''
        }
        this.handleButton = this.handleButton.bind(this);
    }
    componentDidMount() {
        const code = window.location.search;
        const test =localStorage.getItem('accessToken');
        if (test){
            this.setState({
                accessToken: localStorage.getItem('accessToken'),
                refreshToken: localStorage.getItem('refreshToken'),
                tokenType: localStorage.getItem('tokenType'),
                isAuth : true
            })
        }
        else if (code && code.includes('code') && !this.state.accessToken) {

            const link = `https://accounts.spotify.com/api/token`;
            const body = `grant_type=authorization_code&code=${code.split('=')[1]}&redirect_uri=${config.redirectLink}`;

            fetch(link, {
                method: 'POST',
                headers: {
                    "Authorization": 'Basic ' + btoa(config.appId + ':' + config.appKey),
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: body
            })
                .then(response => response.json())
                .then(data => {
                    if (!this.state.accessToken) {
                        const {access_token, refresh_token, token_type} = data;
                        localStorage.setItem('accessToken', access_token);
                        localStorage.setItem('refreshToken', refresh_token);
                        localStorage.setItem('tokenType', token_type);
                        this.setState({
                            accessToken: access_token,
                            refreshToken: refresh_token,
                            tokenType: token_type,
                            isAuth : true
                        });
                    }

                })
                .catch(err => console.log(err))
        }
    }

    handleButton (){
        console.log(this.state);
    }

    render (){
        const accessToken = this.state.accessToken;
        console.log(accessToken);
        return (
            <div>
                <div>
                    <Header accessTokenToPass = {accessToken}/>
                    <button
                        onClick={this.handleButton}
                    >:wink:</button>
                    {this.state.message + this.state.isAuth}
                </div>
                <div>
                    {this.state.isAuth ? <img src={parrot} alt="This is an animated gif image, but it does not move"/> :<a href={links.authLink}>login via spotify</a>}
                </div>
            </div>
        );
    }
}

export default SpotifyAu;

