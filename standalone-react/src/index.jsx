import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import ReactApp from './assets/react-folder/react'
import Dashboard2 from './Projects/ES-Dictionary/pages/Dashboard2/Dashboard2';
import Dashboard1 from './Projects/ES-Dictionary/pages/Dashboard1/Dashboard1';
import './index.css'


const Page = (
  <React.StrictMode>
    <BrowserRouter>
      <Dashboard1/>
    </BrowserRouter>
  </React.StrictMode>
  

)

const DOM = ReactDOM.createRoot(document.getElementById('root'))
DOM.render(Page)