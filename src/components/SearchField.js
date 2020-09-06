import React from "react";
import {connect} from "react-redux";
import {config,links} from "../config";
import {searchStart,searchFailure,searchSuccess} from "../Actions/Actions";
import SearchFieldReduxForm from "./SearchFieldReduxForm";
import {formValueSelector} from "redux-form";

class SearchField extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.searchHandlerSucc = this.searchHandlerSucc.bind(this);
        // this.searchHandlerFail = this.searchHandlerFail.bind(this);

    }


    handleSubmit() {
        let typeStr = this.formTypeString(this.props.typeArtist,this.props.typeTrack,this.props.typePlaylist,this.props.typeAlbum)
        let searchLink = links.searchEndpoint + '?q=' + this.props.hasSearchValue.replace(/\s/g, "+") + '&type=' + typeStr + '&limit=' + this.props.hasLimit;
        if (this.props.searchLinkFromState === searchLink){
            return;
        }
        this.props.searchSt(searchLink);
        const that = this;
        fetch(searchLink, {
            method: 'get',
            type: 'no-cors',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": " Bearer " + this.props.pass.accessTokenToPass
            }
        })
            .then(function(response) {
                return response.json();
            }).then(function(data) {
            that.searchHandlerSucc(data);
            });
    }

    searchHandlerSucc (data){
        if (data.error){
            alert(data.error.message);
            this.props.searchFail(data.error);
            if(data.error.status == 401){
                localStorage.clear();
            }
            return;
        }
        this.props.searchSuc(data);
    }

    formTypeString (artist, track, playlist, album) {
        let arr = [];
        if (artist) {
            arr.push('artist')
        }
        if (track) {
            arr.push('track')
        }
        if (playlist) {
            arr.push('playlist')
        }
        if (album) {
            arr.push('album')
        }
        let lineTypes = arr.join('%2C')
        return(lineTypes)
    }

    render() {
        return (
            <div>
                <SearchFieldReduxForm onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
        searchSt: (payload) => dispatch(searchStart(payload)),
        searchFail: (payload) => dispatch(searchFailure(payload)),
        searchSuc: (payload) => dispatch(searchSuccess(payload))
})

function mapStateToProps(state) {
    const type  = state.search.searchTypes;
    const limit = state.search.searchLimit;
    const searchLinkFromState = state.search.searchLink;
    return { type,limit,searchLinkFromState}
}
const selectorValue = formValueSelector('searchFieldReduxForm');
const selectorLimit = formValueSelector('limitRadio');
const selectorType = formValueSelector('typeButtons')
SearchField = connect(state => {
    const hasSearchValue = selectorValue(state, 'SearchField')
    const hasLimit = selectorLimit(state,'limit')
    const typeArtist =selectorType(state,'artist')
    const typeAlbum = selectorType(state,'album')
    const typeTrack = selectorType(state,'track')
    const typePlaylist = selectorType(state,'playlist')
    return {
        hasSearchValue,
        hasLimit,
        typeArtist,
        typeAlbum,
        typeTrack,
        typePlaylist
    }
})(SearchField)


export default connect(mapStateToProps,mapDispatchToProps)(SearchField)


