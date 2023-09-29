import axios from 'axios';

export const GET_PROPERTY = 'GET_PROPERTY'
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
  return async function (dispactch) {
    try {
      const send = await axios.post(`http://localhost:3001/property/post`, form)
      dispactch({
        type: POST_PROPERTY,
        payload: send
      })
    } catch (error) {
      console.error({ message: 'error' });
    }
  }
}
