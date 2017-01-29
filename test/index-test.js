import test from 'ava';
import Skill, { Trump } from '../src/trump';
import Request from 'alexa-request';
import random from '../src/random';
import seedrandom from 'seedrandom';
import Quotes from '../src/quotes'

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

test('GetQuote', t => {
  const event = Request.intent('GetTrumpQuoteIntent').build();
  random.rng = seedrandom('test1');
  const quote = random.randomItem(Quotes.QUOTES).quote;
  random.rng = seedrandom('test1');

  return Skill(event).then(response => {
    t.is(response.response.outputSpeech.text, quote);
  });
});

test('GetTaggedQuote', t => {
  // const event = Request.intent('GetTaggedTrumpQuoteIntent', {Tag: 'stupid'}).build();
  // random.rng = seedrandom('test3');
  // console.log('2');

  // return Skill(event).then(response => {
  //   t.deepEqual(response, {
  //     version: '1.0',
  //     response: {
  //       shouldEndSession: true,
  //       outputSpeech: { type: 'PlainText', text: 'I\'m so happy that you guys like the music. I\'m working on the tour designs now.' },
  //       card: { type: 'Standard', title: '@kanyewest', text: 'I’m so happy that you guys like the music…  I’m working on the tour designs now…' }
  //     }
  //   });
  // });
});
