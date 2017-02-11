# Trump skill for Alexa

It's the best skill. Terrific.

## Examples
    User: "Alexa, ask Trump about Hillary"
    Alexa: "If Hillary Clinton were a man, I don't think she would get 5% of the vote. And the beautiful thing is women don't like her"

## Building

The project uses [yarn](https://github.com/yarnpkg/yarn)

```bash

$ yarn install
$ npm run build
$ npm run package
```

This outputs `build/package.zip` which can be uploaded to AWS lambda for use with Alexa Skills. See https://github.com/alexa/skill-sample-nodejs-howto for how to set up an Alexa Skill.
