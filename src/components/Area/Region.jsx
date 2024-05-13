import { Layout } from 'antd'
import React from 'react'
import {NavLink, useParams} from "react-router-dom";



const Region = ({value, changeName}) => { 
  const { id } = useParams();
  // const ChangingId = (id) => {
  //     changeName(id);
  // }
  // if (value !== id) {ChangingId(id)};



return ({value} == 'СНГ') ? (<Layout>
      <div>Current region: {id}</div>
      {/* <div>{id} </div> */}
      <div>REjcslzkclszk</div>


  </Layout>)

  : (<div>Current region: {id}{value}</div>)
}

export default Region