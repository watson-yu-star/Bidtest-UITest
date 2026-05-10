// Generated from: features\register.feature
import { test } from "../../fixtures/fixture.ts";

test.describe('Register', () => {

  test.beforeEach('Background', async ({ Given, registerPage }, testInfo) => { if (testInfo.error) return;
    await Given('the user navigate to the Register page', null, { registerPage }); 
  });
  
  test('Register successfully', async ({ When, Then, And, homePage, registerPage }) => { 
    await When('the user inputs the name,email and password', null, { registerPage }); 
    await And('the user click create account button', null, { registerPage }); 
    await Then('the user shound creat his account and land on the homepage', null, { homePage }); 
  });

  test('Register failure with empty name', async ({ When, Then, And, browserName, page, registerPage }) => { 
    await When('the user inputs the email and password', null, { page }); 
    await And('the user click create account button', null, { registerPage }); 
    await Then('the user shound see an error message "Please fill out this field."', null, { browserName, registerPage }); 
  });

  test('Register failure with invalid email', async ({ When, Then, And, registerPage }) => { 
    await When('the user inputs the name, invalid email and password', null, { registerPage }); 
    await And('the user click create account button', null, { registerPage }); 
    await Then('the user shound see an invalid email error message', null, { registerPage }); 
  });

  test('Register failure with short password', async ({ When, Then, And, registerPage }) => { 
    await When('the user inputs the name, email and short password', null, { registerPage }); 
    await And('the user click create account button', null, { registerPage }); 
    await Then('the user shound see an invalid password error message', null, { registerPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\register.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user navigate to the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user inputs the name,email and password","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And the user click create account button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the user shound creat his account and land on the homepage","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user navigate to the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user inputs the email and password","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And the user click create account button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the user shound see an error message \"Please fill out this field.\"","stepMatchArguments":[{"group":{"start":37,"value":"\"Please fill out this field.\"","children":[{"start":38,"value":"Please fill out this field.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user navigate to the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When the user inputs the name, invalid email and password","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"And the user click create account button","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then the user shound see an invalid email error message","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user navigate to the Register page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When the user inputs the name, email and short password","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And the user click create account button","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then the user shound see an invalid password error message","stepMatchArguments":[]}]},
]; // bdd-data-end