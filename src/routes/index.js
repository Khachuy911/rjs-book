import DefaultLayout from '../components/Layouts/DefaultLayout/index.jsx';
import HomePage from '../pages/Home/Home.jsx';
import LoginPage from '../pages/Login/Login.jsx';
import UploadPage from '../pages/Upload/Upload.jsx';

export const publicRoutes = [
  { path: '/login', element: LoginPage },
  { path: '/', element: HomePage, layout: DefaultLayout }
];

export const privateRoutes = [{ path: '/uploads', element: UploadPage, layout: DefaultLayout }];
