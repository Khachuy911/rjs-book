import DefaultLayout from '../components/Layouts/DefaultLayout';
import HomePage  from '../pages/Home';
import LoginPage from '../pages/Login';
import UploadPage from '../pages/Upload';

export const publicRoutes = [
  { path: '/', element: HomePage, layout: DefaultLayout },
  { path: '/uploads', element: UploadPage, layout: DefaultLayout },
  { path: '/login', element: LoginPage, layout: DefaultLayout }
];

export const privateRoutes = [];
