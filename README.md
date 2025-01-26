# QualtricsXM-JavaScript-Tools

## Reference material for people who need more functionality beyond vanilla Qualtrics XM

This repository was created for people who need more functionality for their survey beyond the default survey options.
Since this is a work in progress primary for use internally within the UMich Institute for Social Research, it may be disorganized
and the code may need to fixed to be adapted for your needs. ChatGPT-4o on whichever platform you using it from will do a 
reasonable job saving you time fixing any aesthetics, but be sure to actually check the functionality works as it will 
sometimes not fix code if you do not explicity state it be done. Some code for API calls may be also out of date.

## Installation and Setup

There are no separate packages code editors required as long as you know how to use the console on your web browser.
You may use your own code editor like VS Code with a JavaScript plugin to check if the code works.

If you want to use the input for the variables as survey response, you should set up embedded code in the Survey Flow.
There are built-in embedded code in Qualtrics as well. Use the "Setting Values with Built-in Embedded Data Fields" article in the following article for reference: [link](https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/standard-elements/embedded-data/) Note that embedded code is currently not available in skip logic and you will instead have either use display logic or survey flow, both of which can become tedious, if you wish to apply flow logic to your questions.

There are three options given by default on when the code might run. If you wish to copy and paste, make sure you are matching it with right function.
[Javascript Guide](https://www.qualtrics.com/support/survey-platform/survey-module/question-options/add-javascript/)

There are also two more, but technically one since addOnClick is being called within addOnload. You would need to use addOnPageSubmit to store information in the embedded variables if you are piping embedded variables in the next question. Otherwise, your code would not have compiled and loaded the embedded variables in time right after the respondent has clicked the next button. [JavaScript Question API Guide](https://api.qualtrics.com/82bd4d5c331f1-qualtrics-java-script-question-api-class)

```
Qualtrics.SurveyEngine.addOnload

Qualtrics.SurveyEngine.addOnReady

Qualtrics.SurveyEngine.addOnUnload

Qualtrics.SurveyEngine.addOnPageSubmit

```
