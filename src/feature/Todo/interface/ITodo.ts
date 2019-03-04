export interface ITodo {
  id: number;
  title: string;
  isCompleted: boolean;
}

export interface IStateTodo {
  todo: any;
}

export interface IPropsTodo {
  fetching: boolean;
  data: [];
  error: string;
  fetchTodo: () => void;
}
