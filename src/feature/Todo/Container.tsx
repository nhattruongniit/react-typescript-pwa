import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { IPropsTodo, IStateTodo } from './interface/ITodo';

import { TodoList } from './component';
import { useStateTodo } from './hooks/useStateTodo';

const Todo: React.FunctionComponent<IPropsTodo> = ({ fetching, data, error, fetchTodo }) => {
  const { todos, deleteTodo, completeTodo, initTodo } = useStateTodo();
  const fetchData = () => {
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
    <div className="App">
      {error && <div>some thing went wrong ... </div>}
      <TodoList 
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo} />
        {fetching ? 'this is true' : 'this is false'}
    </div>
  );
};

const mapStateToProps = (
  { todo: { fetching, data, error } }: IStateTodo
) => ({
  fetching,
  data,
  error,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchTodo: () => dispatch({ type: 'TODO_CALL_REQUEST' })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);