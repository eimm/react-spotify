import {
    ADD_ARTIST_FIELD,
    ADD_TRACK_FIELD,
    ADD_ALBUM_FIELD,
    ADD_PLAYLIST_FIELD,
    SEARCH_START,
    SEARCH_FAIL,
    SEARCH_SUC,
    CHANGE_SEARCH_TYPES,
    CHANGE_SEARCH_LIMIT
} from './ActionTypes'

export const searchContent = {
    TRACK: 'TRACK',
    ARTIST: 'ARTIST',
    ALBUM: 'ALBUM',
    PLAYLIST :'PLAYLIST'
}

export const addNewArtist = body => ({
    type: ADD_ARTIST_FIELD,
    body
})

export const addNewTrack = body => ({
    type: ADD_TRACK_FIELD,
    body
})

export const addNewAlbum = body => ({
    type: ADD_ALBUM_FIELD,
    body
})

export const addNewPlaylist = body => ({
    type: ADD_PLAYLIST_FIELD,
    body
})

export const searchStart = (data) => ({
    type: SEARCH_START,
    data
})

export const searchFailure = (e) => ({
    type: SEARCH_FAIL,
    e
})

export const searchSuccess = (data) => ({
    type: SEARCH_SUC,
    data
})

export const changeSearchType = (payload)=>({
    type: CHANGE_SEARCH_TYPES,
    payload
})

export const changeSearchLimit = (payload)=>({
    type: CHANGE_SEARCH_LIMIT,
    payload
})