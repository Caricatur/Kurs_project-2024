import React from 'react';
import dano from '../../../data/ru_expirience-salary.json';
import {Typography, Image, Layout} from 'antd';
import { Column } from '@ant-design/plots';

const RussiaChart1 = () => {
  const config = {
    data: {
      value: dano,
    },
    xField: 'experience',
    yField: 'salary',
    colorField: 'professional_roles_name',
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
    title: 'Корреляции между уровнем зарплаты и опытом работы',
  };
  return <Column {...config} />;
};

export default RussiaChart1
