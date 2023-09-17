import { useRoutes } from 'react-router-dom'
import App from '@/App'
import {
  PasswordGeneratorPage,
  PasswordsListPage,
  NotFoundPage,
} from '@pages/index';

export const MainRouter = () => {

  const routes = useRoutes([
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '/',
          element: <PasswordGeneratorPage />,
        },
        {
          path: 'passwords-list',
          element: <PasswordsListPage />,

        },
      ],
    },
    { path: '*', element: <NotFoundPage /> },
  ]);

  return routes
}
