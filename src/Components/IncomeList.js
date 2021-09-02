import React from 'react'
import IncomeItem from './IncomeItem'

const IncomeList = ({income,setIncome}) => {
    const removeIncome = i => {
        let temp = income.filter((v,index) => index !== i)
        setIncome(temp)
    }
    return (
        <div className="income-list">
            {income.map((value,index) => (
                <IncomeItem key = {index} income={value} index = {index} removeIncome = {removeIncome}/>
            ))}
        </div>
    )
}

export default IncomeList
