import React from 'react';
import dano from '../../../data/usa2.json';
import {Typography, Image, Layout} from 'antd';
import { Line } from '@ant-design/charts';


//const [data, setData] = useState([]);
const { Title, Paragraph, Text } = Typography;


const USChart2 = () => {


  const config = {
    data: {
      value: dano,
    },
    xField: 'rating',
    yField: 'salary_mean',
    point: {
      shapeField: 'square',
      sizeField: 'rating',
    },
    connectNulls: {
      connect: true,
    },
    style: {
      lineWidth: 2,
    },
    legend: { size: false },
    title: 'Взаимосвязь между рейтингом компании и предлагаемой зарплатой'
  };
  return <Line {...config} />;
}


export default USChart2