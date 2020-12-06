import { takeEvery, put, call } from "redux-saga/effects";
import { fetchProjects } from "../utility/fetch";

export default function* sagaWatcher() {
  yield takeEvery("newUserNameObject", fetchUserProjectsInfo);
}

function* fetchUserProjectsInfo(action) {
  yield put({
    type: "newProjectsWithCommits",
    payload: [],
  });
  yield put({
    type: "hideAlert",
  });

  const projectListWithCommits = yield call(
    fetchProjects,
    action.payload.repos_url,
  );
  if (projectListWithCommits.length !== 0) {
    yield put({
      type: "newProjectsWithCommits",
      payload: projectListWithCommits,
    });
  } else {
    yield put({
      type: "newAlert",
      payload: "Ten użytkownik nie ma projektów publicznych",
    });
  }
}
