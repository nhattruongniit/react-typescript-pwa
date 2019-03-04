import React from 'react';
import { Header, Sidebar } from '../../common/component';
import { Todo } from '../Todo';

export const App: React.FunctionComponent = () => {
  return (
    <div className='App'>
        <Sidebar />
        <div className='o-container'>
          <Header />
          <div className='o-container__wrapper'>
            <h1>Todo App</h1>
            <Todo />
          </div>
        </div>
    </div>
  );
};
