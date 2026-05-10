// Generated from: features\login.feature
import { test } from "../../fixtures/fixture.ts";

test.describe('Register', () => {

  test.beforeEach('Background', async ({ Given, loginPage }, testInfo) => { if (testInfo.error) return;
    await Given('the user navigates to the login page', null, { loginPage }); 
  });
  
  test('Login successfully', async ({ When, Then, And, homePage, loginPage }) => { 
    await When('the user inputs his email and password', null, { loginPage }); 
    await And('the user clicks the login button', null, { loginPage }); 
    await Then('the user should login successfully and land on the homepage', null, { homePage }); 
  });

  test.describe('Login failure due to missing credentials', () => {

    test('Example #1', async ({ When, Then, And, browserName, loginPage }) => { 
      await When('the user inputs "" and ""', null, { loginPage }); 
      await And('the user clicks the login button', null, { loginPage }); 
      await Then('the user should see an "Please fill out this field." error message', null, { browserName, loginPage }); 
    });

    test('Example #2', async ({ When, Then, And, browserName, loginPage }) => { 
      await When('the user inputs "valid@email.com" and ""', null, { loginPage }); 
      await And('the user clicks the login button', null, { loginPage }); 
      await Then('the user should see an "Please fill out this field." error message', null, { browserName, loginPage }); 
    });

    test('Example #3', async ({ When, Then, And, browserName, loginPage }) => { 
      await When('the user inputs "valid@email.com" and "password123"', null, { loginPage }); 
      await And('the user clicks the login button', null, { loginPage }); 
      await Then('the user should see an "Invalid email or password" error message', null, { browserName, loginPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user navigates to the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user inputs his email and password","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And the user clicks the login button","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then the user should login successfully and land on the homepage","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user navigates to the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user inputs \"\" and \"\"","stepMatchArguments":[{"group":{"start":16,"value":"\"\"","children":[{"start":17,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":23,"value":"\"\"","children":[{"start":24,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And the user clicks the login button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the user should see an \"Please fill out this field.\" error message","stepMatchArguments":[{"group":{"start":23,"value":"\"Please fill out this field.\"","children":[{"start":24,"value":"Please fill out this field.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user navigates to the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user inputs \"valid@email.com\" and \"\"","stepMatchArguments":[{"group":{"start":16,"value":"\"valid@email.com\"","children":[{"start":17,"value":"valid@email.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":38,"value":"\"\"","children":[{"start":39,"value":"","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And the user clicks the login button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the user should see an \"Please fill out this field.\" error message","stepMatchArguments":[{"group":{"start":23,"value":"\"Please fill out this field.\"","children":[{"start":24,"value":"Please fill out this field.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user navigates to the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user inputs \"valid@email.com\" and \"password123\"","stepMatchArguments":[{"group":{"start":16,"value":"\"valid@email.com\"","children":[{"start":17,"value":"valid@email.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":38,"value":"\"password123\"","children":[{"start":39,"value":"password123","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And the user clicks the login button","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then the user should see an \"Invalid email or password\" error message","stepMatchArguments":[{"group":{"start":23,"value":"\"Invalid email or password\"","children":[{"start":24,"value":"Invalid email or password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end