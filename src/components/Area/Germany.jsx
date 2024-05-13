import React from 'react'
import Graph1 from '../Graphs/Germany/Chart1'
import Graph2 from '../Graphs/Germany/Chart2'
import style from '../../styles/Region.module.css'

import { Space, Typography } from 'antd'

const {Text, Title} = Typography

const Germany = () => {
  return (
    <div>
        <Text className={style.titleStyle}>Проведенные расчеты для Германии:</Text>
        <Text className={style.textStyle}> По результатам обработки данных были сформулированы и проверены следующие гипотезы: </Text>
        <Text  className={style.textStyle}>
            1. Гипотеза о взаимодействии возраста и пола в контексте зарплат: Существует различие в траектории роста зарплат между мужчинами и женщинами по мере старения.
        </Text>
        <Graph1 />
        <Space />
        <Text className={style.textStyle}> 
            2. Гипотеза о связи технологического стека и зарплаты на размер компании: Размер зарплаты в соотношении с используемым языком программирования влияет на размер компании.
        </Text>

        <Graph2 />
        <Space />

        <Text className={style.titleStyle}> Результаты и выводы: </Text>
        <Text className={style.textStyle}>
        1. Проверка первой гипотезы показала, что разница в зарплатах мужчин и женщин существует, но достаточно мала, в то же время пик роста зарплат приходится на возраст 27-40 лет.
        </Text>
        <Text className={style.textStyle}>
        2. Как показала практика более крупные компании предлагают более высокие зарплаты в общей массе, но и на рынке небольших организаций есть достойные зарплаты.
        </Text>
        



    </div>
  )
}

export default Germany