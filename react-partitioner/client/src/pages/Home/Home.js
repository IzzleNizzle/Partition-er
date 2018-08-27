import React, { Component } from "react";
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import API from "../../utils/API";
import ProfilePartitioner from "../../components/ProfilePartitioner";
import Box from "../../components/Box";
import ValueVisualizer from "../../components/ValueVisualizer"


/*

Here's a graveyard for the building pieces I believe i'll need to put this together...

//used for counting table data
var boxCount = 1;

//variable to store latest value of the left property for boxes
var leftValue = 0;

// Account 1 value
var acct1Value = 100;
var valueTotal = 0;

************************************************************

Logic for calculations

  // When an input is submitted, here we are getting that input number and adding it to the 'valuetotal' variable

    var value = parseFloat($("#value1").val().trim());
    // keeps tally of all the values
    valueTotal += value;

  when an input is processed, send another add another little box to the visualizer






*/













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
        <ValueVisualizer 
          segments={
            // Sending an array of objects to the component for initial mapping
            [
              {
                name: 'Here we go',
                value: 50,
                color: 'blue'
              },
              {
                name: 'Another test',
                value: 150,
                color: 'red'
              }
            ]

          }
        />
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
