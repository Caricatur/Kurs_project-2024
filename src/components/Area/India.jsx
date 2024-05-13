import React from 'react'
import Graph1 from '../Graphs/India/BarChart1'
import Graph2 from '../Graphs/India/BarChart2'
import Graph3 from '../Graphs/India/BarChart3'
import style from '../../styles/Region.module.css'

import { Space, Typography } from 'antd'

const {Text, Title} = Typography

const India = () => {
  return (
    <div>
        <Text className={style.titleStyle}>Проведенные расчеты для Индии:</Text>
        <Text className={style.textStyle}> По результатам обработки данных были сформулированы и проверены следующие гипотезы: </Text>
        <Text  className={style.textStyle}>
            1. Гипотеза о взаимосвязи рейтинга компании и средней зарплаты разработчиков:
            Более высокий рейтинг компании коррелирует с более высокой зарплатой сотрудников.
        </Text>
        <Text className={style.textStyle}>
        2. Гипотеза о влиянии статуса занятости на размер зарплаты: Стажеры получают значительно меньше, чем сотрудники на полный рабочий день.
        </Text>
        <Graph1 />
        <Space />
        <Text  className={style.textStyle}>
        3. Гипотеза о региональном различии в зарплатах внутри определенной страны: Зарплаты отличаются в зависимости от района города, где находятся офисы компании.
        </Text>

        <Graph2 />
        <Space />
        <Text className={style.textStyle}>
        4. Гипотеза о различиях зарплат Android разработчиков с разработчиками в других технологических стеках:Зарплаты Android разработчиков меньше по сравнению с разработчиками, специализирующимися на других платформах.
        </Text>
        <Graph3 />
        <Space />
        <Text className={style.titleStyle}> Результаты и выводы: </Text>
        <Text className={style.textStyle}>
        1. Проверка первой гипотезы показала, что рейтинг компании мало влияет на среднюю зарплату, даже в компаниях с низким рейтингом присутствуют высокие зарлаты.
        </Text>
        <Text className={style.textStyle}>
        2. Это правда, стажеры получают значительно меньше.
        </Text>
        <Text className={style.textStyle}>
        3. По результатам проверки, районы в Индии почти не отличаются по уровню зарплат.
        </Text>
        <Text className={style.textStyle}>
        4. Нет, это не правда, в среднем зарплаты одинаковы.
        </Text>


    </div>
  )
}

export default India