import { Column } from '@ant-design/plots';
import React from 'react';
import dano from '../../../data/usa3.json';


const USChart3 = () => {
  const config = {
    data: {
        value: dano
    },
    xField: 'State',
    yField: 'salary_mean',
        colorField: 'State',
    sort: {
          reverse: true,
          by: 'y',
        },
    axis: {
            y: { labelFormatter: '~s' },
            x: {
              labelSpacing: 4,
              style: {
                labelTransform: 'rotate(45)',
              },
            },
          },
    title: 'Влияние штата на размер зарплаты в долларах '
  };
  return <Column {...config} />;
};


export default USChart3
