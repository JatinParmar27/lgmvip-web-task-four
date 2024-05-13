// components/Keypad.js
import React from "react";

const Keypad = ({ handleInput, clearInput, calculateResult }) => {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "C",
    "0",
    "=",
    "+",
  ];

  return (
    <div className="keypad">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`btn ${
            isNaN(button)
              ? button === "="
                ? "btn-purple"
                : "btn-secondary"
              : "btn-purple"
          }`}
          onClick={() => {
            if (button === "=") {
              calculateResult();
            } else if (button === "C") {
              clearInput();
            } else {
              handleInput(button);
            }
          }}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Keypad;
