"use strict";
const moment = require("moment");
var request = require('request');

function sendMessage(params) {
  postMessage('general',
    `Good news! ${params.name} joined on ${moment().format('yyyy-MM-DD hh:mm')}`,
    function (err, result) {
      console.log('err:', err);
  });
}

function postMessage(channel, text, callback) {
  console.log('Sending slack message:' + text);
  var options = {
    'method': 'POST',
    'url': 'https://hooks.slack.com/services/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',
    'headers': {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "text": text
    })
  
  };
  request(options, function (error, response) {
    if (error) {
      throw new Error(error);
    }
    console.log(response.body);
  });
}

exports.sendMessage = sendMessage;
