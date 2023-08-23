import "./App.css";

import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, charge: "렌트비", amount: 1600 },
    { id: 2, charge: "식비", amount: 1200 },
    { id: 3, charge: "교통비", amount: 400 },
  ]);

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);

  const [edit, setEdit] = useState(false);
  const [id, setId] = useState("");

  const [alert, setAlert] = useState({ show: false, type: "", text: "" });

  const handleCharge = (event) => {
    setCharge(event.target.value);
  };

  const handleAmount = (event) => {
    setAmount(event.target.valueAsNumber); // 숫자형 변환
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (charge !== "" && amount > 0) {
      if (edit) {
        const newExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });

        setExpenses(newExpenses);
        setEdit(false);

        handleAlert({ type: "success", text: "예산이 수정되었습니다." });
      } else {
        // expenses state에 새로운 객체 만들어서 추가해주기, state update
        // state update 할 때 항상 불편성을 지켜줘야 함.
        // 불편성을 지킨다는 말은 이전에 있던 값을 건드리지 않고 새로운 값을 만들어서 교체

        // 새로운 객체 생성
        const newExpense = { id: crypto.randomUUID(), charge, amount };
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);

        handleAlert({ type: "success", text: "예산이 추가되었습니다." });
      }
      setCharge("");
      setAmount(0);
    } else {
      handleAlert({ type: "danger", text: "지출 항목과 비용을 입력해주세요." });
    }
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false, type, text });
    }, 5000);
  };

  const handleEdit = (id) => {
    const expense = expenses.find((item) => item.id === id);
    const { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  const handleDelete = (id) => {
    const newExpenses = expenses.filter((expense) => expense.id !== id);

    // state 변경을 위해서는 setState 함수를 이용
    setExpenses(newExpenses);
  };

  const clearItems = () => {
    setExpenses([]);
  };

  return (
    <main className="main-container">
      {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}

      <h1>예산 계산기</h1>

      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseForm
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
      </div>

      <div style={{ width: "100%", backgroundColor: "white", padding: "1rem" }}>
        <ExpenseList
          expenses={expenses}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          clearItems={clearItems}
        />
      </div>

      <div
        style={{ display: "flex", justifyContent: "end", marginTop: "2rem" }}
      >
        <p style={{ fontSize: "2rem" }}>
          총 예산:
          <span>
            {expenses.reduce((acc, curr) => {
              return (acc += curr.amount);
            }, 0)}{" "}
            원
          </span>
        </p>
      </div>
    </main>
  );
};

export default App;
