import React, {useState} from 'react'
import AppRoutes from '../Routes/Routes'
import Head from "../Header/Header"
import Footer from "../Footer/Footer"
import Sidebar from "../Sidebar/Sidebar"
import styles from "../../styles/App.module.css"


import { Layout } from 'antd'
const { Header, Sider, Content } = Layout;

const App = () => {
  const [categoryId, setCategoryId] = useState(0);

  return (
    <Layout className={styles.layoutStyle}>
        <Head />
        <Layout className={styles.layoutStyle}>
            <Sider theme='light' className={styles.siderStyle} width={styles.siderWidth}>
                <Sidebar value={categoryId} onClickCategory={(name) => setCategoryId(name)}/>
            </Sider>
            <Content className={styles.contentStyle}>
                <AppRoutes />
            </Content>
        </Layout>
        
        <Footer />

    </Layout>
  )
}

export default App