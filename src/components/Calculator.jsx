/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import Button from "./Button";

function Calculator({ buttons }) {
  const screenRef = useRef(null);

  const [input, setInput] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    setInput(input + value);
    setDisplayValue(displayValue + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
    setDisplayValue("");
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(input);
      console.log(calculatedResult);
      setResult(calculatedResult);
      setDisplayValue("");
    } catch (error) {
      setResult("Error");
    }
  };
  const handleDel = () => {
    setDisplayValue(displayValue.slice(0, -1));
    setInput(input.slice(0, -1));
  };

  let allButtons = buttons.map((button, index) => {
    return (
      <Button
        key={index}
        button={button}
        handleCalculate={handleCalculate}
        handleClear={handleClear}
        handleDel={handleDel}
        handleInput={handleInput}
      />
    );
  });
  return (
    <main className="main">
      <div className="screen" ref={screenRef}>
        {result}
        {displayValue}
      </div>
      <div className="functions">
        <div className="buttons">{allButtons}</div>
      </div>
    </main>
  );
}
export default Calculator;
