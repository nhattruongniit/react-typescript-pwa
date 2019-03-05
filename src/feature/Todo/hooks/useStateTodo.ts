import {useState} from 'react';
import { ITodo } from '../models/ITodo';

export const useStateTodo = (initialValue: ITodo[] = []) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    initTodo: (todoList: ITodo[]) => {
      setTodos(todoList);
    },
    addTodo: (todo: ITodo) => {
      setTodos([...todos, todo]);
    },
    deleteTodo: (id: number) => {
      // deleteTodoApi(id);
      // const updatedTodos = todos.filter((_, index) => index !== id);
      // setTodos(updatedTodos);
    },
    completeTodo: (id: number) => {
      const cloned = [...todos];
      cloned[id].isCompleted = !cloned[id].isCompleted;
      setTodos(cloned);
    },
  };
};
