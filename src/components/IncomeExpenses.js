import React, { useContext } from "react";
import "./commonStyle.css";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((items) => items.amount);
  // console.log(amounts, "hello");
  const income = amounts
    .filter((item) => item > 0)
    .reduce((arr, data) => arr + data, 0);
  const expenses =
    amounts.filter((item) => item < 0).reduce((arr, data) => arr + data, 0) * -1
  return (
    <div>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>

          <p id="money-plus" className="money plus">
            {income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            {expenses}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
