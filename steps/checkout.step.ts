import { createBdd } from 'playwright-bdd';
import { LoginPage} from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { expect } from '@playwright/test';
import {users} from '../test-data/users.json';
import { CartPage } from '../pages/CartPage';
import {address} from '../test-data/address.json'


import { Given, When, Then } from '../fixtures/fixture'

Then('the user should see the order summary', async ({checkoutPage}) => {
  // Step: Then the user should see the order summary
  // From: features\e2e.feature:17:9
   await checkoutPage.checkOrderSummary();
});

When('the user fill the address', async ({checkoutPage}) => {
  // Step: When the user fill the address
  // From: features\e2e.feature:18:9
  await checkoutPage.fillContactInfo(address.fullName,address.email,address.street,address.city,address.postCode);
});

When('the user click the place order button', async ({checkoutPage}) => {
  // Step: And the user click the place order button
  // From: features\e2e.feature:19:9
    (await checkoutPage.getplaceOrderButton()).click();

});

Then('the user should order successfully', async ({checkoutPage}) => {
  // Step: Then the user should order successfully
  // From: features\e2e.feature:20:9
    await checkoutPage.checkOrderConfirmed();
});