import axios from "axios";
import {
  GET_PROPERTY,
  POST_PROPERTY,
  GET_CATEGORYS,
  FILTER_CATEGORY,
  FILTER_LOCATION,
  GET_LOCATIONS,
  GET_DETAIL,
  CREATE_USER,
  SET_AUTH_STATUS,
  LOGIN_USER,
  GET_RESERVATIONS,
  CANCEL_RESERVE,
  GET_RESERVATIONS_BY_HOME,
  GET_REVIEWS_HOME,
  SET_PRICE_FILTER,
} from "./type-actions";

export const getLogin = (formData) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "https://apibackend-vpxw.onrender.com/user/login",
        formData
      );
      if (response.status === 200) {
        dispatch({
          type: LOGIN_USER,
          payload: { status: 200 },
        });
      }
    } catch (error) {
      dispatch({
        type: LOGIN_USER,
        payload: { status: 401 },
      });
    }
  };
};

export const googleRegister = (userData) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `https://apibackend-vpxw.onrender.com/user/googleLogin`,
        userData
      );
      dispatch({ type: CREATE_USER, payload: response });
      dispatch({ type: SET_AUTH_STATUS, payload: true });
    } catch (error) {
      console.error(error);
    }
  };
};

export const createUser = (postForm) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "https://apibackend-vpxw.onrender.com/user/create",
        postForm
      );
      dispatch({ type: CREATE_USER, payload: response.data });
      dispatch({ type: SET_AUTH_STATUS, payload: true });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getCars = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://apibackend-vpxw.onrender.com/property/gproduct`
      );
      const property = response.data;

      return dispatch({ type: GET_PROPERTY, payload: property });
    } catch (error) {
      console.error("Error al obtener datos de los coches:", error);
    }
  };
};

export const postProperty = (form) => {
  return async function (dispatch) {
    console.log("13", form);
    try {
      const send = await axios.post(
        `https://apibackend-vpxw.onrender.com/property/post`,
        form
      );

      dispatch({
        type: POST_PROPERTY,
        payload: send,
      });
    } catch (error) {
      console.error({ message: "error" });
    }
  };
};

export const getCategory = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://apibackend-vpxw.onrender.com/allcategories/get`
      );
      const data = response.data;
      dispatch({ type: GET_CATEGORYS, payload: data });
    } catch (error) {
      console.error({ message: "error", error });
    }
  };
};

export const filterCat = (category) => {
  return async function (dispatch) {
    if (category === "default") {
      const response = await axios.get(
        `https://apibackend-vpxw.onrender.com/property/gproduct`
      );
      const property = response.data;

      return dispatch({ type: FILTER_CATEGORY, payload: property });
    }
    try {
      const response = await axios.get(
        `https://apibackend-vpxw.onrender.com/filter/category?categoryhome=${category}`
      );
      const data = response.data;
      dispatch({ type: FILTER_CATEGORY, payload: data });
    } catch (error) {
      console.error({ message: "error" });
    }
  };
};

export const filterLocation = (location) => {
  return async function (dispatch) {
    if (location === "default") {
      const response = await axios.get(
        `https://apibackend-vpxw.onrender.com/property/gproduct`
      );
      const property = response.data;

      return dispatch({ type: GET_PROPERTY, payload: property });
    } else {
      try {
        const response = await axios.get(
          `https://apibackend-vpxw.onrender.com/filter/location?locationhome=${location}`
        );

        const data = response.data;
        dispatch({ type: FILTER_LOCATION, payload: data });
      } catch (error) {
        console.error({ message: "error" });
      }
    }
  };
};

export const getLocations = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://apibackend-vpxw.onrender.com/allLocations/get`
      );
      const data = response.data;
      dispatch({ type: GET_LOCATIONS, payload: data });
    } catch (error) {
      console.error({ message: "error" });
    }
  };
};

export const getDetail = (idHouse) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://apibackend-vpxw.onrender.com/property/${idHouse}`
      );

      const detail = response.data;
      dispatch({ type: GET_DETAIL, payload: detail });
    } catch (error) {
      console.error("Error");
    }
  };
};

export const getReservations = (UserEmail) => {
  return async function (dispatch) {
    console.log("kk", UserEmail);
    try {
      const response = await axios.get(
        `https://apibackend-vpxw.onrender.com/reservation/user?email=${UserEmail}`
      );
      const reservations = response.data;
      return dispatch({ type: GET_RESERVATIONS, payload: reservations });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getReservationsByHome = (idHouse) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://apibackend-vpxw.onrender.com/reservation/home/${idHouse}`
      );
      const reservations = response.data;
      return dispatch({
        type: GET_RESERVATIONS_BY_HOME,
        payload: reservations,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const cancel = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
        `https://apibackend-vpxw.onrender.com/reservation/delete/${id}`
      );

      return dispatch({ type: CANCEL_RESERVE });
    } catch (error) {
      console.error(error);
    }
  };
};

export const getReviews = (idHome) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `https://apibackend-vpxw.onrender.com/review/home/${idHome}`
      );
      const reviews = response.data;
      return dispatch({ type: GET_REVIEWS_HOME, payload: reviews });
    } catch (error) {
      console.error(error);
    }
  };
};

export const setPriceFilter = (minPrice, maxPrice) => ({
  type: SET_PRICE_FILTER,
  payload: minPrice,
  maxPrice,
});
