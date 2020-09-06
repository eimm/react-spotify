import { combineReducers } from 'redux'
import search from "./MiscReducer";
import { reducer as reduxFormReducer } from 'redux-form';



export const initialState = {
    loading : false,
    data : {},
    error : '',
    searchTypes : 'track',
    limit: '20'
};




export default combineReducers({
    search,
    form: reduxFormReducer
})