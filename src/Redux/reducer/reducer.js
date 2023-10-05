import axios from 'axios';

import { GET_PROPERTY, GET_CATEGORYS, FILTER_LOCATION, FILTER_CATEGORY, GET_LOCATIONS, GET_DETAIL,LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAILURE, GET_ADMIN_USER_REQUEST, GET_ADMIN_USER_SUCCESS, GET_ADMIN_USER_FAILURE, ADMIN_LOGOUT} from '../action/type-actions';

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
        case ADMIN_LOGIN_REQUEST:
        case GET_USER_REQUEST:
        case GET_ADMIN_USER_REQUEST:
          return {
            ...state,
            loading: true,
            error: null
          };
          case LOGIN_SUCCESS:
            case ADMIN_LOGIN_SUCCESS:
              return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload.user || action.payload,
                error: null
              };
              case GET_USER_SUCCESS:
                return {
                  ...state,
                  isAuthenticated: true,
                  loading: false,
                  user: action.payload,
                  error: null
                };
                case GET_ADMIN_USER_SUCCESS:
                  return {
                    ...state,
                    isAuthenticated: true,
                    loading: false,
                    adminUser: action.payload,
                    error: null
                  };
                  case LOGIN_FAILURE:
                    case ADMIN_LOGIN_FAILURE:
                    case GET_USER_FAILURE:
                    case GET_ADMIN_USER_FAILURE:
                      return {
                        ...state,
                        isAuthenticated: false,
                        loading: false,
                        error: action.payload
                      };
                      case LOGOUT:
                        case ADMIN_LOGOUT:
                          return {
                            ...state,
                            isAuthenticated: false,
                            user: null,
                            adminUser: null
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
