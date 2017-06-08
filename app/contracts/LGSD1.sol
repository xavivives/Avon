pragma solidity ^0.4.8;

contract LGSD1
{
    struct commitmentData
    {
        address beneficiary;
        uint endTimestamp;
        uint256 amount;
        bool resolved;
    }

    mapping (address => commitmentData[]) commitments;

    event CommitmentCreatedSuccesfully(uint commitmentId, int secondsLeft);
   event NoTimeYet(uint commitmentId, int secondsLeft);
   event DoneAndFundsReturned(uint commitmentId, uint256 paidAmount, address owner, int secondsLeft);
   event NotDoneAndFunsPaid(uint commitmentId, uint256 paidAmount, address beneficiary, int secondsLeft);
   event CommitmentIsResolvedAlready(uint commitmentId);
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
        commitment.resolved = false;

        commitments[msg.sender].push(commitment);

        CommitmentCreatedSuccesfully(commitments[msg.sender].length-1, int(endTimestamp) - int(block.timestamp));
    } 

    function Done(uint commitmentId, bool isDone)
    {
        if(commitments[msg.sender].length< commitmentId) //checks if commitment exsits
        {
            TheCommitmentYouAreLookingForDoesntExistOrYouHaventCreatedOneYet(commitmentId);
            throw;
        }

        if(commitments[msg.sender][commitmentId].resolved == true) //amount == 0  means this function succesfull executed in the past already
        {
            CommitmentIsResolvedAlready(commitmentId);
            throw;
        } 
            
        if(block.timestamp < commitments[msg.sender][commitmentId].endTimestamp ) 
        {
            NoTimeYet(commitmentId, int(commitments[msg.sender][commitmentId].endTimestamp) - int(block.timestamp));
            throw;
        }

        if(isDone)
        {
            if(!msg.sender.send(commitments[msg.sender][commitmentId].amount))
                throw;

            commitments[msg.sender][commitmentId].resolved = true;
            DoneAndFundsReturned(commitmentId,commitments[msg.sender][commitmentId].amount, msg.sender, int(commitments[msg.sender][commitmentId].endTimestamp) - int(block.timestamp));
        }
        else
        {
            if(!commitments[msg.sender][commitmentId].beneficiary.send(commitments[msg.sender][commitmentId].amount))
                throw;

            commitments[msg.sender][commitmentId].resolved = true;
            NotDoneAndFunsPaid(commitmentId,commitments[msg.sender][commitmentId].amount, msg.sender, int(commitments[msg.sender][commitmentId].endTimestamp) - int(block.timestamp));
        }
    }

    function() payable { 
    
    }
}