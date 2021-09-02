import React,{useState} from 'react'

const Header = ({addIncome,addExpense}) => {
    const[incomeValue,setIncomeValue] = useState()
    const[expenseValue,setExpenseValue] = useState()

    const handleIncome = (e) => {
        setIncomeValue(e.target.value)
    }
    const handleExpense = (e) => {
        setExpenseValue(e.target.value)
    }

    const incomeClick = (e) => {
        e.preventDefault()
        incomeValue ? addIncome(incomeValue) : alert("income value can not be null")
    }

    const expenseClick = (e) => {
        e.preventDefault()
        expenseValue ? addExpense(expenseValue) : alert("expense value can not be null")
    }

    return (
        <div>
            <h2>Welcome to Finance Tracker Page</h2>
            <p>Enter Your Incomes and Expenses</p>
            <input onChange={handleIncome} value={incomeValue} type="number" placeholder="Tuskihs Liras"/><span> &#8378; </span>
            <button onClick={incomeClick}>ADD INCOME</button>
            <hr/>
            <input onChange={handleExpense} type="number" value={expenseValue} placeholder="Tuskihs Liras"/><span> &#8378; </span>
            <button onClick={expenseClick}>ADD EXPENSE</button>
        </div>
    )
}

export default Header
