pragma solidity ^0.4.8;

contract LGSD1
{
    struct commitmentData{
        address beneficiary;
        uint endTimestamp;
        uint256 amount;
    }

    mapping (address => commitmentData[]) commitments;


   event NotTimeYet(int secondsLeft);
   event Success(uint paidAmount, address owner, int secondsLeft);
   event Fail(uint paidAmount, address beneficiary, int secondsLeft);
   event Deployed(uint currentTime);

    function LGSD1()  payable
    {
    } 

    function Commit(address beneficiary, uint endTimestamp)  payable
    {
        commitmentData memory commitment;
        commitment.beneficiary = beneficiary;
        commitment.endTimestamp = endTimestamp;
        commitment.amount = msg.value;

        commitments[msg.sender].push(commitment);
        this.transfer(msg.value);
    } 

    function Done(uint commitmentId, bool isDone)
    {
        if(commitments[msg.sender].length< commitmentId)
            throw;

        if(commitments[msg.sender][commitmentId].endTimestamp  < block.timestamp)
            throw;

        if(isDone)
            msg.sender.transfer(commitments[msg.sender][commitmentId].amount);
        else
            commitments[msg.sender][commitmentId].beneficiary.transfer(commitments[msg.sender][commitmentId].amount);
    }

    function() payable { 
    
    }
}