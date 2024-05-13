
import React, {useState} from 'react'
import style from "../../styles/Calc.module.css"
import { Layout, Typography, Select, Radio, Button } from 'antd'
// import {Text, Title} from 'antd/es/skeleton/Title'


const { Title, Paragraph, Text } = Typography;

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
  {value: '', label: 'США'},
  {value: '', label: 'США'},
];

// const grades = ['Intern', 'Junior', 'Middle', 'Senior'];

const grades = [
  { label: 'Intern', value: 'Intern'},
  { label: 'Junior', value: 'Junior'},
  { label: 'Middle', value: 'Middle'},
  { label: 'Senior', value: 'Senior'},
];

const sex = [
  { label: 'Мужчина', value: 'Мужчина'},
  { label: 'Женщина', value: 'Женщина'},

];

// for (let i = 10; i < 36; i++) {
  // options.push({
  //   value: i.toString(36) + i,
  //   label: i.toString(36) + i,
  // });


const onChange = (value) => {
  console.log(`selected ${value}`);
  region = value
};
const onSearch = (value) => {
  console.log('search:', value);
  region = value
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

const onChange1 = ({ target: { value } }) => {
    console.log('radio1 checked', value);
    // setValue1(value);
};


const Calc = () => {
  const [grade, setGrade] = useState('Middle');
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
          mode="multiple"
          // size={size}
          defaultValue={['Software Engineer']}
          // onChange={handleChange}
          // style={{
          //   width: '100%',
          // }}
          options={options}
        />
        <Text className={style.textStyle}> Укажите грейд в этой сфере:</Text>
        <Radio.Group className={style.secondSelect} options={grades}  optionType="button" />
        <Text className={style.textStyle}> И отметьте пол:</Text>
        <Radio.Group className={style.secondSelect} options={sex}  optionType="button" />
        <Button className={style.buttonStyle} type="dashed" size='large' block>Рассчитать зарплату!</Button>


    </Layout>

  )
}

export default Calc