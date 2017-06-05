pragma solidity ^0.4.8;
contract LetsGetShitDone {
   uint minutesUntilShitIsDone;
   string goal;
   uint startingTime;
   address beneficiaryAddress;
   address ownerAddress;

    function LetsGetShitDone(  address _beneficiary, uint _minutesUntilShitIsDone, string _goal)  payable{
        beneficiaryAddress = _beneficiary;
        ownerAddress = msg.sender;
        minutesUntilShitIsDone = _minutesUntilShitIsDone;
        goal = _goal;
        startingTime = block.timestamp;
        this.transfer(msg.value);
    }

    /* Send coins */
    function done(bool isDone) {
        if(msg.sender!=ownerAddress)
            throw;

        if(startingTime+(minutesUntilShitIsDone*60) < block.timestamp)
            throw;

        if(isDone)
            selfdestruct(ownerAddress);
        else
            selfdestruct(beneficiaryAddress);
    }
}