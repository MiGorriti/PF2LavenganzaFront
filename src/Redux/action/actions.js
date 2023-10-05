import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, GET_PROPERTY, POST_PROPERTY, GET_CATEGORYS, FILTER_CATEGORY, FILTER_LOCATION, GET_LOCATIONS, GET_DETAIL, CREATE_USER , ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAILURE, GET_ADMIN_USER_REQUEST, GET_ADMIN_USER_SUCCESS, GET_ADMIN_USER_FAILURE, ADMIN_LOGOUT, GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAILURE } from './type-actions';


export const loginUser = (email, password) => {
  return async function (dispatch) {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const response = await axios.post('http://localhost:3001/user/login', { email, password });
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message || 'Failed to login' });
    }
  };
};

export const getUser = (userId, accessToken) => {
  return async function (dispatch) {
    dispatch({ type: GET_USER_REQUEST });
    try {
      const response = await axios.get(`http://localhost:3001/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      dispatch({ type: GET_USER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_USER_FAILURE, payload: error.message || 'Error getting user data' });
    }
  };
};

export const logout = () => ({
  type: LOGOUT
});


export const adminLogin = (credentials) => {
  return async function (dispatch) {
    dispatch({ type: ADMIN_LOGIN_REQUEST });
    try {
      // Hacer la solicitud al servidor para iniciar sesión del administrador
      const response = await axios.post('http://localhost:3001/admin/login', credentials);
      dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: response.data });
      // Obtener datos del administrador después del inicio de sesión (opcional)
      dispatch(getAdminUser(response.data.userId, response.data.accessToken));
    } catch (error) {
      dispatch({ type: ADMIN_LOGIN_FAILURE, payload: error.message || 'Administrator login error' });
    }
  };
};


export const getAdminUser = (userId, accessToken) => {
  return async function (dispatch) {
    dispatch({ type: GET_ADMIN_USER_REQUEST });
    try {
      // Hacer la solicitud al servidor para obtener datos del administrador
      const response = await axios.get(`'http://localhost:3001/admin:'${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      dispatch({ type: GET_ADMIN_USER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GET_ADMIN_USER_FAILURE, payload: error.message || 'Error al obtener datos del administrador' });
    }
  };
};


export const adminLogout = () => ({
  type: ADMIN_LOGOUT
});


export const createUser = (postForm) => {
  return async function (dispatch) {
    try {
      const response = await axios.post('http://localhost:3001/user/create', postForm);
      dispatch({ type: CREATE_USER, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
};


export const getUsersRequest = () => ({
  type: GET_USERS_REQUEST
});

export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users
});

export const getUsersFailure = (error) => ({
  type: GET_USERS_FAILURE,
  payload: error
});

export const getUsers = () => {
  return async (dispatch) => {
    dispatch(getUsersRequest());
    try {
      // Realiza una solicitud para obtener la lista de usuarios
      const response = await axios.get('http://localhost:3001/users-list');
      dispatch(getUsersSuccess(response.data));
    } catch (error) {
      dispatch(getUsersFailure(error.message || "Error al obtener usuarios"));
    }
  };
};


export const getCars = () => {
  return async (dispatch)=> {
    try {
      const response = await axios.get(
        `http://localhost:3001/property/gproduct`
        );
        const property = response.data;
        
     return dispatch({ type:GET_PROPERTY, payload: property });
    } catch (error) {
      console.error("Error al obtener datos de los coches:", error);
    }
  };
};

export const postProperty = (form) => {
  return async function (dispatch) {
    try {
      const send = await axios.post(`http://localhost:3001/property/post`, form)
     
      dispatch({
        type: POST_PROPERTY,
        payload: send
      })
    } catch (error) {
      console.error({ message: 'error' });
    }
  }
}

export const getCategory = () =>{
  return async function (dispatch){
    try {
      const response = await axios.get(`http://localhost:3001/allcategories/get`)
      const data = response.data
      dispatch({type: GET_CATEGORYS, payload: data})
    } catch (error) {
      console.error({message: 'error', error})
    }
  }
}

export const filterCat = (category) =>{
  return async function (dispatch) {
    if(category === "default"){
      const response = await axios.get(
        `http://localhost:3001/property/gproduct`
        );
        const property = response.data;
        
     return dispatch({ type:FILTER_CATEGORY, payload: property });
    }
     try {
     const response = await axios.get(`http://localhost:3001/filter/category?categoryhome=${category}`)
     const data = response.data
     dispatch({type:FILTER_CATEGORY, payload: data})
       
     } catch (error) {
       console.error({message: 'error'});
   }}
   
}

export const filterLocation = (location) =>{
  return async function (dispatch){
    if(location === "default"){
      const response = await axios.get(
        `http://localhost:3001/property/gproduct`
        );
        const property = response.data;
        
     return dispatch({ type:GET_PROPERTY, payload: property });
    }else{

      try {
        const response = await axios.get(`http://localhost:3001/filter/location?locationhome=${location}`)
       
        const data = response.data
        dispatch({type: FILTER_LOCATION, payload: data})
      } catch (error) {
        console.error({message: 'error'});
      }
    }
    }
}

export const getLocations = () =>{
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/allLocations/get`)
      const data = response.data
      dispatch({type: GET_LOCATIONS, payload: data})
    } catch (error) {
      console.error({message: 'error'});
    }
  }
}

export const getDetail = (idHouse) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/property/${idHouse}`
      );

      const detail = response.data;
      dispatch({ type: GET_DETAIL, payload: detail });
    } catch (error) {
      console.error("Error");
    }
  };
};

