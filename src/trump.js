import { Skill, Launch, Intent, SessionEnded } from 'alexa-annotations';
import Response, { say } from 'alexa-response';
import Quotes from './quotes';

export class Trump {

    @Launch
    @Intent('AMAZON.HelpIntent')
    help() {
        return Response.build({
            ask: "I'm a really smart person. Let me tell you something.",
            reprompt: ""
        });
    }

    @Intent('GetTrumpQuoteIntent')
    getTrumpQuote() {
        var quote = Quotes.getQuote()
        return Response.build({
            say: quote,
            card: {
                title: "Trump's Thought",
                content: quote
            }
        })
    }

    @Intent('GetTaggedTrumpQuoteIntent')
    getTaggedTrumpQuote(slots) {
        var quote = Quotes.getTaggedQuote(slots.Tag);
        return Response.build({
            say: quote,
            card: {
                title: "Trump's Thought",
                content: quote
            }
        })
    }
}

export default Skill(Trump);
