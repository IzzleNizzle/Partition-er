import React, { Component } from "react";
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import API from "../../utils/API";
import ProfilePartitioner from "../../components/ProfilePartitioner";
import Box from "../../components/Box";

class Home extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return (
      <ProfilePartitioner >
        <Box >
          <h1> This is where you would put hte name of the project
          </h1>
        </ Box>
        <Box >
          <h1> Data visualization
          </h1>
        </ Box>
        <Box >
          <h1> User action input
          </h1>
        </ Box>
        <Box >
          <h4> Data Table
          </h4>
        </ Box>
      </ProfilePartitioner>
    );
  }
}

export default Home;
