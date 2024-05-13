// components/Calculator.js
import React, { useState } from "react";
import Display from "./Display";
import Keypad from "./Keypad";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="calculator">
            <Display input={input} />
            <Keypad
              handleInput={handleInput}
              clearInput={clearInput}
              calculateResult={calculateResult}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
