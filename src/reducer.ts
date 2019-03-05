import { combineReducers } from 'redux';

import { todoReducer } from './feature/Todo/redux/reducers';

const allReducers = {
  todo: todoReducer,
};

export default combineReducers({
  ...allReducers,
});