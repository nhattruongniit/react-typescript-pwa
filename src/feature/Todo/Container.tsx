import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { TodoList } from './component';
import { useStateTodo } from './hooks/useStateTodo';

import { Loading } from '../../core/component/Loading';

interface IStateTodo {
  todo: any;
}

interface IPropsTodo {
  fetching: boolean;
  data: [];
  error: string;
  fetchTodoRequest: () => void;
  deleteTodoRequest: any;
}

const Todo: React.FunctionComponent<IPropsTodo> = ({ fetching, data, error, fetchTodoRequest, deleteTodoRequest }) => {
  const { todos, completeTodo, initTodo } = useStateTodo();
  const fetchData = async () => {
    fetchTodoRequest();
    initTodo(data);
  };

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    initTodo(data);
  }, [data])

  const deleteTodo = (id: number) => {
    deleteTodoRequest(id);
  }
  
  return (
    <>
      {error && <div>some thing went wrong ... </div>}
      <TodoList 
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo} 
      />
      {fetching && <Loading /> }
    </>
  );
};

const mapStateToProps = (
  { todo: { fetching, data, error } }: IStateTodo
) => ({
  fetching,
  data,
  error,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchTodoRequest: () => dispatch({ type: 'TODO_FETCH_REQUEST' }),
  deleteTodoRequest: (id: number) => dispatch({ type: 'TODO_DELETE_REQUEST', id })
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);