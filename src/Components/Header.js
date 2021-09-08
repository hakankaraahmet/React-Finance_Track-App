import React from 'react'

const Header = ({totalIncome}) => {
    return (
        <header>
            <h1>Income</h1>
            <div className="total-income">{totalIncome}&#x20BA;</div>
        </header>
    )
}

export default Header
