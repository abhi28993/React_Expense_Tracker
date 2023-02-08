import React from 'react';
const Transaction = ({transaction}) => {
    // console.log(transaction,"transaction data");
    const sign = items => items.amount;
    // console.log(sign,"dfghjk")
    return(
        <div>
             <li
              className={transaction.amount < 0 ? "minus" : "plus"}
              key={transaction.id}
            >
              {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
              <button className="delete-btn">x</button>
            </li>
        </div>
    )
}

export default Transaction;