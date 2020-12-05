const initialState = {
  userNameObject: {},
  projectsWithCommits: [],
};

const gitHubUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "newUserNameObject":
      return { ...state, userNameObject: action.payload };
    case "newProjectsWithCommits":
      return { ...state, projectsWithCommits: action.payload };
    default:
      return state;
  }
};

export default gitHubUserReducer;
