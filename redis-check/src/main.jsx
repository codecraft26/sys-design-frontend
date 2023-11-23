import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter, Routes,Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
  <Routes>


      <Route path="/users/:userID" component={App} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)