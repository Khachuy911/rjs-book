import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import { Card, Col, Divider, Dropdown, Row, Space, Statistic, Table, Typography } from 'antd';
import { getAllBook, getDataPieChart, getStatsBookByMonth } from '../../services/books';
import style from './bookManagement.module.scss';
import { ArrowDownOutlined, ArrowUpOutlined, DownOutlined } from '@ant-design/icons';
import { cleanup } from '@testing-library/react';
import Charts from '../../components/Chart/LineChart';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { ChartType } from '../../enums/chartType.enum';

const columns = [
  {
    title: 'Code',
    dataIndex: 'code'
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
    title: 'Warehouse Price',
    dataIndex: 'warehousePrice',
    sorter: (a, b) => a.warehousePrice - b.warehousePrice
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
  },
  {
    title: 'Quantity sold',
    dataIndex: 'quantitySold'
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

Chart.register(CategoryScale);

const BookManagement = () => {
  let [books, setBooks] = useState([]);
  let [stats, setStats] = useState({});
  let [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  let [chartLineData, setChartLineData] = useState({
    labels: [],
    datasets: [
      {
        label: 'books',
        data: [],
        backgroundColor: [
          'rgba(255, 255, 255, 0.6)',
          'rgba(255, 255, 255, 0.6)',
          'rgba(255, 255, 255, 0.6)'
        ],
        borderColor: 'red',
        borderWidth: 2
      }
    ]
  });

  let [chartPieRevenueData, setChartPieRevenueData] = useState({
    labels: ['Expense', 'Profit'],
    datasets: [
      {
        label: '$',
        data: [getDataPieChart(10000), getDataPieChart(4000)],
        backgroundColor: ['blue', '#50AF95'],
        borderColor: 'white',
        borderWidth: 1
      }
    ]
  });

  let [chartPieUserBuyData, setChartPieUserBuyData] = useState({
    labels: ['Offline', 'Online', 'Visiting guests'],
    datasets: [
      {
        label: 'Users',
        data: [getDataPieChart(300), getDataPieChart(900), getDataPieChart(300)],
        backgroundColor: ['#50AF95', '#f3ba2f', 'red'],
        borderColor: 'white',
        borderWidth: 1
      }
    ]
  });

  let [chartPieInvenData, setChartPieInvenData] = useState({
    labels: ['Sold', 'Inventory', 'Returns'],
    datasets: [
      {
        label: 'books',
        data: [getDataPieChart(700), getDataPieChart(400), getDataPieChart(50)],
        backgroundColor: ['#50AF95', '#f3ba2f', 'red'],
        borderColor: 'white',
        borderWidth: 1
      }
    ]
  });

  useEffect(() => {
    let data = getAllBook(currentMonth);
    let dataStat = getStatsBookByMonth(currentMonth);
    setBooks(data.sort((a, b) => +b.quantitySold - +a.quantitySold));
    setStats(dataStat);
    setChartLineData({
      labels: data.sort((a, b) => a.day - b.day).map((item) => item.name),
      datasets: [
        {
          label: 'Quantity',
          data: data.map((item) => item.quantitySold),
          backgroundColor: [
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.8)',
            'rgba(255, 255, 255, 0.6)'
          ],
          borderColor: 'red',
          borderWidth: 2
        },
        {
          label: 'Profit',
          data: data.map((item) => item.price * item.quantitySold),
          backgroundColor: [
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.8)',
            'rgba(255, 255, 255, 0.6)'
          ],
          borderColor: 'green',
          borderWidth: 2
        }
      ]
    });

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
        <div className={clsx(style.selectMonth)}>
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
            <Card className={clsx(style.cardStat)} hoverable bordered>
              <Statistic
                title='Sales'
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
            <Card className={clsx(style.cardStat)} hoverable bordered>
              <Statistic
                title='Visitors'
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
            <Card className={clsx(style.cardStat)} hoverable bordered>
              <Statistic
                title='Orders'
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

      <div className='chart'>
        <Charts
          chartData={chartLineData}
          chartName={'Productivity chart'}
          chartText={'Statistics on the number of books sold by month'}
          chartType={ChartType.Line}
        />
        <div className={clsx(style.chartPie)}>
          <Charts
            chartData={chartPieRevenueData}
            chartName={'Monthly revenue statistics'}
            chartText={'Statistics on the number of books sold by day'}
            chartType={ChartType.Pie}
          />
          <Charts
            chartData={chartPieUserBuyData}
            chartName={'Statistics on user purchases'}
            chartText={'Statistics on the number of books sold by month'}
            chartType={ChartType.Pie}
          />
          <Charts
            chartData={chartPieInvenData}
            chartName={'Inventory statistics'}
            chartText={'Statistics on the number of books sold by year'}
            chartType={ChartType.Pie}
          />
        </div>
      </div>

      <div className='sell-rate'>
        <Divider orientation='left' plain>
          <h2>Sell Rating</h2>
        </Divider>
        <Table columns={columns} dataSource={books} onChange={onChange} />
      </div>
    </div>
  );
};
export default BookManagement;
