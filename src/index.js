import React from 'react';
import ReactDOM from 'react-dom';
import shoppingListItemReducer from './reducers/shoppingListItemReducer';
import { createStore } from 'redux';


import App from './App';
import './index.css';



const store = createStore(shoppingListItemReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <App store={store}/>,
  document.getElementById('root')
);
