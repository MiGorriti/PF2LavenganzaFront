import axios from 'axios';

import {GET_PROPERTY} from '../action/actions'

let initialState = {
    property: [],
    copyPropertys: []
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

        default:
            return {
                ...state
            }
    }
}

export default rootReducer;
