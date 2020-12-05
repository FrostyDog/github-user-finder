import { takeEvery, put, call } from "redux-saga/effects";
import { fetchProjects } from "../utility/fetch";

export default function* sagaWatcher() {
  yield takeEvery("newUserNameObject", fetchUserProjectsInfo);
}

function* fetchUserProjectsInfo(action) {
  const projectListWithCommits = yield call(
    fetchProjects,
    action.payload.repos_url,
  );

  yield put({
    type: "newProjectsWithCommits",
    payload: projectListWithCommits,
  });
}
