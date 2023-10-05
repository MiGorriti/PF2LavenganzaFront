import axios from 'axios';

import { GET_PROPERTY, GET_CATEGORYS, FILTER_LOCATION, FILTER_CATEGORY, GET_LOCATIONS, GET_DETAIL,LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT} from '../action/type-actions';

let initialState = {
    user: null,
    accessToken: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    property: [],
    copyPropertys: [],
    category: [],
    location: [],
    filterCategory: [],
    filterLocation: [],
    propertyDetail: {},
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        isAuthenticated: true,
        loading: false,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        accessToken: null,
        isAuthenticated: false,
        loading: false,
        error: action.payload.error
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        accessToken: null,
        isAuthenticated: false,
        loading: false,
        error: null
      };
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
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;
