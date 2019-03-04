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
  fetchTodo: () => void;
}

const Todo: React.FunctionComponent<IPropsTodo> = ({ fetching, data, error, fetchTodo }) => {
  const { todos, deleteTodo, completeTodo, initTodo } = useStateTodo();
  const fetchData = async () => {
    fetchTodo();
    initTodo(data);
  };

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    initTodo(data);
  }, [data])

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
  fetchTodo: () => dispatch({ type: 'TODO_CALL_REQUEST' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);