import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
 
class Creator extends React.Component {

  state = {
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  
  render() {
    const {stepIndex} = this.state;

    return (
      <div>
        <p>
            I'm going to
        </p>

        <TextField hintText="Hint Text" />

        <p>
            by the end of
        </p>

        <DatePicker hintText="Select a date" />

        <p>
            otherwise I will give away
        </p>

        <TextField hintText="Ether amount" />

        <p>
            to this address
        </p>

        <TextField hintText="Ethererum account address" />

      </div>
    );
  }
}

export default Creator;