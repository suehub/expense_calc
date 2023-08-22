import React, { Component } from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./ExpenseList.css";
import { MdDelete } from "react-icons/md";

export default class ExpenseList extends Component {
  render() {
    return (
      <>
        <ul className="list">
          {this.props.expenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                expense={expense}
                handleDelete={this.props.handleDelete}
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
  }
}
