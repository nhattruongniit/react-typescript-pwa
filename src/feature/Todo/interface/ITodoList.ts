import { ITodo } from './ITodo';

export interface ITodoList {
  todos: ITodo[];
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}
