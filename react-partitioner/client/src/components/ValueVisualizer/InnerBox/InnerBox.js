import React, { Component } from "react";




class InnerBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      divStyle: {
        margin: 'auto',
        border: '5px solid pink'
      }
    }
  }



  render() {
    return (
      <div style={this.state.divStyle}>
      </div>
    );
  }
}

export default InnerBox;