import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import counterStore from './Store/Index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {counterStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
