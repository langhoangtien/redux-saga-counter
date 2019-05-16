import { put, call, takeEvery } from "redux-saga/effects";

const delay = ms => new Promise(res => setTimeout(res, ms));
function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

function test() {
  alert("ggg");
}
export default function* rootSaga() {
  console.log("dd");
  yield takeEvery("INCREMENT_ASYNC", test);
}
