import { createStore } from "redux";
import gitHubUserReducer from "./reducers/reducer";

const store = createStore(gitHubUserReducer);
export default store;
