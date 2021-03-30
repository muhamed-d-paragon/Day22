import React, { Component } from "react";
function Box(props) {
  const { size } = props;
  return <h2>This is a {props.size}px Box!</h2>;
}
export default Box;