import axios from 'axios';
<<<<<<< HEAD
import {FILTER_CATEGORY, FILTER_LOCATION, GET_CATEGORYS, GET_LOCATIONS, GET_PROPERTY, POST_PROPERTY, GET_DETAIL, CREATE_USER} from './type-actions'

=======
<<<<<<< HEAD:pf2/src/Redux/action/actions.js
<<<<<<< Updated upstream
import {FILTER_CATEGORY, FILTER_LOCATION, GET_CATEGORYS, GET_LOCATIONS, GET_PROPERTY, POST_PROPERTY} from './type-actions'
=======
import {FILTER_CATEGORY, FILTER_LOCATION, GET_CATEGORYS, GET_LOCATIONS, GET_PROPERTY, POST_PROPERTY, GET_DETAIL, CREATE_USER} from './type-actions'

>>>>>>> Stashed changes
=======
import {FILTER_CATEGORY, FILTER_LOCATION, GET_CATEGORYS, GET_LOCATIONS, GET_PROPERTY, POST_PROPERTY, GET_DETAIL} from './type-actions'
>>>>>>> 3d372cbac81204d4e450c53cbd6c20cba41fceb6:src/Redux/action/actions.js
>>>>>>> f001fde9878a6bddd2edf5f5aecfa860fb3ff5dd
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
<<<<<<< HEAD:pf2/src/Redux/action/actions.js
<<<<<<< Updated upstream
=======
=======
>>>>>>> 3d372cbac81204d4e450c53cbd6c20cba41fceb6:src/Redux/action/actions.js
}

export const getDetail = (idHouse) => {
  return async function (dispatch) {
<<<<<<< HEAD:pf2/src/Redux/action/actions.js
    console.log(idHouse)
    try {
      const response = await axios.get(
        `http://localhost:3001/property/${idHouse}`
=======
    try {
      const response = await axios.get(
<<<<<<< HEAD
        `http://localhost:3001/property/${idHouse}`
=======
        `http://localhost:3001/product/${idHouse}`
>>>>>>> 3d372cbac81204d4e450c53cbd6c20cba41fceb6:src/Redux/action/actions.js
>>>>>>> f001fde9878a6bddd2edf5f5aecfa860fb3ff5dd
      );

      const detail = response.data;
      dispatch({ type: GET_DETAIL, payload: detail });
    } catch (error) {
      console.error("Error");
    }
  };
<<<<<<< HEAD
=======
<<<<<<< HEAD:pf2/src/Redux/action/actions.js
>>>>>>> f001fde9878a6bddd2edf5f5aecfa860fb3ff5dd
};

export const createUser = (postForm) =>{
  return async function (req, res){
try {
  const response = axios.post(`http://localhost:3001/user/create`, postForm)
  dispatch({type: CREATE_USER, payload: response})
  
} catch (error) {
  console.error(error);  
}
  }
<<<<<<< HEAD
}
=======
>>>>>>> Stashed changes
}
=======
};
>>>>>>> 3d372cbac81204d4e450c53cbd6c20cba41fceb6:src/Redux/action/actions.js
>>>>>>> f001fde9878a6bddd2edf5f5aecfa860fb3ff5dd
