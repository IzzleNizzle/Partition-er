import React from "react";
import "./InnerBox.css";

export const InnerBox = props => (
  <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
    {props.children}
  </button>
);