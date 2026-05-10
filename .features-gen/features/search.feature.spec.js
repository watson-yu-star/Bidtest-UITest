// Generated from: features\search.feature
import { test } from "../../fixtures/fixture.ts";

test.describe('search', () => {

  test('Search product name', { tag: ['@search'] }, async ({ Given, When, Then, homePage, page }) => { 
    await Given('the user navigates to homepage', null, { page }); 
    await When('the user input the prodct "tomatoes" into search bar', null, { homePage }); 
    await Then('the user should see the product "tomatoes" in the result', null, { homePage }); 
  });

  test('Filter product by category', { tag: ['@search'] }, async ({ Given, When, Then, homePage, page }) => { 
    await Given('the user navigates to homepage', null, { page }); 
    await When('the user select "Beverages" from the dropdown list', null, { homePage }); 
    await Then('the user should see the products from category "Beverages" in the result', null, { homePage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\search.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@search"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user navigates to homepage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user input the prodct \"tomatoes\" into search bar","stepMatchArguments":[{"group":{"start":26,"value":"\"tomatoes\"","children":[{"start":27,"value":"tomatoes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then the user should see the product \"tomatoes\" in the result","stepMatchArguments":[{"group":{"start":32,"value":"\"tomatoes\"","children":[{"start":33,"value":"tomatoes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":["@search"],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given the user navigates to homepage","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When the user select \"Beverages\" from the dropdown list","stepMatchArguments":[{"group":{"start":16,"value":"\"Beverages\"","children":[{"start":17,"value":"Beverages","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then the user should see the products from category \"Beverages\" in the result","stepMatchArguments":[{"group":{"start":47,"value":"\"Beverages\"","children":[{"start":48,"value":"Beverages","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end