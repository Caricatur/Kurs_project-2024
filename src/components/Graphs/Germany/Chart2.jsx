import React from 'react';
import dano from '../../../data/eu_size-salary.json';
import {Typography, Image, Layout} from 'antd';
import { Column } from '@ant-design/plots';

const Chart2 = () => {
  const config = {
    data: {
      value: dano,
    },
    xField: 'Company size',
    yField: 'salary',
    colorField: 'Position',
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
};

export default Chart2
