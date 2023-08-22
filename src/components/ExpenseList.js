import React from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./ExpenseList.css";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses, handleDelete }) => {
  // console.log(expenses);
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
      <button className="btn">
        목록 지우기
        <MdDelete />
      </button>
    </>
  );
};

export default ExpenseList;
