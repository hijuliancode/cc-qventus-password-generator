import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { MainRouter } from './common/router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>,
)
