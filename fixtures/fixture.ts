import { test as base } from 'playwright-bdd';
import { createBdd, defineBddConfig } from 'playwright-bdd';
import { RegisterPage } from '../pages/RegisterPage';
import { HomePage } from '../pages/HomePage';
import { TestInfo } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';


type MyFixtures = {
    registerPage: RegisterPage;
    homePage: HomePage;
    loginPage: LoginPage;
    cartPage: CartPage;
    checkoutPage:CheckoutPage;
    $testInfo: TestInfo;
};

export const test = base.extend<MyFixtures>({
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  $testInfo: async ({}, use, testInfo) => {
    await use(testInfo);
  }
});

export const { Given, When, Then } = createBdd(test);