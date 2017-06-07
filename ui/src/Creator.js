import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
 
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

var addressesDirectory = {
    "Creator": "0x99C2B57A30BeeDCDDE89f2445Af7E243E25784c8",
    "Burn": "0x0",
    "Empty": ""
}

class Creator extends React.Component {

    constructor() {
        super();

        var defaultAddressKey = "Creator";
        this.state = {
            beneficiaryAddressKey: defaultAddressKey,
            beneficiaryAddress: addressesDirectory[defaultAddressKey]
        };
    }

  onCreateContract = () => {
    window.SimpleStorage.set(7).then(function(value) {
      console.log(value);
    });
    console.log("click set");
  };

  onCreateContract2 = () => {
    window.SimpleStorage.get().then(function(value) {
      console.log(value);
    });
    console.log("click get");
  };

    onCreateContract3 = () => {
    window.SimpleStorage.SimpleStorage(35).then(function(value) {
      console.log(value);
    });
    console.log("click deploy");
    };

    onAddressSelected = (event, index, value) =>
    {
        console.log(addressesDirectory[value]);

        this.setState({
            beneficiaryAddressKey:value,
            beneficiaryAddress:addressesDirectory[value]
        });
    };
  
  render() {
    console.log(this);
    return (
      <div>
        <p>
            I'm going to
        </p>

        <TextField hintText="Run 40k" />

        <p>
            by the end of
        </p>

        <DatePicker hintText="Select a date" />

        <p>
            otherwise I will give away
        </p>

        <TextField hintText="Ether amount" defaultValue="0.1" />

        <p>
            to this address
        </p>

        <DropDownMenu value={this.state.beneficiaryAddressKey} onChange={this.onAddressSelected}>
          <MenuItem value="Creator" primaryText="The creator of this Đapp" />
          <MenuItem value="Empty" primaryText="New address" />
          <MenuItem value="Burn" primaryText="Burn the money" />
        </DropDownMenu>

        <TextField hintText="Ethererum account address" value = {this.state.beneficiaryAddress} />
        <p>
            
        </p>
        <FloatingActionButton onTouchTap= {this.onCreateContract} secondary={true} >
            <ContentAdd />
        </FloatingActionButton>

        <FloatingActionButton onTouchTap= {this.onCreateContract2} secondary={false} >
            <ContentAdd />
        </FloatingActionButton> 
        <FloatingActionButton onTouchTap= {this.onCreateContract3} secondary={false} >
            <ContentAdd />
        </FloatingActionButton>        
      </div>
    );
  }
}

export default Creator;