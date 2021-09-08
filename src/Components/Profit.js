import React, { useState, useEffect } from "react";

const CurrencyRow = ({ totalIncome, totalExpense }) => {
  const [total, setTotal] = useState();

  useEffect(() => {
    const newTotal = totalIncome-totalExpense
    setTotal(newTotal)    
  }, [totalIncome,totalExpense])


  return (
    <div className="total">
      <h2>Total Profit : {total}&#x20BA; </h2>
    </div>
  );
};

export default CurrencyRow;
