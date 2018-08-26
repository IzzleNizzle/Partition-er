import React, { Component } from "react";
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import API from "../../utils/API";
import "./ValueVisualizer.css"
import InnerBox from "./InnerBox";


/*

  I'm thinking i could set this component up like this. once I get the data for the objec and what will be isnide of it, then i'll just send that as an object as props and i'll just interpret that here.


  object mapping:

  actually I'll have two props coming in, we'll just do the name once so we don't have to send tha tover and over again, then we'll just send an object of objects for teh value


 I would map out these objects and just make a box for each one
  
  {

      {
        name: // name of the unique inpu
        value: // how much the unique input was
      }



  }


*/



class ValueVisualizer extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="value-visualizer">

        {/* Displays value of profile */}
        <span id="display-value">$100</span>

        {/* Maps out profile boxes */}
        {
          this.props.segments.map(
          (segment, index) =>
            <div key={index}>
            {segment.value}
            {segment.name}
            <InnerBox />
            </div>
        )
        }

      </div>
    );
  }
}

export default ValueVisualizer;
