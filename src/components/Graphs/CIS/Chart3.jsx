import React, { useEffect, useRef } from 'react';
import dano from '../../../data/rus3.json';
import { Column } from '@ant-design/plots';

const RussiaChart3 = () => {
  const chartRef = useRef();
  useEffect(() => {
    console.log({ chartRef });
    if (chartRef.current) {
    }
  }, []);
  const config = {
    data: {
        value: dano,
      },
    xField: 'region_name',
    yField: 'salary',
    slider: {
      x: {
        values: [0, 1],
      },
    },
    title: 'Связь между местоположением и уровнем зарплаты'
  };
  return <Column {...config} ref={chartRef} />;
};

export default RussiaChart3
