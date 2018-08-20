import React, { Component } from "react";
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import API from "../../utils/API";
import "./Box.css"


class Box extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="box">
      {this.props.children}
      </div>
    );
  }
}

export default Box;
