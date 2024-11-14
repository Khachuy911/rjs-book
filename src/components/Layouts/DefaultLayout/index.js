import Header from './component/Header';

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header></Header>
      {children}
    </div>
  );
}
