import { GET_PROPERTY, POST_PROPERTY, GET_CATEGORYS, FILTER_LOCATION, FILTER_CATEGORY, GET_LOCATIONS, GET_DETAIL, LOGIN_USER, SET_AUTH_STATUS, GET_RESERVATIONS, GET_RESERVATIONS_BY_HOME} from '../action/type-actions';

let initialState = {
  property: [],
  copyPropertys: [],
  category: [],
  location: [],
  filterCategory: [],
  filterLocation: [],
  propertyDetail: {},
  loginUser:[],
  isAuthenticated:false,
  reservations:[]
}


function rootReducer(state = initialState, action) {
  switch (action.type) {
      case GET_PROPERTY:
          return {
              ...state,
              property: action.payload,
              copyPropertys: action.payload,
          }
      case POST_PROPERTY:
          return {
              ...state,
              property: action.payload
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
                case SET_AUTH_STATUS:
                    return{
                        ...state,
                        isAuthenticated: action.payload
                    }

                case GET_RESERVATIONS:
                    return {
                        ...state,
                        reservations: action.payload
                    }
                
                case GET_RESERVATIONS_BY_HOME:
                    return {
                        ...state, 
                        reservations: action.payload
                    }
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;
