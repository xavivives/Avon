import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
 
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class Creator extends React.Component {

  onCreateContract = () => {
    window.SimpleStorage.set(10);
    console.log("click");
  };

  
  render() {

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
        <p>
            
        </p>
        <FloatingActionButton onTouchTap= {this.onCreateContract} secondary={true} >
            <ContentAdd />
        </FloatingActionButton>

      </div>
    );
  }
}

export default Creator;