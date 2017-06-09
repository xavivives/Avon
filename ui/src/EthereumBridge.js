//import React from 'react';

var bridge = {};
var errorMessages = {};
errorMessages.web3Missing = "A web3.js library is necessary to connect to Ethereum network. Ensure you're using a browser that supports it."
errorMessages.connectionFail = "We're unable to stablish connection to an Ethereum node."

bridge.CreateCommit = function(commitmentData)
{
    if(!this.allGood(true))
        return;

    window.LetsGetShitDone1.Commit(
        commitmentData.goal,
        commitmentData.beneficiary,
        commitmentData.endTimestamp,
        {value: window.web3.toWei(commitmentData.amount), gas: 500000}).then(function(value)
            {
                console.log(value);
        });
}

bridge.startWatch = function()
{
    if(!this.allGood(true))
        return;

    var filter = window.web3.eth.filter('latest');

    filter.watch(function(error, result)
    {
        var block = window.web3.eth.getBlock(result, true);
        console.log('block #' + block.number);
        console.dir(block.transactions);
    });
}

bridge.isWeb3Avaialable = function ()
{
    if(window.web3)
        return true;
    return false;
}

bridge.isConnectedToEtherumNode = function ()
{
    return window.web3.isConnected();
}

bridge.allGood = function (showWarnings)
{
    if(!this.isWeb3Avaialable())
    {
        if(showWarnings)
            console.warn(errorMessages.web3Missing);
        return false;
    }
    else if (!this.isConnectedToEtherumNode())
    {
        if(showWarnings)
            console.warn(errorMessages.connectionFail);
        return false;
    }
    return true;
}

export default bridge;