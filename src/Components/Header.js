import React from 'react'

const Header = ({totalExpense,totalIncome}) => {
    return (
        <header>
            <h1>Income</h1>
            <div className="total-income">{totalIncome}TRY</div>
            <h1>Expense</h1>
            <div className="total-expense">{totalExpense}TRY</div>
        </header>
    )
}

export default Header
