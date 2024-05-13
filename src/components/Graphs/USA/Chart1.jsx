import React from 'react';
import dano from '../../../data/usa1.json';
import {Typography, Image, Layout} from 'antd';
import { Column } from '@ant-design/plots';

const USChart1 = () => {
  const config = {
    data: {
      value: dano,
    },
    xField: 'types',
    yField: 'salary_mean',
    colorField: 'types',
    title: 'Зависимость зарплаты в долларах от типа занятости',
  };
  return <Column {...config} />;
};

export default USChart1
