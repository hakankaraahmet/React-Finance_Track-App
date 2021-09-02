import React,{useRef} from 'react'

const ExpenseForm = ({expense,setExpense}) => {
    const desc = useRef(null)
    const price = useRef(null)

    const AddExpense = (e) => {
        e.preventDefault()
        if(desc.current.value && price.current.value){
        setExpense([...expense,{"desc": desc.current.value,"price": price.current.value}])
        }
        else{
            alert("Fill Blanks")
        }
        desc.current.value = ""
        price.current.value = ""
    }

    return (
        <form className="income-form" onSubmit={AddExpense}>
            <div className="form-inner">
                <input type="text" name ="desc" id = "desc" placeholder="Expense Description..." ref={desc}/>
                <input type="number" name = "price" id="price" placeholder="Price..." ref={price}/>
                <input type="submit" value="add expense"/>
            </div>
        </form>
    )
}

export default ExpenseForm
