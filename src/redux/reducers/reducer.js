const initialState = {
  userNameObject: {},
};

const gitHubUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "newuserNameObject":
      return { ...state, userNameObject: action.payload };
    default:
      return state;
  }
};

export default gitHubUserReducer;
