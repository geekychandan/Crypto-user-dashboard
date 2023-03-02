import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
  } from "../actions/authActions";
  
  const initialState = {
    loading: false,
    error: null,
    username: ""
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return { ...state, loading: true, error: null };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          username: action.payload.username
        };
      case LOGIN_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default authReducer;
  