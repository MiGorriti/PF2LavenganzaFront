import axios from 'axios';

import { GET_PROPERTY, GET_CATEGORYS, FILTER_LOCATION, FILTER_CATEGORY, GET_LOCATIONS, GET_DETAIL, LOGIN_USER} from '../action/type-actions';

let initialState = {
    property: [],
    copyPropertys: [],
    category: [],
    location: [],
    filterCategory: [],
    filterLocation: [],
    propertyDetail: {},
    loginUser:[]
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
            case GET_DETAIL:
                return{
                    ...state,
                    propertyDetail: action.payload
                }
                case LOGIN_USER:
                    return{
                        ...state,
                        loginUser: action.payload
                    }    
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;
