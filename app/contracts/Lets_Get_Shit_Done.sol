pragma solidity ^0.4.8;
contract LetsGetShitDone {
   uint seconds;
   string goal;
   uint startingTime;
   address beneficiaryAddress;
   address ownerAddress;

   event NotTimeYet(uint timeLeft);
   event Success(uint paidAmount, address owner, uint overTime);
   event Fail(uint paidAmount, address beneficiary);
   event Deployed(uint currentTime);

    function LetsGetShitDone(  address beneficiaryWhenYouFail, uint minutesUntilShitIsDone)  payable{
        beneficiaryAddress = beneficiaryWhenYouFail;
        ownerAddress = msg.sender;
        seconds = minutesUntilShitIsDone * 60;
        goal = _goal;
        startingTime = block.timestamp;
        this.transfer(msg.value);
        Deployed(block.timestamp);
    }

    function Done(bool isDone) {
        if(msg.sender != ownerAddress)
            throw;

        if(startingTime+(minutesUntilShitIsDone*60) < block.timestamp)
        {
            NotTimeYet( ( block.timestamp - startingTime - seconds)/60);
            throw; 
        }

        if(isDone)
        {
            Success(this.balance, ownerAddress);
            selfdestruct(ownerAddress);
        }
        else
            Fail(this.balance, beneficiaryAddress);
            selfdestruct(beneficiaryAddress);
    }
}