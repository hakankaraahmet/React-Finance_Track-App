import React from 'react'

const IncomeItem = ({income,index,removeIncome}) => {

    const removeHandle = (i) =>{
        removeIncome(i)
    }
    return (
        <div className="income-item">
            <button className="remove-item" onClick={() => removeHandle(index)}>
                X
            </button>
            <div className="desc">
                {income.desc}
            </div>
            <div className="price">
                {income.price}TRY
            </div>
        </div>
    )
}

export default IncomeItem
