import {
  TODO_FETCH_REQUEST,
  TODO_FETCH_SUCCESS,
  TODO_FETCH_FAILURE,
} from './contants';

export const fetchTodoRequest = () => ({ type: TODO_FETCH_REQUEST });
export const fetchTodoSuccess = (data: any) => ({ type: TODO_FETCH_SUCCESS, data })
export const fetchTodoFailure = (error: any) => ({ type: TODO_FETCH_FAILURE, error })

// import { takeLatest, call, put } from 'redux-saga/effects';
// import { getTodo, deleteTodoApi } from '../api';
// function* fetchTodo() {
//   try {
//     const data = yield call(getTodo);
//     yield put({ type: TODO_FETCH_SUCCESS, data});
//   } catch (error) {
//     yield put({ type: TODO_FETCH_FAILURE, error})
//   }
// }

// export function* watcherTodoSaga() {
//   yield takeLatest(TODO_FETCH_REQUEST, fetchTodo);
// }
