import React from 'react';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';

import { ITodo, ITodoList } from '../interface';

export const TodoList: React.FunctionComponent<ITodoList> = ({todos, completeTodo, deleteTodo}) => (
  <List>
    {todos.map((todo: ITodo, index: number) => (
      <ListItem key={index} dense button>
        <ListItemText primary={todo.title} style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}/>
        <div className='buttonMaterial'>
          <Button
            variant={'contained'}
            color={'primary'}
            className={`btn-${todo.isCompleted ? 'completed' : 'complete'}`}
            onClick={() => {
                completeTodo(index);
          }}> {todo.isCompleted ? 'Undo' : 'Complete'} </Button>
          <Button
            variant={'contained'}
            color={'secondary'}
            onClick={() => {
                deleteTodo(index);
            }}> Delete </Button>
        </div>
      </ListItem>
    ))}
  </List>
);
