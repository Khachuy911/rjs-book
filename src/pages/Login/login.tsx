import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import clsx from 'clsx';

import style from './Login.module.scss';

const Login = ({setToken}) => {

  const handleLogin = (values) => {
    console.log('Received values of form: ', values);
    setToken({token: '123456dfgdsvv'});
    window.location.href = '/';
  };

  return (
    <div className={clsx(style.wrapper)}>
      <div className={clsx(style.form_main)}>
        <h2>Mahudo</h2>
        <Form
          name='login'
          initialValues={{
            remember: true
          }}
          style={{
            maxWidth: 360
          }}
          onFinish={handleLogin}
        >
          <Form.Item
            name='username'
            rules={[
              {
                required: true,
                message: 'Please input your Username!'
              }
            ]}
          >
            <Input
              className={clsx(style.input_main)}
              prefix={<UserOutlined />}
              placeholder='Username'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your Password!'
              }
            ]}
          >
            <Input.Password
              className={clsx(style.input_main)}
              prefix={<LockOutlined />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>
          <Form.Item>
            <Flex justify='space-between' align='center'>
              <Form.Item name='remember' valuePropName='checked' noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
            </Flex>
          </Form.Item>
          <Form.Item>
            <Button
              className={clsx(style.input_main)}
              block
              type='primary'
              htmlType='submit'
            >
              Log in
            </Button>
          </Form.Item>
          Let <a href=''>Forgot password </a>
          or <a href=''>Register now!</a>
        </Form>
      </div>
    </div>
  );
};
export default Login;
