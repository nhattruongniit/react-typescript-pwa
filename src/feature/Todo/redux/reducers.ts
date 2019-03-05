import {
  TODO_FETCH_REQUEST,
  TODO_FETCH_SUCCESS,
  TODO_FETCH_FAILURE,

  TODO_DELETE_REQUEST,
  TODO_DELETE_SUCCESS,
  TODO_DELETE_FAILURE,
} from './contants';

interface IAction {
  type: string;
  payload: any;
}

const initialState = {
  fetching: false,
  data: [],
  error: null
};

export const todoReducer = (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case TODO_FETCH_REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case TODO_FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: payload,
      }
    case TODO_FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
        error: payload,
      }
      case TODO_DELETE_REQUEST:
      return {
        ...state,
        fetching: true,
      }
    case TODO_DELETE_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: payload,
      }
    case TODO_DELETE_FAILURE:
      return {
        ...state,
        fetching: false,
        error: payload,
      }
    default: 
      return state;
  }
}
