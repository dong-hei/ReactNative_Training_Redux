import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import counter from './reducer';
import rootReducer from './reducer';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(rootReducer);

const render = () => {
  const state = store.getState();
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App
          counter={state.counter} // counter 상태 전달
          todos={state.todos} // todos 상태 전달
          onIncrement={() => store.dispatch({ type: 'INCREMENT' })} // 인크리먼트 디스패치
          OnDecrement={() => store.dispatch({ type: 'DECREMENT' })} // 디크리먼트 디스패치
          addTodo={(text) => store.dispatch({ type: 'ADD_TODO', text })} // 할 일 추가
          deleteTodo={(text) => store.dispatch({ type: 'DELETE_TODO', text })} // 할 일 삭제
        />
      </Provider>
    </React.StrictMode>,
  );
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

render();

store.subscribe(render);
