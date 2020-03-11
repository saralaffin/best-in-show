import React from "react";

const Form = props => {
  return (
    <form className="form__form">
      {props.inputComponenets}
      {props.dropdownComponents}
      {props.buttonComponent}
    </form>
  );
};

export default Form;
