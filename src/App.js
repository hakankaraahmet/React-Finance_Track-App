import React,{useState,useEffect} from 'react'
import Header from "./Components/Header"
import IncomeForm from './Components/IncomeForm'
const App = () => {
  const[income,setIncome] = useState([])
  const[totalIncome,setTotalIncom] = useState(0)
  const[expense,setExpense] = useState([])
  const[totalExpense,setTotalExpense] = useState(0)
 
  return (
    <div>
      <Header totalIncome={totalIncome} totalExpense={totalExpense}/>
    </div>
  )
}

export default App
