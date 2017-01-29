var Skill, { Trump } = require('../src/trump');
var Request = require('alexa-request');
var test = require('ava');

test('LaunchRequest', t => {
  const event = Request.launchRequest().build();

  return Skill(event).then(response => {
    t.deepEqual(response, {
      version: '1.0',
      response: {
        shouldEndSession: false,
        outputSpeech: { type: 'PlainText', text: 'I\'m Kanye, a fan made skill for Alexa. Do you want to hear Kanye\'s tweets?' },
        reprompt: { outputSpeech: { type: 'PlainText', text: 'Do you want to hear Kanye\'s tweets?' } }
      }
    });
  });
});
