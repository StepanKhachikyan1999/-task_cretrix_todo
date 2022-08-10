import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore } from "redux";
import RootReducer from "./redux/reducers/index";
import {
  BrowserRouter,
} from "react-router-dom";
import SingleTodo from './components/SingleTodo';

// styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(RootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
       <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
