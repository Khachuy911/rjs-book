import DefaultLayout from '../components/Layouts/DefaultLayout/index.tsx';
import HomePage from '../pages/Home/home.js';
import LoginPage from '../pages/Login/login.tsx';
import UploadPage from '../pages/Upload/index.js';

export const publicRoutes = [
  { path: '/', element: HomePage, layout: DefaultLayout },
  { path: '/uploads', element: UploadPage, layout: DefaultLayout },
  { path: '/login', element: LoginPage }
];

export const privateRoutes = [];
