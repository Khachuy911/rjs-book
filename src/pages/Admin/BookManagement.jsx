import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import { Card, Col, Divider, Dropdown, Row, Space, Statistic, Table, Typography } from 'antd';
import { getAllBook, getStatsBookByMonth } from '../../services/books';
import style from './bookManagement.module.scss';
import { ArrowDownOutlined, ArrowUpOutlined, DownOutlined } from '@ant-design/icons';
import { cleanup } from '@testing-library/react';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id'
  },
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Author',
    dataIndex: 'author'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    sorter: (a, b) => a.price - b.price
  },
  {
    title: 'Number Of Page',
    dataIndex: 'numberPage',
    sorter: (a, b) => a.numberPage - b.numberPage
  }
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const months = [
  {
    key: '1',
    label: '1'
  },
  {
    key: '2',
    label: '2'
  },
  {
    key: '3',
    label: '3'
  },
  {
    key: '4',
    label: '4'
  },
  {
    key: '5',
    label: '5'
  },
  {
    key: '6',
    label: '6'
  },
  {
    key: '7',
    label: '7'
  },
  {
    key: '8',
    label: '8'
  },
  {
    key: '9',
    label: '9'
  },
  {
    key: '10',
    label: '10'
  },
  {
    key: '11',
    label: '11'
  },
  {
    key: '12',
    label: '12'
  }
];
const BookManagement = () => {
  let [books, setBooks] = useState([]);
  let [stats, setStats] = useState({});
  let [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  useEffect(() => {
    let data = getAllBook(currentMonth);
    let dataStat = getStatsBookByMonth(currentMonth);
    setBooks(data);
    setStats(dataStat);

    return () => {
      cleanup();
    };
  }, [currentMonth]);

  const handleOnClick = (e) => {
    setCurrentMonth(+e.key);
  };

  return (
    <div className={clsx(style.wrapper)}>
      <div className={clsx(style.statis)}>
        <div className={clsx(style.title)}>
          <Dropdown
            menu={{
              items: months,
              selectable: true,
              defaultSelectedKeys: currentMonth,
              onClick: handleOnClick
            }}
          >
            <Typography.Link>
              <Space>
                {new Date().getFullYear()}, Month {currentMonth}
                <DownOutlined />
              </Space>
            </Typography.Link>
          </Dropdown>
        </div>
        <Divider orientation='left' plain>
          <h2>Statistic</h2>
        </Divider>
        <Row gutter={16}>
          <Col span={8}>
            <Card bordered={true}>
              <Statistic
                title='Active'
                value={stats.active}
                precision={2}
                valueStyle={{
                  color: '#3f8600'
                }}
                prefix={<ArrowUpOutlined />}
                suffix='%'
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={true}>
              <Statistic
                title='Idle'
                value={stats.idle}
                precision={2}
                valueStyle={{
                  color: '#cf1322'
                }}
                prefix={<ArrowDownOutlined />}
                suffix='%'
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card bordered={true}>
              <Statistic
                title='Inactive'
                value={stats.inActive}
                precision={2}
                valueStyle={{
                  color: '#3f8600'
                }}
                prefix={<ArrowUpOutlined />}
                suffix='%'
              />
            </Card>
          </Col>
        </Row>
      </div>

      <div>
        <Divider orientation='left' plain>
          <h2>Sell Rating</h2>
        </Divider>
        <Table columns={columns} dataSource={books} onChange={onChange} />
      </div>
    </div>
  );
};
export default BookManagement;
