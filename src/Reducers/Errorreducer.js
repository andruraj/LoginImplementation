const initState = {
  error: ""
};

const errorReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ERRORS":
      return action.payload;
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload
      };
    case "CLEAR_ERRORS":
      return {};
    default:
      return state;
  }
};

export default errorReducer;
