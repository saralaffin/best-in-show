import React from "react";
import "./Input.css";
const Input = props => {
  let classList = "";
  let types = ["small", "medium"];
  if (types.includes(props.type)) {
    classList += ` input__${props.type}`;
  }
  // define call back function to capture email address
  let getInput = e => {
    let inputValue = e.target.value;
    console.log(inputValue);
  };
  return (
    <p>
      <label>{props.label}</label>
      <br></br>
      <input
        type="text"
        placeholder="Input"
        onChange={getInput}
        className={classList}
      ></input>
    </p>
  );
};
export default Input;
