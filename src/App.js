import React,{useState,useEffect} from 'react'
import Header from "./Components/Header"
import Header2 from "./Components/Header2"
import IncomeForm from './Components/IncomeForm'
import ExpenseForm from './Components/ExpenseForm'
import IncomeList from './Components/IncomeList'
import ExpenseList from './Components/ExpenseList'
import CurrencyRow from './Components/Profit'
const App = () => {
  const[income,setIncome] = useState([])
  const[totalIncome,setTotalIncome] = useState(0)
  const[expense,setExpense] = useState([])
  const[totalExpense,setTotalExpense] = useState(0)

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;

    for(let i = 0; i < income.length; i++){
      totalIncome += parseInt(income[i].price)
    }
    setTotalIncome(totalIncome)

    for(let i = 0; i < expense.length; i++){
      totalExpense += parseInt(expense[i].price)
    }
    setTotalExpense(totalExpense)

  }, [income,expense])
 


  return (
    <div >
      <div className="container">
      <div className="first-part">
      <Header totalIncome={totalIncome} />
      <IncomeForm income = {income} setIncome={setIncome} />
      <IncomeList income = {income} setIncome={setIncome}/>
      </div>
      <div className="second-part">
      <Header2 totalExpense={totalExpense}/>
      <ExpenseForm expense={expense} setExpense = {setExpense}/>
      <ExpenseList expense = {expense} setExpense={setExpense}/>
      </div>
      </div>
      <CurrencyRow totalExpense={totalExpense} totalIncome={totalIncome}/>
    </div>
  )
}

export default App
