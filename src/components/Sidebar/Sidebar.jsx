// 

import React, {useState} from 'react'

import {NavLink} from "react-router-dom";

import styles from "../../styles/Sidebar.module.css"
import {SunOutlined } from '@ant-design/icons'
import { Typography, Layout } from 'antd';
const {Text} = Typography;

const categories_list  = ['США','Индия', 'Германия', 'СНГ'];

const Sidebar = ({value, onClickCategory}) => {
    return (
        <Layout className={styles.siderStyle}>
                <Text className={styles.titleStyle}>Регион</Text>
                <Text>
                    <ul className={styles.decorationStyle}>
                        {categories_list.map((name) => (
                            <li style={{listStyleType: 'none'}}
                                class={styles.linkStyle}
                                key={name}
                                onClick={() => onClickCategory(name)}
                                className={value === name ? 'active' : ''}>
                                {/* <FolderTwoTone  className={styles.linkStyle}/> */}
                                <SunOutlined />
                                <NavLink to={`/region/${name}`} className={styles.linkStyle}> {name}</NavLink>
                                
                            </li>
                        ))}
                    </ul>
                </Text>
        </Layout>
    );
};

export default Sidebar