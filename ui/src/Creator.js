import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import EthereumBridge from './EthereumBridge';

var addressesDirectory = {
    "Creator": "0x99C2B57A30BeeDCDDE89f2445Af7E243E25784c8",
    "Burn": "0x0",
    "Empty": ""
}

var commitmentData = {
    goal:null,
    beneficiary:null,
    endTimestamp: null,
    amount: null,
}

var goalTextSuggestions = [
    "go to Mars",
    "learn to play ukulele",
    "make a Đapp",
    "run 100km",
    "close all my bank accounts",
    "setup a Monero node"
];

class Creator extends React.Component {

    constructor() {
        super();

        var defaultAddressKey = "Creator";
        this.state = {
            beneficiaryAddressKey: defaultAddressKey,
            beneficiaryAddress: addressesDirectory[defaultAddressKey],
            goalText:"",
            amountText: "",
            allGood: false
        };
    }

    onCreateCommitment = () =>
    {
        EthereumBridge.CreateCommit(commitmentData);
        this.props.onCommitmentCreated();
    };

    onGoalTextChanged = (e, newValue) =>
    {
        if(newValue.length > 50 )
            return;

        commitmentData.goal = newValue;

        this.setState({
            goalText: newValue
        });

        this.checkIsAllGood();
    };

    onDateSelected = (e, date) =>
    {
        commitmentData.endTimestamp = date.getTime()/1000;
        this.checkIsAllGood();
    };

    onAmountTextChanged = (e, newValue) =>
    {
        if (isNaN(newValue))
            return;

        commitmentData.amount = newValue;

        this.setState({
            amountText:newValue
        });

        this.checkIsAllGood();
    };

    onAddressSelected = (event, index, value) =>
    {
        commitmentData.beneficiary = addressesDirectory[value];
        this.setState({
            beneficiaryAddressKey:value,
            beneficiaryAddress:addressesDirectory[value]
        });

        this.checkIsAllGood();
    };

    checkIsAllGood=()=>
    {
        var allGood = false;
        if(commitmentData.goal &&
            commitmentData.beneficiary &&
            commitmentData.endTimestamp &&
            commitmentData.amount)
        allGood = true;

        this.setState({
            allGood: allGood
        });
    }


  
  render() {

    return (
      <div>
        <p>
            I'm going to
        </p>

        <TextField
            hintText = {goalTextSuggestions[Math.floor(Math.random()*goalTextSuggestions.length)]}
            value = {this.state.goalText}
            onChange = {this.onGoalTextChanged} />
        <p>
            by the end of
        </p>

        <DatePicker
            minDate = {new Date(Date.now() + (24*60*60*1000))}
            hintText = "Select a date"
            onChange = {this.onDateSelected}
            autoOk = {true}/>

        <p>
            otherwise I will give away
        </p>

        <TextField
            hintText="Ether amount"
            value = {this.state.amountText}
            onChange = {this.onAmountTextChanged}/>

        <p>
            to this address
        </p>

        <DropDownMenu value={this.state.beneficiaryAddressKey} onChange={this.onAddressSelected}>
          <MenuItem value="Creator" primaryText="the creator of this Đapp" />
          <MenuItem value="Empty" primaryText="a new address" />
          <MenuItem value="Burn" primaryText="Burn the money" />
        </DropDownMenu>

        <TextField hintText="Ethererum account address" value = {this.state.beneficiaryAddress} />
        <p>
            
        </p>
        <RaisedButton
          label = "Let's get shit done!"
          secondary = {true}
          onTouchTap = {this.onCreateCommitment}
          disabled = {!this.state.allGood}
        />       
      </div>
    );
  }
}

export default Creator;