
import { fork, all } from 'redux-saga/effects';

import { watcherTodoSaga } from './feature/Todo/redux/actions';

export default function* rootSaga() {
  yield all([
    fork(watcherTodoSaga),
  ]);
}