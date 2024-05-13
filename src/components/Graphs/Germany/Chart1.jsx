import React from 'react';
import dano from '../../../data/eu_gender-salary.json';
import {Typography, Image, Layout} from 'antd';
import { Line } from '@ant-design/charts';


//const [data, setData] = useState([]);
const { Title, Paragraph, Text } = Typography;


const EUChart1 = () => {


  const config = {
    data: {
      value: dano,
    },
    xField: 'Age',
    yField: 'salary',
    point: {
      sizeField: 'Age',
    },
    connectNulls: {
      connect: true,
    },
    style: {
      lineWidth: 2,
    },
    legend: { size: false },
    colorField: 'Gender',
  };
  return <Line {...config} />;
}


export default EUChart1