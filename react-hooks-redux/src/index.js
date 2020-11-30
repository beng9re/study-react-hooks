import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import rootReducer from './modules/rootReducer'
import {Provider} from 'react-redux'
//import './exercise'


const store = createStore(rootReducer); // 스토어를 만듭니다.
//console.log(store.getState()); // 스토어의 상태확인


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
