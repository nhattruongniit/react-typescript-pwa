
import {
  TODO_CALL_REQUEST,
  TODO_CALL_SUCCESS,
  TODO_CALL_FAILURE,
} from './action';

const initialState = {
  fetching: false,
  data: [],
  error: null
};

export const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TODO_CALL_REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case TODO_CALL_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.data,
      }
    case TODO_CALL_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      }
    default: 
      return state;
  }
}
