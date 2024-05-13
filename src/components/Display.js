// components/Display.js
import React from "react";

const Display = ({ input }) => {
  return (
    <div className="display">
      <input
        type="text"
        className="form-control displayInput"
        value={input}
        readOnly
      />
    </div>
  );
};

export default Display;
