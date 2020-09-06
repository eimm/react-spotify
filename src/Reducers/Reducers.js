import { combineReducers } from 'redux'
import search from "./MiscReducer";


export const initialState = {
    loading : false,
    data : {},
    error : '',
    searchTypes : 'track',
    searchLimit: '20'
};




export default combineReducers({
    search
})