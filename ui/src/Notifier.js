//import React from 'react';

var notifier = {};

notifier.addListener = function (callback)
{
    this.callback = callback;
}

notifier.notify = function(message)
{
    this.callback(message);
}


export default notifier;