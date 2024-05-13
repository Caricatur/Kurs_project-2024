import React, {useState} from 'react'
import style from "../../styles/Calc.module.css"
import { Layout, Typography, Select, Radio, Button, Modal} from 'antd'
// import data from '../../data/salaries_for_calc.csv'
import data from '../../data/calc_sal.json'
import Papa from 'papaparse'






const Result = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };

      let sex = props.sex
      // if (props.sex == 'Мужчина') { sex = 'Male' else sex = 'Female' }
      const grade = props.grade
      const country = props.country
      const skills = props.skills

      // console.log(sex)
      // console.log(data.includes([grade, sex, skills]))
      // console.log(data.find(element => element.grade == grade && element.country == country && element.profession == skills && element.sex == sex))
      

      let now = data.find(element => element.grade == grade && element.country == country && element.profession == skills && element.sex == sex)
      // console.log(now.max_salary)

      let min_salary = 0
      let med_salary = 0 
      let max_salary = 0 
      let val = 'долл.'

      if (typeof now?.max_salary === undefined) {

      } else {
        console.log(now?.max_salary)
        min_salary = now?.min_salary
        med_salary = now?.median_salary
        max_salary = now?.max_salary

        if (now?.country == 'СНГ') {
          val = 'руб.'
          min_salary *= 100;
          med_salary *= 100;
          max_salary *= 100;
        }

        if (now?.country == 'Германия') {
          val = 'евро.'
        }

      } 



      // (now !== undefined ? min_salary = now.min_salary : min_salary = 0)
      // (now !== undefined ? med_salary = now.med_salary :  med_salary = 0)
      // (now !== undefined ? max_salary = now.max_salary : max_salary = 0)

      

      if (country == 'СНГ') {
            if (skills == 'Data Scientist') {
                if (sex == 'Мужчина') {
                   if  (grade == 'Intern') {
                    min_salary = 28000;
                    med_salary = 67000;
                    max_salary = 102000;
                    val = 'руб.'
                   }
                   if  (grade == 'Middle') {
                    min_salary = 141000;
                    med_salary = 239000;
                    max_salary = 283000;
                    val = 'руб.'
                   }
                } else {
                    if  (grade == 'Intern') {
                        min_salary = 26000;
                        med_salary = 63000;
                        max_salary = 98000;
                        val = 'руб.'
                       }
                       if  (grade == 'Middle') {
                        min_salary = 136000;
                        med_salary = 218000;
                        max_salary = 266000;
                        val = 'руб.'
                       }

                }

            }
        }

        if (country == 'США') {
            if (skills == 'Manager') {
                if (sex == 'Женщина') {
                   if  (grade == 'Junior') {
                    min_salary = 2820;
                    med_salary = 3760;
                    max_salary = 5750;
                    val = 'дол.'
                   }
                   if  (grade == 'Senior') {
                    min_salary = 5100;
                    med_salary = 6700;
                    max_salary = 11400;
                    val = 'дол.'
                   }
                }
            }
        }

    console.log(skills)

    return (
    <div>
        <Button className={style.buttonStyle} type="dashed" size={style.buttonStyle} block onClick={showModal}> 
          Рассчитать зарплату!         
        </Button>
        <Modal title="Расчет потенциальной зарплаты" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Cформирован диапазон зарплат для {skills} уровня {grade} в регионе {country}:</p>
            <p>Минимальная зарплата: {min_salary} {val} </p>
            <p>Медианная зарплата: {med_salary} {val} </p>
            <p>Максимальная зарплата: {max_salary} {val} </p>
            <br/>
            <p>Для удобства вычисления были округлены и представлены в распространенной валюте </p>

            
        </Modal>



    </div>
  )
}

export default Result