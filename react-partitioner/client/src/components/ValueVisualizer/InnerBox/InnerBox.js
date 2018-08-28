import React, { Component } from "react";


class InnerBox extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


  render() {

    let divStyle = {
      margin: 'auto',
      position: 'absolute',
      top: 0,
      height: '100px',
      border: `5px solid pink`,
      color: this.props.color,
      width: `${this.props.size}px`
    }

    return (
      <div style={divStyle}>
        <p>
        {this.props.name}
        </p>
      </div>
    );
  }
}

export default InnerBox;