import React, { Component } from "react";
import "./ProfilePartitioner.css"



class ProfilePartitioner extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="profile-partitioner">
      {this.props.children}
      </div>
    );
  }
}

export default ProfilePartitioner;
