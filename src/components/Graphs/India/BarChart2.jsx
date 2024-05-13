import React from 'react';
// import dano from '../Data/ind_location-salary.json';
import dano from '../../../data/ind_location-salary.json'
import {Typography, Image, Layout} from 'antd';
import { Column } from '@ant-design/charts';


//const [data, setData] = useState([]);
const { Title, Paragraph, Text } = Typography;


const IndiaBarChart2 = () => {


  const config = {
    data: {
      value: dano,
    },
    xField: 'Location',
    yField: 'Salary',
    point: {
      shapeField: 'square',
      sizeField: 3,
    },

    legend: { size: false },
    colorField: 'Location',
  };
  return <Column {...config} />;
}


export default IndiaBarChart2