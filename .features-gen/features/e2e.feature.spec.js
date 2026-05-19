// Generated from: features\e2e.feature
import { test } from "../../fixtures/fixture.ts";

test.describe('e2e test', () => {

  test('Login and add product to cart', { tag: ['@e2e'] }, async ({ Given, When, Then, And, cartPage, checkoutPage, homePage, loginPage, page, scenarioContext }) => { 
    await Given('the user navigates to homepage', null, { page }); 
    await When('the user clicks the login button from the navbar', null, { homePage }); 
    await Then('the user navigates to login page', null, { page }); 
    await When('the user inputs his email and password', null, { loginPage }); 
    await And('the user clicks the login button', null, { loginPage }); 
    await Then('the user should login successfully and land on the homepage', null, { homePage }); 
    await When('the user add product "Free-Range Chicken Breast" into cart', null, { homePage, page, scenarioContext }); 
    await Then('the user should see redicon "1" on the cart', null, { homePage }); 
    await When('the user click the cart button from the navbar', null, { homePage }); 
    await Then('the user should navigate to cart page', null, { page }); 
    await Then('the user should see the product "Free-Range Chicken Breast"', null, { cartPage, scenarioContext }); 
    await When('the user click contine to check button', null, { cartPage }); 
    await Then('the user should navigate to checkout page', null, { page }); 
    await Then('the user should see the order summary', null, { checkoutPage }); 
    await When('the user fill the address', null, { checkoutPage }); 
    await And('the user click the place order button', null, { checkoutPage }); 
    await Then('the user should order successfully', null, { checkoutPage }); 
  });

  test('Add product to cart without Login', { tag: ['@e2e'] }, async ({ Given, When, Then, And, cartPage, checkoutPage, homePage, loginPage, page, scenarioContext }) => { 
    await Given('the user navigates to homepage', null, { page }); 
    await When('the user click the Log in to buy button on product "Free-Range Chicken Breast"', null, { homePage }); 
    await Then('the user navigates to login page', null, { page }); 
    await When('the user inputs his email and password', null, { loginPage }); 
    await And('the user clicks the login button', null, { loginPage }); 
    await Then('the user should login successfully and land on the homepage', null, { homePage }); 
    await When('the user add product "Free-Range Chicken Breast" into cart', null, { homePage, page, scenarioContext }); 
    await Then('the user should see redicon "1" on the cart', null, { homePage }); 
    await When('the user click the cart button from the navbar', null, { homePage }); 
    await Then('the user should navigate to cart page', null, { page }); 
    await Then('the user should see the product "Free-Range Chicken Breast"', null, { cartPage, scenarioContext }); 
    await When('the user click contine to check button', null, { cartPage }); 
    await Then('the user should navigate to checkout page', null, { page }); 
    await Then('the user should see the order summary', null, { checkoutPage }); 
    await When('the user fill the address', null, { checkoutPage }); 
    await And('the user click the place order button', null, { checkoutPage }); 
    await Then('the user should order successfully', null, { checkoutPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\e2e.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@e2e"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user navigates to homepage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When the user clicks the login button from the navbar","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then the user navigates to login page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When the user inputs his email and password","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And the user clicks the login button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the user should login successfully and land on the homepage","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When the user add product \"Free-Range Chicken Breast\" into cart","stepMatchArguments":[{"group":{"start":21,"value":"\"Free-Range Chicken Breast\"","children":[{"start":22,"value":"Free-Range Chicken Breast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then the user should see redicon \"1\" on the cart","stepMatchArguments":[{"group":{"start":28,"value":"\"1\"","children":[{"start":29,"value":"1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user click the cart button from the navbar","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the user should navigate to cart page","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the user should see the product \"Free-Range Chicken Breast\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Free-Range Chicken Breast\"","children":[{"start":33,"value":"Free-Range Chicken Breast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When the user click contine to check button","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the user should navigate to checkout page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the user should see the order summary","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When the user fill the address","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And the user click the place order button","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then the user should order successfully","stepMatchArguments":[]}]},
  {"pwTestLine":26,"pickleLine":22,"tags":["@e2e"],"steps":[{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given the user navigates to homepage","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When the user click the Log in to buy button on product \"Free-Range Chicken Breast\"","stepMatchArguments":[{"group":{"start":51,"value":"\"Free-Range Chicken Breast\"","children":[{"start":52,"value":"Free-Range Chicken Breast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then the user navigates to login page","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When the user inputs his email and password","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"And the user clicks the login button","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then the user should login successfully and land on the homepage","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When the user add product \"Free-Range Chicken Breast\" into cart","stepMatchArguments":[{"group":{"start":21,"value":"\"Free-Range Chicken Breast\"","children":[{"start":22,"value":"Free-Range Chicken Breast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then the user should see redicon \"1\" on the cart","stepMatchArguments":[{"group":{"start":28,"value":"\"1\"","children":[{"start":29,"value":"1","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When the user click the cart button from the navbar","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then the user should navigate to cart page","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then the user should see the product \"Free-Range Chicken Breast\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Free-Range Chicken Breast\"","children":[{"start":33,"value":"Free-Range Chicken Breast","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When the user click contine to check button","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then the user should navigate to checkout page","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then the user should see the order summary","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When the user fill the address","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"And the user click the place order button","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then the user should order successfully","stepMatchArguments":[]}]},
]; // bdd-data-end