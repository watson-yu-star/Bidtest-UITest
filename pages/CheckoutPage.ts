import { Locator, Page, expect } from '@playwright/test';

export class CheckoutPage {

    private readonly checkoutPageUrl:string;
    private readonly nameInputElement: Locator;
    private readonly emailInputElement: Locator;
    private readonly streetInputElement:Locator;
    private readonly cityInputElement:Locator;
    private readonly postcodeInputElement:Locator;
    private readonly placeOrderButton:Locator;
    private readonly orderSummaryElement:Locator;

    constructor(private page:Page){
        this.checkoutPageUrl = "checkout";
        this.nameInputElement = this.page.getByLabel('Full name');
        this.emailInputElement = this.page.getByLabel('Email');
        this.streetInputElement = this.page.getByLabel('Street address');
        this.cityInputElement = this.page.getByLabel('city');
        this.postcodeInputElement = this.page.getByTestId('checkout-postcode');
        this.placeOrderButton = this.page.getByTestId('checkout-submit');
        this.orderSummaryElement = this.page.getByTestId("checkout-summary");
    }

    async fillContactInfo(name:string,email:string,street:string,city:string,postcode:string){
        
        await this.emailInputElement.fill(email);
        await this.nameInputElement.fill(name);
        await this.streetInputElement.fill(street);
        await this.cityInputElement.fill(city);
        await this.postcodeInputElement.fill(postcode);
    }

    async getplaceOrderButton(){
        return this.placeOrderButton;
    }

    async checkOrderSummary(){
        await expect(this.page.getByTestId("checkout-summary")).toBeVisible();
        await expect(this.page.getByTestId("checkout-subtotal")).toBeVisible();
        await expect(this.page.getByTestId("checkout-gst")).toBeVisible();
        
    }
    
    async checkOrderConfirmed(){
        await expect(this.page.getByText('Order confirmed')).toBeVisible();
    }
}