import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({expense,setExpense}) => {
    const removeExpense = i => {
        let temp = expense.filter((v,index) => index !== i)
        setExpense(temp)
    }
    return (
        <div className="income-list">
            {expense.map((value,index) => (
                <ExpenseItem key = {index} expense={value} index = {index} removeExpense = {removeExpense}/>
            ))}
        </div>
    )
}

export default ExpenseList
