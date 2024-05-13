
import React, {useState} from 'react'
import style from "../../styles/Calc.module.css"
import { Layout, Typography, Select, Radio, Button, Modal} from 'antd'
// import {Text, Title} from 'antd/es/skeleton/Title'
import Result from './Result';



const { Title, Paragraph, Text } = Typography;

// const fs = require('fs');
// const csvToObj = require('../../../node_modules/@csv-to-js-parser').csvToObj;

// const data = fs.readFileSync('../../data/salaries_for_calc.csv').toString();

// const description =
//     {
//         grade:     {type: 'string'},
//         sex:         {type: 'string'},
//         country:      {type: 'string'},
//         profession:   {type: 'string'},
//         min_salary:    {type: 'number'},
//         med_salary:    {type: 'number'},
//         max_salary:    {type: 'number'}
//     };
// let obj = csvToObj(data, ';', description);

// console.log(obj)


let region = 'Германия'

const options = [
  {value: 'Backend Developer', label: 'Backend Developer'},
  {value: 'Software Engineer', label: 'Software Engineer'},
  {value: 'DevOps', label: 'DevOps'},
  {value: 'Data Scientist', label: 'Data Scientist'},
  {value: 'Frontend Developer', label: 'Frontend Developer'},
  {value: 'Analyst', label: 'Analyst'},
  {value: 'Mobile Developer', label: 'Mobile Developer'},
  {value: 'Manager', label: 'Manager'},
  {value: 'Recruiter', label: 'Recruiter'},
  {value: 'Designer (UI/UX)', label: 'Designer (UI/UX)'},
  {value: 'Tester', label: 'Tester'},
  {value: 'Security engineer', label: 'Security engineer'},
];

// const grades = ['Intern', 'Junior', 'Middle', 'Senior'];

const grades = [
  { label: 'Intern', value: 'Intern'},
  { label: 'Junior', value: 'Junior'},
  { label: 'Middle', value: 'Middle'},
  { label: 'Senior', value: 'Senior'},
];

const sex = [
  { label: 'Мужчина', value: 'Male'},
  { label: 'Женщина', value: 'Female'},

];

// for (let i = 10; i < 36; i++) {
  // options.push({
  //   value: i.toString(36) + i,
  //   label: i.toString(36) + i,
  // });



// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const onChange1 = ({ target: { value } }) => {
    console.log('radio1 checked', value);
    // setValue1(value);
};

let params = [];


const Calc = () => {

  let [grade, setGrade] = useState();
  let [sex_value, setSex] = useState();
  let [skills, setSkills] = useState();
  let [country, setCountry] = useState();
  let [result, setResult] = useState(0);

  const onChange = (value) => {
    console.log(`selected ${value}`);
    setCountry(value)
    country = value
  };
  const onSearch = (value) => {
    console.log('search:', value);
    setCountry(value)
    country = value
  };

  const onChangeSkill = (value) => {
    console.log(`selected ${value}`);
    setSkills(value)
    skills = value
  };
  const onSearchSkill = (value) => {
    console.log('search:', value);
    setSkills(value)
    skills = value
  };

  const onChangegrade = (e) => {
    console.log(`radio checked:${e.target.value}`)
    setGrade(e.target.value)
    // setGrade(value)
  }

  const onChangeSex = (e) => {
    console.log(`radio checked:${e.target.value}`)
    setSex(e.target.value)
    // setGrade(value)
  }

  let salary = 0;



  return (
    // <div>Рассчитайте свою предполагаемую заработную плату согласно Вашим навыкам и опыту

    //   <Title>Рассчитайте свою предполагаемую заработную плату согласно Вашим навыкам и опыту</Title>

    // </div>
    <Layout className={style.calcStyle}>
        <Text className={style.titleStyle}>Рассчитайте свою предполагаемую заработную плату <br/> согласно Вашим навыкам и опыту</Text>
        <Text className={style.textStyle}> Для начала укажите регион:</Text>
        <Select
          className={style.firstSelect}
          showSearch
          placeholder="Выберите страну"
          optionFilterProp="children"
          onChange={onChange}
          onSearch={onSearch}
          filterOption={filterOption}
          value={country}
          options={[
            {value: 'США', label: 'США'},
            {value: 'Индия', label: 'Индия'},
            {value: 'Германия', label: 'Германия'},
            {value: 'СНГ', label: 'СНГ'},
          ]}
        />
        {{region} == 'Германия' && <div> Мы в Омерике</div>}
        <Text className={style.textStyle}> Выберите свой род деятельности:</Text>
        <Select
          placeholder="Выберите стек технологий"
          className={style.secondSelect}
          // mode="multiple"
          // size={size}
          // defaultValue={['Software Engineer']}
          onChange={onChangeSkill}
          onSearch={onSearchSkill}
          // style={{
          //   width: '100%',
          // }}
          options={options}
          value={skills}
        />
        <Text className={style.textStyle}> Укажите грейд в этой сфере:</Text>
        <Radio.Group className={style.secondSelect} options={grades}  optionType="button" value={grade} onChange={onChangegrade}  onClick={onChangegrade}/>
        <Text className={style.textStyle}> И отметьте пол:</Text>
        <Radio.Group className={style.secondSelect} options={sex}  optionType="button" value={sex_value} onChange={onChangeSex} />



        {console.log(country)}
        <Result sex={sex_value} skills={skills} grade={grade} country={country}/>

    </Layout>

  )
}

export default Calc