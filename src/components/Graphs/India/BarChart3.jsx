import React from 'react';
// import dano from '../Data/ind_android-salary.json';
import dano from '../../../data/ind_android-salary.json'
import {Typography, Image, Layout} from 'antd';
import { Column } from '@ant-design/charts';

const IndiaBarChart3 = () => {
  const config = {
    data: {
      value: dano,
    },
    xField: 'Job Roles',
    yField: 'Salary',
    colorField: 'Grade',
    group: true,
    style: {
      // 矩形四个方向的内边距
      inset: 5,
      // 矩形单个方向的内边距
      // insetLeft:5,
      // insetRight:20,
      // insetBottom:10
      // insetTop:10
    },
  };
  return <Column {...config} />;
}

export default IndiaBarChart3
