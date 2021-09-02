import React, {useRef} from 'react'

const IncomeForm = ({income,setIncome}) => {
    const desc = useRef(null)
    const price = useRef(null)

    const AddIncome = (e) => {
        e.preventDefault()
        if(desc.current.value && price.current.value){
            setIncome([...income,{"desc": desc.current.value,"price": price.current.value}])
        }
        else{
            alert("Fill Blanks")
        }
        

        desc.current.value = ""
        price.current.value = ""
    }

    return (
        <form className="income-form" onSubmit={AddIncome}>
            <div className="form-inner">
                <input type="text" name ="desc" id = "desc" placeholder="Income Description..." ref={desc}/>
                <input type="number" name = "price" id="price" placeholder="Price..." ref = {price}/>
                <input type="submit" value="add income"/>
            </div>
        </form>
    )
}

export default IncomeForm
