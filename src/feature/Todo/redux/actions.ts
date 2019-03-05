import {
  TODO_FETCH_REQUEST,
  TODO_FETCH_SUCCESS,
  TODO_FETCH_FAILURE,

  TODO_DELETE_REQUEST,
  TODO_DELETE_SUCCESS,
  TODO_DELETE_FAILURE,
} from './contants';

export const fetchTodoRequest = () => ({ type: TODO_FETCH_REQUEST });
export const fetchTodoSuccess = (payload: any) => ({ type: TODO_FETCH_SUCCESS, payload });
export const fetchTodoFailure = (payload: any) => ({ type: TODO_FETCH_FAILURE, payload });

export const deleteTodoRequest = () => ({ type: TODO_DELETE_REQUEST });
export const deleteTodoSuccess = (payload: any) => ({ type: TODO_DELETE_SUCCESS, payload });
export const deleteTodoFailure = (payload: any) => ({ type: TODO_DELETE_FAILURE, payload });