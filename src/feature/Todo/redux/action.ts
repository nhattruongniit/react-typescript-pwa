import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';

import {
  TODO_CALL_REQUEST,
  TODO_CALL_SUCCESS,
  TODO_CALL_FAILURE,
} from './reducer';

const apiAddTodo = () => axios({
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/todos?_limit=5',
})

function* addTodo() {
  try {
    const { data } = yield call(apiAddTodo);
    yield put({ type: TODO_CALL_SUCCESS, data});
  } catch (error) {
    yield put({ type: TODO_CALL_FAILURE, error})
  }
}

export function* watcherTodoSaga() {
  yield takeLatest(TODO_CALL_REQUEST, addTodo);
}