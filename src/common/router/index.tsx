import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '@/App'
import {
  HomePage,
  PasswordGeneratorPage,
  PasswordsListPage,
  NotFoundPage,
} from '@pages/index';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PasswordGeneratorPage />} />
          <Route path={'home'} element={<HomePage />} />
          <Route path={'passwords-generator'} element={<PasswordGeneratorPage />} />
          <Route path={'passwords-list'} element={<PasswordsListPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
