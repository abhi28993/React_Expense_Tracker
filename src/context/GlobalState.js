import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    {
      id: 1,
      text: "Flower",
      amount: -20,
    },
    {
      id: 2,
      text: "Salary",
      amount: 300,
    },
    {
      id: 3,
      text: "Book",
      amount: -10,
    },
    {
      id: 4,
      text: "Camera",
      amount: 20,
    },
  ],
};

// create Context

export const GlobalContext = createContext(initialState);

//provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };
  const AddTransaction = (transactions) => {
    dispatch({
      type: "ADD",
      payload: transactions
    });
  };
  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction, AddTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
