// Generated from: features\cart.feature
import { test } from "../../fixtures/fixture.ts";

test.describe('cart', () => {

  test('Navgate to cart page', { tag: ['@cart'] }, async ({ Given, When, page }) => { 
    await Given('the user navigates to homepage', null, { page }); 
    await When('the user clicks the cart button on the navbar', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@cart"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user navigates to homepage","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user clicks the cart button on the navbar","stepMatchArguments":[]}]},
]; // bdd-data-end