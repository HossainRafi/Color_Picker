import React, { useEffect } from "react";
import Values from "values.js";
import isColor from "is-color";

const Shades = ({ color }) => {
  useEffect(() => {
    if (isColor(color)) createShades(color);
  }, [color]);

  const createShades = (color) => {
    const shades_color = new Values(color);
    let shades = shades_color.shades(1);
    console.log(shades[0].rgbString());
  };

  return <div className="shades"></div>;
};

export default Shades;
