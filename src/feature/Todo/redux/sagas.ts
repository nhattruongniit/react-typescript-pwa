
import { takeLatest, call, put } from 'redux-saga/effects';

import { 
  TODO_FETCH_REQUEST,
  TODO_DELETE_REQUEST,
 } from './contants';

import {
  getTodo,
  deleteTodoApi,
} from '../api';

import { 
  fetchTodoSuccess,
  fetchTodoFailure,
  deleteTodoSuccess,
  deleteTodoFailure,
} from './actions';

function* fetchTodo() {
  try {
    const data = yield call(getTodo);
    yield put(fetchTodoSuccess(data));
  } catch (error) {
    const { response: { status }} = error;
    yield put(fetchTodoFailure(status))
  }
}

export function* watcherTodoSaga() {
  yield takeLatest(TODO_FETCH_REQUEST, fetchTodo);
}

function* deleteTodo({ id } : any) {
  try {
    const data = yield call(deleteTodoApi, id);
    yield put(deleteTodoSuccess(data));
  } catch (error) {
    const { response: { status }} = error;
    yield put(deleteTodoFailure(status))
  }
}

export function* watcherDeleteTodoSaga() {
  yield takeLatest(TODO_DELETE_REQUEST, deleteTodo);
}
