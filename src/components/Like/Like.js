import React from "react";

const Like = props => {
  let classList = "like__div";

  if (props.active) {
    classList += ` like__div-active`;
  }
  return <div className={classList} onClick={props.onClick}></div>;
};

export default Like;
