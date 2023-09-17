import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../../App'

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<div>
            <h1>Password Generator</h1>
          </div>} />
          <Route path={'/about'} element={<div>
            <h1>About</h1>
          </div>} />
        </Route>
        <Route path="*" element={<div>
          <h1>404</h1>
        </div>} />
      </Routes>
    </BrowserRouter>
  );
}
