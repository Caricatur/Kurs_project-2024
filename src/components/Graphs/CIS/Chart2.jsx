import { RadialBar } from '@ant-design/plots';
import React from 'react';
import dano from '../../../data/ru_employment-salary.json';


const RussiaChart2 = () => {
  const config = {
    data: {
        value: dano,
      },
    xField: 'employment',
    yField: 'salary',
    startAngle: Math.PI * 0.5,
    maxAngle: 270, //最大旋转角度,
    radius: 1,
    innerRadius: 0.2,
    //legend: false,
    //axis: { y: false },
    style: {
        radius: 26, // 圆角
    },
    scale: {
        y: { nice: true },
    },
    tooltip: {
      items: ['salary'],
    },
    sizeField: 10,
    //colorField: 'type',
    title: 'Влияние типа занятости на размер зарплаты',
  };
  return <RadialBar {...config} />;
};


export default RussiaChart2
