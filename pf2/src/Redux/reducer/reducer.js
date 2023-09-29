import axios from 'axios';

import { GET_PROPERTY, GET_CATEGORYS } from '../action/type-actions';

let initialState = {
    property: [],
    copyPropertys: [],
    category: [],
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROPERTY:
            console.log("hola", state.property);
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
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;
