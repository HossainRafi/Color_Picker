import React from "react";

const ShadeInput = ({ color, onInputChange }) => {
  return (
    <div className="shade-search">
      <input
        type="text"
        className="shade-input"
        onChange={(e) => onInputChange(e.target.value.toLowerCase())}
        value={color}
      />
    </div>
  );
};

export default ShadeInput;
