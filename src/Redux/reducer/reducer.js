import axios from 'axios';

import { GET_PROPERTY, GET_CATEGORYS, FILTER_LOCATION, FILTER_CATEGORY, GET_LOCATIONS } from '../action/type-actions';

let initialState = {
    property: [],
    copyPropertys: [],
    category: [],
    location: [],
    filterCategory: [],
    filterLocation: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROPERTY:
            return {
                ...state,
                property: action.payload,
                copyPropertys: action.payload,
            }
        case GET_CATEGORYS:
            return {
                ...state, 
                category: action.payload
            }
        case FILTER_CATEGORY:
                return{
                    ...state,
                    property: action.payload,
                }
          
            
        case FILTER_LOCATION:
            return{
                ...state,
                filterLocation: action.payload,
                property: state.filterLocation
            }
        case GET_LOCATIONS:
            return{
                ...state,
                location: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;
