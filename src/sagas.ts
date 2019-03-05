
import { fork, all } from 'redux-saga/effects';

import { watcherTodoSaga, watcherDeleteTodoSaga } from './feature/Todo/redux/sagas';

export default function* rootSaga() {
  yield all([
    fork(watcherTodoSaga),
    fork(watcherDeleteTodoSaga),
  ]);
}