import { createBdd } from 'playwright-bdd';
import { RegisterPage } from '../pages/RegisterPage';
import { HomePage } from '../pages/HomePage';
import { expect } from '@playwright/test';

import { Given, When, Then } from '../fixtures/fixture'

 Given("the user navigate to the Register page", async ({registerPage}) => {
    //const registerPage = new RegisterPage(page);
    await registerPage.navigateToRegisterPage();
  });

When ( "the user inputs the name,email and password", async ({registerPage,$testInfo}) => {
    
    const workerId = $testInfo.workerIndex;
    console.log(`Worker ID: ${workerId}`);

    //const registerPage = new RegisterPage(page);
    const username = 'bidtestuser';
    const email = `bidtest_worker_${workerId}_${Date.now()}@example.com`;
    console.log(`Generated email: ${email}`);
    await registerPage.fillRegistrationForm(username, email, 'password123');
  });

When ("the user click create account button", async ({registerPage}) => {
   // const registerPage = new RegisterPage(page);
    await registerPage.submitRegistrationForm();
  });

Then ("the user shound creat his account and land on the homepage", async ({homePage}) => {
  
   //const homePage = new HomePage(page);
   
   await homePage.waitForHomePage();
   await homePage.loginCheck('Kia ora, bidtestuser');
   console.log("Account created successfully and user is on the homepage");
  });   


  When ( "the user inputs the email and password", async ({page}) => {
    
    const registerPage = new RegisterPage(page);
    const username = '';
    const email = `bidtest@example.com`;
    await registerPage.fillRegistrationForm(username, email, 'password123');
  });


  Then ("the user shound see an error message {string}", async ({registerPage,browserName},error:string) => {

    //const registerPage = new RegisterPage(page);  
    const nameInput = await registerPage.getNameElement();
  
  // Use page.evaluate to extract the browser's internal validation message
     const message = await nameInput.evaluate((input) => input.validationMessage);

     if (browserName === 'webkit') {
        expect(message).toBe('Fill out this field');
     }else{
  
        expect(message).toBe('Please fill out this field.')
     }
  });

  
  When ( "the user inputs the name, invalid email and password", async ({registerPage}) => {
    
   // const registerPage = new RegisterPage(page);
    const username = 'bidtestuser';
    const email = `bidtestexample.com`;
    await registerPage.fillRegistrationForm(username, email, 'password123');
  });

  Then ("the user shound see an invalid email error message", async ({registerPage}) => {
   // const registerPage = new RegisterPage(page);
    const emailInput = await registerPage.getEmailElement();

    const required = await emailInput.evaluate((input) => input.validity.typeMismatch);
    expect(required).toBe(true)

  });

  When ( "the user inputs the name, email and short password", async ({registerPage}) => {
    
    //const registerPage = new RegisterPage(page);
    const username = 'bidtestuser';
    const email = `bidtestexample.com`;
    await registerPage.fillRegistrationForm(username, email, '123');
  });

   Then ("the user shound see an invalid password error message", async ({registerPage}) => {
    //const registerPage = new RegisterPage(page);
    const passwordInput = await registerPage.getPasswordElement();
    const required = await passwordInput.evaluate((input) => input.validity.tooShort);
    expect(required).toBe(true)

  });