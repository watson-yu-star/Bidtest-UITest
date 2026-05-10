import { Locator, Page, expect } from '@playwright/test';
export class LoginPage {
    private readonly loginPageUrl: string ;
    private readonly emailInputElement: Locator;
    private readonly passwordInputElement: Locator;
    private readonly loginButtonElement: Locator;
    private readonly errorElement: Locator;
    
    constructor(private page: Page) {
        this.loginPageUrl = 'login';
        this.emailInputElement = page.getByLabel('Email');
        this.passwordInputElement = page.getByLabel(/password/i);
        this.loginButtonElement = page.getByRole('button', { name: 'Log in' });
        this.errorElement = page.getByTestId('login-error');
     }

     async navigateToLoginPage() {
        await this.page.goto(this.loginPageUrl);
    }
    async fillLoginForm(email: string, password: string) {
        await this.emailInputElement.fill(email);
        await this.passwordInputElement.fill(password);
    }   
    async submitLoginForm() {
        await this.loginButtonElement.click();
    }
    async getEmailElement(){
        return this.emailInputElement;
    }
    async getPasswordElement(){
        return this.passwordInputElement;
    }
    async getErrorElement(){
        return this.errorElement;
    }
}