import {
    ALL_STORES_REQUEST,
    ALL_STORES_SUCCESS,
    ALL_STORES_FAIL,
    STORE_DETAILS_REQUEST,
    STORE_DETAILS_SUCCESS,
    STORE_DETAILS_FAIL,
    NEW_STORE_REQUEST,
    NEW_STORE_SUCCESS,
    NEW_STORE_FAIL,
  } from "../constants/storeConstants";
  import axios from "axios";
  
  // get All Stores
  export const getAllStores = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_STORES_REQUEST });
      const { data } = await axios.get(`/api/v1/admin/stores`);
  
      dispatch({ type: ALL_STORES_SUCCESS, payload: data.users });
    } catch (error) {
      dispatch({ type: ALL_STORES_FAIL, payload: error.response.data.message });
    }
  };
  
  // get  Store Details
  export const getStoreDetails = (pinCode) => async (dispatch) => {
    try {
      dispatch({ type: STORE_DETAILS_REQUEST });
      const { data } = await axios.get(`/api/v1/store/${pinCode}`);
  
      dispatch({ type: STORE_DETAILS_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: STORE_DETAILS_FAIL, payload: error.response.data.message });
    }
  };

  // Create New Store
  export const newStore = (userData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_STORE_REQUEST});
  
      const { data } = await axios.post(`/api/v1/admin/stores/new`, userData);
  
      dispatch({ type: NEW_STORE_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({
        type: NEW_STORE_FAIL,
        payload: error.response.data.message,
      });
    }
  };