import React from "react";

const buttonOn = props => (
  <button
    onClick={() => {
      props.clickHandler();
    }}
  >
    Next
  </button>
);
const Rand = props => {
  if (props.x) {
    return buttonOff();
  } else {
    return buttonOn(props);
  }
};

const buttonOff = () => <button disabled>noNext</button>;
export default Rand;
