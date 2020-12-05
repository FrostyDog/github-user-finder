const initialState = {
  userNameObject: {},
  projectsWithCommits: [],
  alertArea: null,
};

const gitHubUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "newUserNameObject":
      return { ...state, userNameObject: action.payload };
    case "newProjectsWithCommits":
      return { ...state, projectsWithCommits: action.payload };
    case "newAlert":
      return { ...state, alertArea: action.payload };
    case "hideAlert":
      return { ...state, alertArea: null };
    default:
      return state;
  }
};

export default gitHubUserReducer;
