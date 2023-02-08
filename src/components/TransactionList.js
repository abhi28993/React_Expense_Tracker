import React, { useContext } from "react";
import "./commonStyle.css";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const { deleteTransaction } = useContext(GlobalContext);
  const finalData = transactions.map(items => items.amount)
  console.log(transactions, "list");
  console.log(finalData.amount, "list");

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((items) => {
          console.log('this is objs',items)
          return (
            <li
              className={items.amount < 0 ? "minus" : "plus"}
              key={items.id}
            >
              {items.text} <span>{items.amount}</span>
              <button className="delete-btn" onClick={() => deleteTransaction(items.id)}>x</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
