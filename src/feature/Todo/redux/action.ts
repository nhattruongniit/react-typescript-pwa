import { takeLatest, call, put } from 'redux-saga/effects';

import { getTodo } from '../api';

export const TODO_CALL_REQUEST = 'TODO_CALL_REQUEST';
export const TODO_CALL_SUCCESS = 'TODO_CALL_SUCCESS';
export const TODO_CALL_FAILURE = 'TODO_CALL_FAILURE';

function* fetchTodo() {
  try {
    const data = yield call(getTodo);
    yield put({ type: TODO_CALL_SUCCESS, data});
  } catch (error) {
    yield put({ type: TODO_CALL_FAILURE, error})
  }
}

export function* watcherTodoSaga() {
  yield takeLatest(TODO_CALL_REQUEST, fetchTodo);
}
