import React from 'react';
import { Input } from 'antd';
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const Searchs = () => (
  <div
    style={{
      display: 'flex',
      color: 'white',
      paddingRight: '30px',
      flexBasis: '30%'
    }}
  >
    <Search placeholder='Search...' onSearch={onSearch} enterButton />
  </div>
);
export default Searchs;
