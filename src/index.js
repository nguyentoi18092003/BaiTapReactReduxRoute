import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//1
import { BrowserRouter } from 'react-router-dom';
//2
import allReducers from './reducers';
//3
import { createStore } from 'redux';
//4
import { Provider } from 'react-redux';
//*1
const store=createStore(allReducers);
//import tu 2,3
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* store la tu *1 */}
    {/* Phai boc Provider ben ngaoi app thi no ms dung dc kho luu tru router chung */}
      <BrowserRouter>
      {/* import tu 1 */}
      {/* Phai co browserRouter nay boc o ngoai thang app thi no ms dung duoc tat ca router o moi noi */}
        <App />
      </BrowserRouter>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
