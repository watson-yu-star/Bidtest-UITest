import { createBdd } from 'playwright-bdd';
import { LoginPage} from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { expect } from '@playwright/test';
import {users} from '../test-data/users.json';
import { CartPage } from '../pages/CartPage';


import { Given, When, Then } from '../fixtures/fixture'


Given('the user navigates to homepage', async ({homePage}) => {

  // const homePage = new HomePage(page);
  await homePage.navigateToHomePage();
  
  await homePage.waitForHomePage();
  //await page.waitForLoadState('networkidle');
});

When('the user clicks the login button from the navbar', async ({homePage}) => {
  // Step: And the user clicks login button
  // From: features\e2e.feature:8:9
  await homePage.clickLoginButton();
});
 
Then('the user navigates to login page', async ({page}) => {

    expect(page).toHaveURL(/\/login/);
    const loginPage = new LoginPage(page);
    expect(await loginPage.getEmailElement()).toBeVisible();
    expect(await loginPage.getPasswordElement()).toBeVisible();
    
});

When('the user add product {string} into cart', async ({page,homePage,scenarioContext}, productName: string) => {
  // Step: When the user add product "Free-Range Chicken Breast" into cart
  // From: features\e2e.feature:10:9
   try{
    const responsePromise = page.waitForResponse(/\/cart\/items/);
    await homePage.addProductToCart(productName);
    
    const response = await responsePromise;
    
    scenarioContext.interceptedResponse = await response.json();
    console.log("scenarioContext:"+ scenarioContext.interceptedResponse.subtotal);
   }catch(error){
       console.error("Fetch operation failed:", error);
   }
  
});

Then('the user should see redicon {string} on the cart', async ({homePage}, iconText: string) => {
  // Step: Then the user should see redicon on the cart
  // From: features\e2e.feature:11:9
  await homePage.checkRedIconOnCart(iconText);
});

When('the user click the cart button from the navbar', async ({homePage}) => {
  // Step: When the user click the cart button from the navbar
  // From: features\e2e.feature:12:9
  console.log('step to click the cart');

  await homePage.navigateToCart();
});

Then('the user should navigate to cart page', async ({page}) => {
  // Step: Then the user should navigate to cart page
  // From: features\e2e.feature:13:9
  await expect(page).toHaveURL(/\/cart/);
})

When('the user click the Log in to buy button on product {string}',async({homePage},productName)=>{
    homePage.loginToBuy(productName);
})

When('the user input the prodct {string} into search bar', async ({homePage}, productName: string) => {
  // Step: When the user input the prodct "Organic Hass Avocados" into search bar
  // From: features\search.feature:6:5

  homePage.searchProduct(productName);

});

Then('the user should see the product {string} in the result', async ({homePage},productName:string) => {
  // Step: Then the user should see the product Organic Hass Avocados in the result
  // From: features\search.feature:7:5
  homePage.findProduct(productName);

});



When('the user select {string} from the dropdown list', async ({homePage}, categoryName: string) => {
  // Step: When the user select "Beverages" from the dropdown list
  // From: features\search.feature:12:5
  homePage.filterProduct(categoryName);
});

Then('the user should see the products from category {string} in the result', async ({homePage}, categoryName: string) => {
  // Step: Then the user should see the products from category "Beverages" in the result
  // From: features\search.feature:13:5
  homePage.checkCategory(categoryName);
});