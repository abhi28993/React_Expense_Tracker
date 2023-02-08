import React, { useContext } from "react";
import "./commonStyle.css";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const {transactions}  = useContext(GlobalContext);
  // console.log(transactions);
  const amount = transactions.map((items) => items.amount)
  const totalAmount = amount.reduce((initial, data) => initial+data, 0);
  console.log(totalAmount);

//   const amounts = transaction.map((items) => items.amount);
//   console.log(amounts,"jhgdfs")
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">{totalAmount}</h1>
    </div>
  );
};

export default Balance;
