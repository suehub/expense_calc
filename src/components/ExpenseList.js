import React from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./ExpenseList.css";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses, handleEdit, handleDelete, clearItems }) => {
  // console.log(expenses);
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearItems}>
          목록 지우기
          <MdDelete />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
