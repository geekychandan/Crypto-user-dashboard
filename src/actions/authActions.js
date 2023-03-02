export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (username, password) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  // Here you would make an API call to authenticate the user with the given username and password
  // In this example, we will simulate the API call with a timeout and a hard-coded username and password
  setTimeout(() => {
      dispatch({ type: LOGIN_SUCCESS, payload: { username } });
  }, 1000);
};
