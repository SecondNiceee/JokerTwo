import React from 'react';
import cl from './Categories.module.css'
import upDown from '../../../images/icons/UpDown.svg'
const Categories = ({className , taskInformation, setCatagoryChoiceOpen , setSubcategoryChoiceOpen }) => {
    function format(arg){
        let str = arg.split(' ')
        let rezult = ''
        for (let word of str){
            if (rezult.length < 12){
                rezult+=word + ' '
            }
            else{
                break
            }
        }
        rezult = rezult.slice(0 , rezult.length - 1)
        if(rezult[rezult.length-1] === ','){
            rezult = rezult.slice(0 , rezult.length - 1)
        }
        return(rezult)
    }
    return (
        <div className = { className ? [cl.Categories , className].join(' ') : cl.Categories   }>
            <div className={cl.Categories__block}>
                <p>Категория</p>
                <p  onClick={(e) => {setCatagoryChoiceOpen(true)}} className = {[cl.Category__linkk , cl.quest].join(' ')} href="">{taskInformation.category['name']}</p>
            </div>
            <hr className={cl.line} />
            <div className={cl.Categories__block}>
                <p>Подкатегория</p>
                <p  onClick={() => {setSubcategoryChoiceOpen(true)}} className={cl.Category__link} href="">{format(taskInformation.subCategory)}..      
                {/* {taskInformation.subCategory=== 'Выбрать' ? '' : '.'} */}
                </p>
            </div>
        </div>
    );
};

export default Categories;