import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App({
  counter,
  todos = [],
  onIncrement,
  OnDecrement,
  addTodo,
  deleteTodo,
}) {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div className="App">
      <div>
        Clicked: {counter} times
        <button onClick={onIncrement}>+</button>
        <button onClick={OnDecrement}>-</button>
      </div>
      <div>
        <h3>Todo List</h3>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => deleteTodo(todo)}>Delete</button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => addTodo(inputValue)}>Add Todo</button>
      </div>
    </div>
  );
}

export default App;
