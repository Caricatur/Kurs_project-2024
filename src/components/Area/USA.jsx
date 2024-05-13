import React from 'react'
import Graph1 from '../Graphs/USA/Chart1'
import Graph2 from '../Graphs/USA/Chart2'
import Graph3 from '../Graphs/USA/Chart3'
import style from '../../styles/Region.module.css'

import { Space, Typography } from 'antd'

const {Text, Title} = Typography

const USA = () => {
  return (
    <div>
        <Text className={style.titleStyle}>Проведенные расчеты для США:</Text>
        <Text className={style.textStyle}> По результатам обработки данных были сформулированы и проверены следующие гипотезы: </Text>
        <Text  className={style.textStyle}>
            1. Гипотеза о взаимосвязи типа занятости и уровня зарплаты:
            При частичной занятости уровень зарплаты кратно ниже
        </Text>
        <Graph1 />
        <Space />
        <Text  className={style.textStyle}>
        2. Гипотеза о взаимосвязи рейтинга компании и средней зарплаты разработчиков: Более высокий рейтинг компании коррелирует с более высокой зарплатой сотрудников.
        </Text>

         <Graph2 />
        <Space />
        <Text className={style.textStyle}>
        3. Распределение зарплат специалистов в разбивке по штатам.
        </Text>
        <Graph3 />
        <Space />
        <Text className={style.titleStyle}> Результаты и выводы: </Text>
        <Text className={style.textStyle}>
        1. Проверка первого утверждения показала, что в общей массе зарплаты тех, кто работает полный рабочий день,заметно  выше тех, у кого лишь частичная занятость. Можно сказать, предположение оказалось верным.
        </Text>
        <Text className={style.textStyle}>
        2. Из графика можно наблюдать, что средняя зарплата пропорциональна рейтингу компании. График стремительно растет до отметки рейтинга 3.5, а затем рейтинг уже не оказывает такого влияния на показатели. Отсюда можно сделать вывод, что рейтинг компании является важным критерием при выборе места работы.
        </Text>
        <Text className={style.textStyle}>
        3. Таким образом, можно наблюдать, какие штаты предоставляют наилучшие условия труда. Проверив в интернете официальное распределение зарплат в США, можно убедиться, что Вашингтон и Калифорния лидируют в этом списке, а Гаваи, наоборот, является самым низкооплачиваемым штатом.
        </Text>

    </div>
  )
}

export default USA