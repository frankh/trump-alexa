import test from 'ava';
import Skill, { Trump } from '../src/trump';
import Request from 'alexa-request';

test('LaunchRequest', t => {
  const event = Request.launchRequest().build();
  return Skill(event).then(response => {
    t.deepEqual(response, {
      version: '1.0',
      response: {
        shouldEndSession: false,
        outputSpeech: { type: 'PlainText', text: 'I\'m a really smart person. Let me tell you something.' },
        reprompt: { outputSpeech: { type: 'PlainText', text: '' } }
      }
    });
  });
});
