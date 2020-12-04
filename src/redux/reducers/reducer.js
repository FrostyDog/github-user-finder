const initialState = {
  currentUser: {},
};

const gitHubUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "newUser":
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

export default gitHubUserReducer;
