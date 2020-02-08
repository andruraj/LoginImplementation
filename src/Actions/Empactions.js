import axios from "axios";
//import logininfo from '../login.json'

export const getlogininfo = () => dispatch => {
  axios
    .get("login.json")
    .then(res => {
      //console.log(res.data)
      return dispatch({ type: "GET_LOGIN_INFO", payload: res.data });
    })
    .catch(err => {
      dispatch({ type: "GET_ERRORS", payload: null });
    });
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
