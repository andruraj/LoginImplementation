import axios from "axios";
//import logininfo from '../login.json'

export const loginUser = userData => dispatch => {
  axios
    .get("login.json")
    .then(res => {
      const data = res.data;
      const out = data.filter(d => d.username === userData.username)[0];
      if (out && out.password === userData.password) {
        const user = out.username;
        localStorage.setItem("user", user);
        dispatch({
          type: "SET_USER",
          payload: user
        });
      } else {
        dispatch({
          type: "SET_ERROR",
          payload: "Invalid Username or Password"
        });
      }
    })
    .catch(err => {
      dispatch({ type: "GET_ERRORS", payload: err });
    });
};

export const setUser = user => dispatch => {
  dispatch({
    type: "SET_USER",
    payload: user
  });
};

export const logout = () => dispatch => {
  localStorage.removeItem("user");
  dispatch(setUser(""));
};

export const getallEmployees = () => dispatch => {
  axios
    .get("employees.json")
    .then(res => {
      //console.log(res.data)
      return dispatch({ type: "GET_ALL_EMPLOYEES", payload: res.data });
    })
    .catch(err => {
      dispatch({ type: "GET_ERRORS", payload: null });
    });
};
