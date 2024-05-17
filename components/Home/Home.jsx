"use client";

import { useMyContext } from "@/context/MyDataContext";
import { useState } from "react";

const Hero = () => {
  const { addValue, addCommit } = useMyContext();
  const [inputDataValue, setInputDataValue] = useState("");
  const [commitProvide, setCommitProvide] = useState("");
  const [bank, setBank] = useState(0);
  const [optionValueProvider, setOptionValueProvider] = useState("");
  const [optionIdProvider, setOptionIdProvider] = useState("addMoneyId");
  const [amount, setAmount] = useState(0);
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  console.log(optionValueProvider);
  const handleCommitChange = (e) => {
    setCommitProvide(e.target.value);
  };

  const handleAmountInput = (e) => {
    const inputStrToNum = parseFloat(e.target.value);
    setInputDataValue(inputStrToNum);
    setAmount(inputStrToNum);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!commitProvide) {
      alert("Commit is not provided. Form not submitted.");
      return;
    }

    const idIs = Math.floor(Math.random() * 10000);

    if (optionIdProvider === "addMoneyId") {
      setBank((prevBank) => prevBank + amount);
    } else if (optionIdProvider === "productId") {
      setExpenseAmount((prevExpense) => prevExpense + amount);
    } else if (optionIdProvider === "withdrawalId") {
      setBank((prevBank) => prevBank - amount);
    } else if (optionIdProvider === "cashId") {
      setBank((prevBank) => prevBank + amount);
    } else if (optionIdProvider === "eatingId" && amount < bank) {
      setExpenseAmount((prevExpense) => prevExpense + amount);
    }

    addValue(inputDataValue);
    addCommit(commitProvide);

    const mongodbData = { inputDataValue, commitProvide };

    try {
      const response = await fetch("http://localhost:5000/history", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mongodbData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }

    setInputDataValue("");
    setCommitProvide("");
    setClickCount(clickCount + 1);
  };

  const handleChangeOption = (e) => {
    const optionID = e.target.options[e.target.selectedIndex].id;
    setOptionIdProvider(optionID);
    const optionValue = e.target.value;
    setOptionValueProvider(optionValue);
  };

  const currentBalanceIs = bank - expenseAmount;

  return (
    <section className="myRounded m-2 bg-gray-100">
      <div className="grid grid-cols-5 gap-2 p-2 text-center">
        <div className="myRounded myFontStyle col-span-5 h-36 bg-gradient-to-b from-purple-400 to-purple-500">
          <h3 className="text-2xl text-purple-900">Total Budget Bank</h3>
          <p>
            <span>$</span>
            {bank}
          </p>
        </div>
        <div className="myRounded myFontStyle col-span-3 bg-gradient-to-r from-sky-400 to-sky-600">
          <h3 className="text-sky-900">Expense</h3>
          <p>
            <span>${expenseAmount}</span>
          </p>
        </div>
        <div className="myRounded myFontStyle col-span-2 bg-green-400">
          <h3 className="text-green-900">Today now </h3>
          <p>
            <span>$</span>
            {currentBalanceIs}
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h3 className="myFontStyle text-gray-700">Now Send</h3>
            <div className="flex flex-col justify-center text-center">
              <select
                id="items"
                value={optionValueProvider}
                onChange={handleChangeOption}
              >
                <option id="addMoneyId" value="Add Money">
                  + Add Money
                </option>
                <option id="productId" value="Products">
                  - Products Buy
                </option>
                <option id="withdrawalId" value="Withdrawal">
                  - Withdrawal
                </option>
                <option id="cashId" value="Cash In">
                  + Cash In
                </option>
                <option id="eatingId" value="Eating">
                  - Eating
                </option>
              </select>
            </div>
            <input
              type="number"
              value={inputDataValue}
              placeholder="Enter Amount"
              onChange={handleAmountInput}
              className="myRounded font-semibold shadow-lg outline-none"
            />
            <input
              type="text"
              value={commitProvide}
              placeholder="Commit"
              onChange={handleCommitChange}
              className="myRounded font-semibold shadow-lg outline-none"
            />
            <button
              type="submit"
              className="myRounded mb-5 bg-orange-500 font-semibold text-white shadow-lg focus:bg-red-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
