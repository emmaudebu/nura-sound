import React from "react";
const Button = (props) => {
  return (
    <span className={`${props.color} `}>
      {props.text} <i className="bx bx-right-arrow-alt"> </i>
    </span>
  );
};

export default Button;
