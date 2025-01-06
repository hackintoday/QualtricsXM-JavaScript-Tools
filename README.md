# QualtricsXM-JavaScript-Tools

## Reference material for people who need more functionality beyond vanilla Qualtrics XM

This repository was created for people who need more functionality for their survey beyond the default survey options.
Since this is a work in progress primary for use internally within the Institute for Social Research, it may be disorganized
and the code may need to fixed to be adapted for your needs. ChatGPT-4o will do a reasonable job saving you time fixing any aesthetics,
but be sure to actually check the functionality works as it will sometimes not fix code if you do not explicity state it.

## Installation and Setup

There are no separate packages code editors required as long as you know how to use the console on your web browser.
You may use your own code editor like VS Code with a JavaScript plugin to check if the code works.

If you want to use the input for the variables as survey response, you should set up embedded code in the Survey Flow.
There are built-in embedded code in Qualtrics as well. Use the "Setting Values with Built-in Embedded Data Fields" article in the following article for reference: [link](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/standard-elements/embedded-data/)

There are three options given on when the code might run. If you wish to copy and paste, make sure you are matching it with right function.
[Javascript Guide](https://www.qualtrics.com/support/survey-platform/survey-module/question-options/add-javascript/)

```
Qualtrics.SurveyEngine.addOnload

Qualtrics.SurveyEngine.addOnReady

Qualtrics.SurveyEngine.addOnUnload

```
