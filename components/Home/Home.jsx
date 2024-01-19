"use client";

import { useMyContext } from "@/context/MyContext";
import { useState } from "react";

const Hero = () => {
  const { updateData } = useMyContext();
  const [commitProvide, setCommitProvide] = useState();
  // const router = useRouter();
  const [bank, setBank] = useState(0);
  const [optionValueProvider, setOptionValueProvider] = useState();
  const [optionIdProvider, setOptionIdProvider] = useState("addMoneyId");
  const [amount, setAmount] = useState();
  const [inputValue, setInputValue] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [outputText, setOutputText] = useState([]);

  // handle change
  const handleCommitChange = (e) => {
    const commitInputValue = e.target.value;
    setCommitProvide(commitInputValue);
  };
  // handle amount input

  const handleInput = (e) => {
    let inputText = e.target.value;
    const inputStrToNum = parseFloat(inputText);
    setAmount(inputStrToNum);
    setInputValue(inputText);
  };

  // handle submit
  const handleSubmit = (e) => {
    // const eatingCost = amount;
    e.preventDefault();
    const idIs = Math.floor(Math.random() * 10000);

    const dataCollect = [
      {
        optionId: optionIdProvider,
        id: idIs,
        value: amount,
        commit: commitProvide || 0,
      },
    ];

    // condition
    if ("addMoneyId" === optionIdProvider) {
      const addMoneyCalculate = bank + amount;
      setBank(addMoneyCalculate);
      console.log("addMoney id is connected ", optionIdProvider);
    } else if ("productId" === optionIdProvider) {
      const productCalculate = expenseAmount + amount;
      setExpenseAmount(productCalculate);
    } else if ("withdrawalId" === optionIdProvider) {
      const withdrawalCalculate = bank - amount;
      setBank(withdrawalCalculate);
    } else if ("cashId" === optionIdProvider) {
      const cashCalculate = bank + amount;
      setBank(cashCalculate);
    } else if ("eatingId" === optionIdProvider && amount < bank) {
      const eatingCalculate = amount + expenseAmount;
      setExpenseAmount(eatingCalculate);
    } else {
      null;
    }

    updateData(dataCollect);

    const newClickCount = commitProvide;
    setClickCount(newClickCount);
    // clear input fill
    setInputValue("");
    setCommitProvide("");
  };

  // handle change option
  const handleChangeOption = (e) => {
    const optionID = e.target.options[e.target.selectedIndex].id;
    setOptionIdProvider(optionID); // for id provider
    const optionValue = optionID.value;
    setOptionValueProvider(optionValue); // for value provider
  };
  const currentBalanceIs = bank - expenseAmount;

  return (
    <section className=" myRounded m-2 bg-gray-100">
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
      <div className=" flex w-full justify-center gap-2 ">
        <form onChange={() => handleSubmit}>
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h3 className="myFontStyle text-gray-700">Now Send</h3>
            {/* <p>{ amount}</p> */}

            <div className="flex flex-col justify-center text-center">
              <select
                id="items"
                value={optionValueProvider}
                onChange={handleChangeOption}
              >
                <option id="addMoneyId" value="Add Money">
                  Add Money
                </option>
                <option id="productId" value="Products">
                  Products
                </option>
                <option id="withdrawalId" value="Withdrawal">
                  Withdrawal
                </option>
                <option id="cashId" value="Cash">
                  Cash
                </option>
                <option id="eatingId" value="Eating">
                  Eating
                </option>
              </select>
            </div>
            <input
              type="number"
              value={inputValue}
              placeholder="Enter Amount"
              onChange={handleInput}
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
              onClick={handleSubmit}
              className="myRounded mb-5 bg-orange-500 font-semibold shadow-lg focus:bg-red-500"
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
