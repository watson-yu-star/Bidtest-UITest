import { Locator, Page, expect } from '@playwright/test';
export class RegisterPage {

    private readonly registerPageUrl: string ;
    private readonly registerButtonElement: Locator;
    private readonly usernameInputElement: Locator;
    private readonly emailInputElement: Locator;
    private readonly passwordInputElement: Locator;

    constructor(private page: Page) {
        
         this.registerPageUrl = 'register';
        this.registerButtonElement = page.getByRole('button', { name: 'Create Account' });
        this.usernameInputElement = page.getByLabel('Full name');
        this.emailInputElement = page.getByLabel('Email');
        this.passwordInputElement = page.getByLabel(/password/i);
     }

    async navigateToRegisterPage() {
        await this.page.goto(this.registerPageUrl);
    }
    async fillRegistrationForm(username: string, email: string, password: string) {
        await this.usernameInputElement.fill(username);
        await this.emailInputElement.fill(email);
        await this.passwordInputElement.fill(password);
    }
    async submitRegistrationForm() {
        await this.registerButtonElement.click();
    }
    async getNameElement(){
        return this.usernameInputElement;
    }
    async getEmailElement(){
        return this.emailInputElement;
    }
    async getPasswordElement(){
        return this.passwordInputElement;
    }
}