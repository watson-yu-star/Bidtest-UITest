import { createBdd } from 'playwright-bdd';
import { LoginPage} from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { expect } from '@playwright/test';
import {users} from '../test-data/users.json';
import { CartPage } from '../pages/CartPage';
import { ScenarioContext } from '../fixtures/fixture';


import { Given, When, Then } from '../fixtures/fixture'


 When("the user clicks the cart button on the navbar",async({homePage})=>{
    await homePage.navigateToCart();

 });


 Then('the user should see the product {string}', async ({cartPage,scenarioContext},productName:string) => {
  
   await cartPage.findProductInCart(productName);
   //cartPage.calculateExpectedTotal();
    await cartPage.checkCartSummary(scenarioContext);
});;


When('the user click contine to check button', async ({cartPage}) => {
  // Step: When the user click contine to check button
  // From: features\e2e.feature:15:9
  cartPage.proceedToCheckout();
 
});

Then('the user should navigate to checkout page', async ({checkoutPage,page}) => {
  // Step: Then the user should navigate to checkout page
  // From: features\e2e.feature:16:9
  await checkoutPage.checkUrlContainsCheckout();
  console.log('landing on checkout page')
});

