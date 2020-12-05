import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import gitHubUserReducer from "./reducers/reducer";
import fetchUserProjectsInfo from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(gitHubUserReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchUserProjectsInfo);
export default store;
