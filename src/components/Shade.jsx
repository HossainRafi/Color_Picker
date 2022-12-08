import React, { useState, useEffect } from "react";

const Shade = ({ shade, onColorCopy }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let interval;
    if (copied == true) {
      interval = setInterval(() => {
        setCopied(false);
      }, 1500);
    }
    return () => {
      clearInterval(interval);
    };
  }, [copied]);
  return (
    <div className="shade" style={{ backgroundColor: shade.hexString() }}>
      <span>{shade.hexString()}</span>
    </div>
  );
};

export default Shade;
