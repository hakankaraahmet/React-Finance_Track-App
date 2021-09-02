import React from 'react'

const IncomeForm = () => {
    return (
        <form className="income-form">
            <div className="form-inner">
                <input type="text" name ="desc" id = "desc" placeholder="Income Description..."/>
                <input type="number" name = "price" id="price" placeholder="Price..."/>
                <input type="submit" value="add income"/>
            </div>
        </form>
    )
}

export default IncomeForm
