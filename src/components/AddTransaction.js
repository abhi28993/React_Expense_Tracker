import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import "./commonStyle.css";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { AddTransaction } = useContext(GlobalContext);
  const submitData = (event) => {
    event.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount,
    };
    AddTransaction(newTransaction);
  };
  return (
    <div>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            id="amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn" onClick={submitData}>
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
