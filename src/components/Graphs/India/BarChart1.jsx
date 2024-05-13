import React from 'react';
// import dano from '../Data/ind_rating-salary.json';
import dano from '../../../data/ind_rating-salary.json'
import {Typography, Image, Layout} from 'antd';
import { Line } from '@ant-design/charts';


//const [data, setData] = useState([]);
const { Title, Paragraph, Text } = Typography;


const IndiaBarChart = () => {


  const config = {
    data: {
      value: dano,
    },
    xField: 'Rating',
    yField: 'Salary',
    point: {
      shapeField: 'square',
      sizeField: 'Rating',
    },
    connectNulls: {
      connect: true,
    },
    style: {
      lineWidth: 2,
    },
    legend: { size: false },
    colorField: 'Grade',
  };
  return <Line {...config} />;
}


export default IndiaBarChart