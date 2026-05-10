import { createBdd } from 'playwright-bdd';
import { LoginPage} from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { expect } from '@playwright/test';
import {users} from '../test-data/users.json';


import { Given, When, Then } from '../fixtures/fixture'

Given("the user navigates to the login page", async ({loginPage}) => {
     loginPage.navigateToLoginPage();
     expect(await loginPage.getEmailElement()).toBeVisible();
     expect(await loginPage.getPasswordElement()).toBeVisible();
});

When ( "the user inputs his email and password", async ({loginPage,$testInfo}) => {
   
    const parallelIndex = $testInfo.parallelIndex ;
    console.log(`Parallel Index: ${parallelIndex}`);

    const user = users[parallelIndex]; // Use the user corresponding to the parallel index

    await loginPage.fillLoginForm(user.email,user.password);
});

When ("the user clicks the login button", async ({loginPage}) => {
    await loginPage.submitLoginForm();
});

Then ("the user should login successfully and land on the homepage", async ({homePage,$testInfo}) => {
    
    const parallelIndex = $testInfo.parallelIndex ;
    console.log(`Parallel Index: ${parallelIndex}`);

    const user = users[parallelIndex]; // Use the user corresponding to the parallel index

    await homePage.waitForHomePage();
    await homePage.loginCheck('Kia ora, '+user.username);
    console.log("User logged in successfully and is on the homepage");
});

When ( "the user inputs {string} and {string}", async ({loginPage}, email, password) => {
    await loginPage.fillLoginForm(email, password);
});

Then ("the user should see an {string} error message", async ({loginPage,browserName}, error:string) => {
    const emailElement = await loginPage.getEmailElement();
    const email= await emailElement.inputValue();
    const passwordElement = await loginPage.getPasswordElement();
    const password = await passwordElement.inputValue();
    console.log(`Email entered: ${email}`);
    console.log(`Password entered: ${password}`);
    if (email === '') {
        const message = await emailElement.evaluate((input) => input.validationMessage);
        if(browserName === 'webkit'){
             expect(message).toBe('Fill out this field');
        }else{
            expect(message).toBe(error);
        }
    } else if (password === '') {
        const message = await passwordElement.evaluate((input) => input.validationMessage);
        if(browserName === 'webkit'){
             expect(message).toBe('Fill out this field');
        }else{
            expect(message).toBe(error);
        }
    } else {
        const errorElement = await loginPage.getErrorElement();
        await expect(errorElement).toBeVisible();
        await expect(errorElement).toHaveText(error);
    }   
   
   
});