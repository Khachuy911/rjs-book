import { Layout } from 'antd';

const { Footer } = Layout;

function Footers() {
  return (
    <Footer style={{ textAlign: 'center' }}>
      RJS Design ©{new Date().getFullYear()} Created by RJS
    </Footer>
  );
}

export default Footers;
