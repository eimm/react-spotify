import {CHANGE_SEARCH_LIMIT, SEARCH_FAIL} from "../Actions/ActionTypes";
import {SEARCH_SUC} from "../Actions/ActionTypes";
import {SEARCH_START} from "../Actions/ActionTypes";
import {CHANGE_SEARCH_TYPES} from "../Actions/ActionTypes";
import {initialState} from "./Reducers";

const search = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_START:
            return {
                ...state,
                loading: true
            }
        case SEARCH_SUC:
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case SEARCH_FAIL:
            return {
                ...state,
                loading: false,
                error: action.e
            }
        case CHANGE_SEARCH_TYPES:
            return {
                ...state,
                searchTypes: action.payload,
            }
        case CHANGE_SEARCH_LIMIT:
            return {
                ...state,
                searchLimit: action.payload,
            }
        default:
            return state
    }
}

export default search