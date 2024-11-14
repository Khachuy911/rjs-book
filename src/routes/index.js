import HomePage  from '../pages/Home';
import UploadPage from '../pages/Upload';

export const publicRoutes = [
  { path: '/', element: HomePage, layout: 'Default' },
  { path: '/uploads', element: UploadPage, layout: 'Default' }
];

export const privateRoutes = [];
