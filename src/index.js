import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './components/Page.js';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import rootReducer from "./Reducers/Reducers";
import search from "./Reducers/MiscReducer";
import { createStore } from 'redux'


const store = createStore(rootReducer)

const root = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
    <Page/>,
    </Provider>,
  root
);
console.log(store.getState());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
