const initState = {
  user: "",
  empdata: "",
  auth: false
};

const Empreducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        auth: true
      };

    case "GET_ALL_EMPLOYEES": {
      return {
        ...state,
        empdata: action.payload
      };
    }
    default:
      return state;
  }
};

export default Empreducer;
