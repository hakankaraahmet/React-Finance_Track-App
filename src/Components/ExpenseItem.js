import React from 'react'

const ExpenseItem = ({expense,index,removeExpense}) => {

    const removeHandle = (i) =>{
        removeExpense(i)
    }
    return (
        <div className="income-item">
            <button className="remove-item" onClick={() => removeHandle(index)}>
                X
            </button>
            <div className="desc">
                {expense.desc}
            </div>
            <div className="price">
                {expense.price}TRY
            </div>
        </div>
    )
}

export default ExpenseItem
