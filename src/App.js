import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import Todo from "./containers/todo.container";
import store from "./components/store";

function App() {
  return (
    <div className="App" >
        <Provider store={store}>
            <Todo/>
        </Provider>
    </div>
  );
}

export default App;
