/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/**
 * App ID for the skill
 */
var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require("./AlexaSkill");
var Quotes = require("./quotes");

var Trump = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Trump.prototype = Object.create(AlexaSkill.prototype);
Trump.prototype.constructor = Trump;

Trump.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    //console.log("onSessionStarted requestId: " + sessionStartedRequest.requestId + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

Trump.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    //console.log("onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewQuoteRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
Trump.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    //console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

Trump.prototype.intentHandlers = {
    "GetTrumpQuoteIntent": function (intent, session, response) {
        handleNewQuoteRequest(response);
    },

    "GetTaggedTrumpQuoteIntent": function (intent, session, response) {
        handleNewQuoteRequest(response, intent.slots.Tag);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("I'm a really smart person. Let me tell you something.", "Let me tell you something.");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/**
 * Gets a random new fact from the list and returns to the user.
 */
function handleNewQuoteRequest(response, tag) {
    var randomQuote;
    if( tag ) {
        randomQuote = Quotes.getTaggedQuote(tag.value);
    } else {
        randomQuote = Quotes.getQuote();
    }

    // Create speech output
    var cardTitle = "Trump's Thought";
    response.tellWithCard(randomQuote, cardTitle, randomQuote);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    var skill = new Trump();
    skill.execute(event, context);
};
