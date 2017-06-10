//import React from 'react';

var bridge = {};
var errorMessages = {};
errorMessages.web3Missing = "A web3.js library is necessary to connect to Ethereum network. Ensure you're using a browser that supports it."
errorMessages.connectionFail = "We're unable to stablish connection to an Ethereum node."
errorMessages.invalidBeneficiaryAddress = "The beneficiary address is not correct";
errorMessages.invalidDefaultAddress = "Invalid default address";

bridge.CreateCommit = function(commitmentData)
{
    if(!this.allGood(true))
        return;

    if(!this.isAddress(commitmentData.beneficiary))
        console.warn(errorMessages.invalidBeneficiaryAddress);

    if(!this.isAddress(window.web3.eth.defaultAccount))
        console.warn(errorMessages.invalidDefaultAddress);

    console.log(window.web3.eth.defaultAccount);
    console.log(commitmentData);
    window.web3.eth.defaultAccount=window.web3.eth.accounts[0];
    window.LetsGetShitDone1.Commit(
        commitmentData.goal,
        commitmentData.beneficiary,
        commitmentData.endTimestamp,
        {value: window.web3.toWei(commitmentData.amount), gas: 500000}).then(function(value)
            {
                console.log(value);
        });
}

bridge.GetNumberOfCommits = function ()
{
    if(!this.allGood(true))
        return;

    window.LetsGetShitDone1.GetAddressNumberOfCommitments({value: 0, gas: 500000}).then(function(value)
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

bridge.getDefaultAddressBalance = function()
{
    window.web3.fromWei(window.web3.eth.getBalance(window.web3.eth.coinbase));
}

bridge.isAddress = function (address) {
    // function isAddress(address) {
        if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        // check if it has the basic requirements of an address
        return false;
    } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
        // If it's all small caps or all all caps, return "true
        return true;
    } else {
        // Otherwise check each case
        return this.isChecksumAddress(address);
    }
}


bridge.isChecksumAddress = function (address) {
    // Check each case
    address = address.replace('0x','');
    var addressHash = window.web3.sha3(address.toLowerCase());
    for (var i = 0; i < 40; i++ ) {
        // the nth letter should be uppercase if the nth digit of casemap is 1
        if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) || (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
            return false;
        }
    }
    return true;
}
export default bridge;