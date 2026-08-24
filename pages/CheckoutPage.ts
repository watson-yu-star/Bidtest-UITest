import { Locator, Page, expect } from '@playwright/test';
import {product} from "../test-data/product.json"
import {order}  from "../test-data/order.json"

export class CheckoutPage {

    private readonly checkoutPageUrl:string;
    private readonly nameInputElement: Locator;
    private readonly emailInputElement: Locator;
    private readonly streetInputElement:Locator;
    private readonly cityInputElement:Locator;
    private readonly postcodeInputElement:Locator;
    private readonly placeOrderButton:Locator;
    private readonly orderSummaryElement:Locator;
    private readonly subtotalEleemnt:Locator;
    private readonly gstElement:Locator;
    private readonly totalElement:Locator;
    private readonly orderTotalElement:Locator;

    constructor(private page:Page){
        this.checkoutPageUrl = "checkout";
        this.nameInputElement = page.getByLabel('Full name');
        this.emailInputElement = page.getByLabel('Email');
        this.streetInputElement = page.getByLabel('Street address');
        this.cityInputElement = page.getByLabel('city');
        this.postcodeInputElement = page.getByTestId('checkout-postcode');
        this.placeOrderButton = page.getByTestId('checkout-submit');
        this.orderSummaryElement = page.getByTestId("checkout-summary");
        this.subtotalEleemnt = page.getByTestId("checkout-subtotal");
        this.gstElement = page.getByTestId("checkout-gst");
        this.totalElement = page.getByTestId("checkout-total");
        this.orderTotalElement= page.getByTestId("order-total");
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

        await expect(this.orderSummaryElement).toBeVisible();
        const checkoutLineTestId = "checkout-line-"+product.productId;
        await expect(this.page.getByTestId(checkoutLineTestId)).toBeVisible();
        await expect(this.subtotalEleemnt).toBeVisible();
        await expect(this.gstElement).toBeVisible();
        await expect(this.totalElement).toBeVisible();
        
    }
    
    async checkOrderConfirmed(){
        await expect(this.page.getByText('Order confirmed')).toBeVisible();
        const total = await this.orderTotalElement.innerText();
        const numericTotal = parseFloat(total.replace(/[^0-9.]/g, '')) || 0;
        expect(numericTotal).toEqual(order.total);
    }
    async checkUrlContainsCheckout(){
        await expect(this.page).toHaveURL(/\/checkout/);
    }
}