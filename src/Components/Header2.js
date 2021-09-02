import React from 'react'

const Header2 = ({totalExpense}) => {
    return (
        <header>
            <h1>Expense</h1>
            <div className="total-expense">{totalExpense}TRY</div>
        </header>
    )
}

export default Header2