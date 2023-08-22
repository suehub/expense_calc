import "./App.css";

import React, { Component } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

export default class App extends Component {
  // initialExpenses = [
  //   { id: 1, charge: "렌트비", amount: 1600 },
  //   { id: 2, charge: "식비", amount: 1200 },
  //   { id: 3, charge: "교통비", amount: 400 },
  // ];

  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        { id: 1, charge: "렌트비", amount: 1600 },
        { id: 2, charge: "식비", amount: 1200 },
        { id: 3, charge: "교통비", amount: 400 },
      ],
    };
  }

  handleDelete = (id) => {
    const newExpenses = this.state.expenses.filter(
      (expense) => expense.id !== id
    );
    console.log("clicked");
    console.log(newExpenses);

    // state 변경을 위해서는 setState 함수를 이용
    this.setState({
      expenses: newExpenses,
    });
  };

  render() {
    return (
      <main className="main-container">
        <h1>예산 계산기</h1>

        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          <ExpenseForm />
        </div>

        <div
          style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}
        >
          <ExpenseList
            expenses={this.state.expenses}
            handleDelete={this.handleDelete}
          />
        </div>

        <div
          style={{ display: "flex", justifyContent: "end", marginTop: "2rem" }}
        >
          <p>
            총 지출:
            <span>원</span>
          </p>
        </div>
      </main>
    );
  }
}
