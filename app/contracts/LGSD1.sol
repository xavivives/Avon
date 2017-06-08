pragma solidity ^0.4.8;

contract LGSD1
{
    struct commitmentData{
        address beneficiary;
        uint endTimestamp;
        uint256 amount;
    }

    mapping (address => commitmentData[]) commitments;

    event CommitmentCreatedSuccesfully(uint commitmentId, int secondsLeft);
   event NoTimeYet(uint commitmentId, int secondsLeft);
   event DoneAndFundsReturned(uint commitmentId, uint256 paidAmount, address owner, int secondsLeft);
   event NotDoneAndFunsPaid(uint commitmentId, uint256 paidAmount, address beneficiary, int secondsLeft);
   event CommitmentIsFinalizedAlready(uint commitmentId);
   event TheCommitmentYouAreLookingForDoesntExistOrYouHaventCreatedOneYet(uint commitmentId);

    function LGSD1()  payable
    {
    } 

    function Commit(address beneficiary, uint endTimestamp)  payable
    {
        if(msg.value == 0)
            throw;

        commitmentData memory commitment;
        commitment.beneficiary = beneficiary;
        commitment.endTimestamp = endTimestamp;
        commitment.amount = msg.value;

        commitments[msg.sender].push(commitment);
        this.transfer(msg.value);
        CommitmentCreatedSuccesfully(commitments[msg.sender].length-1, endTimestamp - int(block.timestamp));
    } 

    function Done(uint commitmentId, bool isDone)
    {
        if(commitments[msg.sender].length< commitmentId) //checks if commitment exsits
        {
            TheCommitmentYouAreLookingForDoesntExistOrYouHaventCreatedOneYet(commitmentId);
            throw;
        }

        if(commitments[msg.sender][commitmentId].amount == 0) //amount == 0  means this function succesfull executed in the past already
        {
            CommitmentIsFinalizedAlready(commitmentId);
            throw;
        } 
            
        if(commitments[msg.sender][commitmentId].endTimestamp  < block.timestamp) 
        {
            NoTimeYet(commitmentId, int(commitments[msg.sender][commitmentId].endTimestamp) - int(block.timestamp));
            throw;
        }

        if(isDone)
        {
            msg.sender.transfer(commitments[msg.sender][commitmentId].amount);
            DoneAndFundsReturned(commitmentId,commitments[msg.sender][commitmentId].amount, msg.sender, int(commitments[msg.sender][commitmentId].endTimestamp) - int(block.timestamp));
        }
        else
        {
            commitments[msg.sender][commitmentId].beneficiary.transfer(commitments[msg.sender][commitmentId].amount);
            NotDoneAndFunsPaid(commitmentId,commitments[msg.sender][commitmentId].amount, msg.sender, int(commitments[msg.sender][commitmentId].endTimestamp) - int(block.timestamp));
        }
    }

    function() payable { 
    
    }
}