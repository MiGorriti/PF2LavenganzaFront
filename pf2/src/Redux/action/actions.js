import axios from 'axios';
import {FILTER_CATEGORY, FILTER_LOCATION, GET_CATEGORYS, GET_LOCATIONS, GET_PROPERTY, POST_PROPERTY} from './type-actions'
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