import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import LoginView from './Components/LoginView';
import { BrowserRouter } from 'react-router-dom'
// import "../node_modules/@syncfusion/ej2-base/styles/mat"
// import "../node_modules/@syncfusion/ej2-base/styles/material.css";
// import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
// import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
// import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
// import "../node_modules/@syncfusion/ej2-react-calendars/styles/material.css";
// import "../node_modules/rsuite/dist/rsuite.min.css"
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import {fromDataSlice} from "../src/redux/reducer"

import reducer from './redux/reducer';

// const store = createStore(reducer)
const store = configureStore({
  reducer: {
    taskManager: fromDataSlice.reducer,
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
    {/* <LoginView/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
