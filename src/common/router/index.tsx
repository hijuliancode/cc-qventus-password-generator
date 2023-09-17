import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../../App'
import { HomePage, NotFoundPage, PasswordGeneratorPage, PasswordsListPage } from '../../pages';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PasswordGeneratorPage />} />
          <Route path={'home'} element={<HomePage />} />
          <Route path={'password-generator'} element={<PasswordGeneratorPage />} />
          <Route path={'passwords-list'} element={<PasswordsListPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
