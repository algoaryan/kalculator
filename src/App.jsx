import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");

  function display(value) {
    setInputValue(prevValue => prevValue + value);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function calculate() {
    let answers = eval(inputValue);
    setInputValue(answers);
  }

  function clear() {
    setInputValue("");
  }

  useEffect(() => {
    function handleKeyPress(event) {
      const key = event.key;
      const isNumber = /^[0-9]$/.test(key);
      const isOperator = /^[/*+-]$/.test(key);

      if (isNumber || isOperator || key === ".") {
        event.preventDefault();
        display(key);
      } else if (key === "Enter") {
        event.preventDefault();
        calculate();
      }
    }

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [calculate, inputValue]);

  return (
    <>
      <h1>Kalculator</h1>
      <form name="calc" className="calculator">
        <input
          type="text"
          className="value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <span className="num clear" onClick={() => clear()}>c</span>
        <span onClick={() => display("/")}>/</span>
        <span onClick={() => display("*")}>*</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("-")}>-</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span onClick={() => display("+")} className="plus">+</span>
        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display("00")}>00</span>
        <span onClick={() => display(".")}>.</span>
        <span onClick={() => calculate()} className="num equal">=</span>
      </form>
    </>
  );
}

export default App;
