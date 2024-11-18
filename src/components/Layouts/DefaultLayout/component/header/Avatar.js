import { Avatar, Badge, Dropdown, Space } from 'antd';
import React, { useState } from 'react';

import { DownOutlined } from '@ant-design/icons';
import {
  UserOutlined,
  SettingOutlined,
  LoginOutlined,
  LogoutOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Avatars = () => {
  const [open, setOpen] = useState(false);
  const handleMenuClick = (e) => {
    if (e.key === '5') {
      setOpen(false);
    }
  };
  const handleOpenChange = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
      setOpen(nextOpen);
    }
  };
  const items = [
    {
      label: <Link to='/'>Profile</Link>,
      key: '1',
      icon: <UserOutlined />,
      style: { width: '100px' }
    },
    {
      label: 'Login',
      key: '2',
      icon: <LoginOutlined />
    },
    {
      label: 'Logout',
      key: '3',
      icon: <LogoutOutlined />
    },
    {
      label: 'Setting',
      key: '4',
      icon: <SettingOutlined />
    },
    {
      type: 'divider'
    },
    {
      label: 'Close',
      key: '5',
      icon: <CloseOutlined />
    }
  ];
  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick
      }}
      onOpenChange={handleOpenChange}
      open={open}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <Space size={24}>
            <Badge dot>
              <Avatar
                style={{
                  backgroundColor: '#1677ff'
                }}
                shape='vertical'
                icon={<UserOutlined />}
              />
            </Badge>
          </Space>
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};
export default Avatars;
