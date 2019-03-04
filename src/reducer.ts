import { combineReducers } from 'redux';

import { todoReducer } from './feature/Todo/redux/reducer';

const allReducers = {
  todo: todoReducer,
};

export default combineReducers({
  ...allReducers,
});