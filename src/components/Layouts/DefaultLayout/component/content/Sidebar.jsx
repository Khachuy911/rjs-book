import React from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { Menu, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
const items = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: 'Navigation One'
  },
  {
    key: '2',
    icon: <CalendarOutlined />,
    label: 'Navigation Two'
  },
  {
    key: 'sub1',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '3',
        label: 'Option 3'
      },
      {
        key: '4',
        label: 'Option 4'
      },
      {
        key: 'sub1-2',
        label: 'Submenu',
        children: [
          {
            key: '5',
            label: 'Option 5'
          },
          {
            key: '6',
            label: 'Option 6'
          }
        ]
      }
    ]
  },
  {
    key: 'sub2',
    label: 'Navigation Three',
    icon: <SettingOutlined />,
    children: [
      {
        key: '7',
        label: 'Option 7'
      },
      {
        key: '8',
        label: 'Option 8'
      },
      {
        key: '9',
        label: 'Option 9'
      },
      {
        key: '10',
        label: 'Option 10'
      }
    ]
  },
  {
    key: 'link',
    icon: <LinkOutlined />,
    label: (
      <a href='https://ant.design' target='_blank' rel='noopener noreferrer'>
        Ant Design
      </a>
    )
  }
];
const SideBar = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  return (
    <Sider
      style={{
        background: colorBgContainer,
        overflow: 'auto',
        position: 'fixed',
        insetInlineStart: 0,
        top: 60,
        bottom: 0,
        flexBasis: '50%'
      }}
    >
      <Menu
        style={{
          height: 'calc(100% - 80px)', // Trừ chiều cao phần Switch
          borderRight: 0
        }}
        defaultSelectedKeys={['1']}
        items={items}
      />
    </Sider>
  );
};
export default SideBar;
