import React from 'react';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/TodoList';
import Completed from './Components/Completed';
const App = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Completed />
    </div>
  );
};

export default App;
