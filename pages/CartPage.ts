import { Locator, Page, expect } from '@playwright/test';
import {product} from '../test-data/product.json';

export class CartPage {

    private readonly cartPageUrl: string;
    private readonly checkoutButtonElement: Locator;
    private readonly clearCartButtonElement: Locator;
    private readonly subtotalElement: Locator;
    private readonly gstElement: Locator;
    private readonly totalElement: Locator;
    private readonly cartElement: Locator;
    private readonly cartSummaryElement:Locator;

    constructor(private page: Page) {
        this.cartPageUrl = 'cart';
        this.checkoutButtonElement = page.getByRole('button', { name: 'Continue to Checkout' });
        this.clearCartButtonElement = page.getByRole('button', { name: 'Clear Cart' });
        this.subtotalElement = page.getByTestId('cart-subtotal');
        this.gstElement = page.getByTestId('cart-gst');
        this.totalElement = page.getByTestId('cart-total');
        this.cartElement = page.getByTestId('cart-table');
        this.cartSummaryElement = page.getByTestId('cart-summary');
    }

    async navigateToCartPage() {    
        await this.page.goto(this.cartPageUrl);
    }
    async proceedToCheckout() {
        await this.checkoutButtonElement.click();
    }     
    async clearCart() {
        await this.clearCartButtonElement.click();
    }
     async findProductInCart(productName:string): Promise<boolean>{
        
        const row = this.page.getByRole('row').filter({ hasText: productName });
        await expect(row).toBeVisible();
        const unittestid = "cart-unit-price-"+product.productId;
        const unitprice = await row.getByTestId(unittestid).innerText();
        expect( parseFloat(unitprice.replace(/[^0-9.]/g, ''))).toEqual(product.unitPrice);
        const qtytestid = "cart-qty-"+product.productId;
        const quantity = await row.getByTestId(qtytestid).inputValue();
        expect(parseInt(quantity)).toEqual(1);
        const linetotaltestid = "cart-line-total-"+product.productId;
        const linetotal = await row.getByTestId(linetotaltestid).innerText();
        expect( parseFloat(unitprice.replace(/[^0-9.]/g, ''))).toBeCloseTo(product.unitPrice*parseInt(quantity));
        return true;
     }
    async removeProductFromCart(productName: string) {
      const table = this.cartElement;
      const row = table.getByRole('row').filter({ hasText: productName });
      await row.getByRole('button', { name: 'Remove' }).click();
    }
    async getSubtotal(): Promise<number> {
        const subtotalText = await this.subtotalElement.textContent();
        return parseFloat(subtotalText?.replace('$', '') || '0');
    }
    async getGst(): Promise<number> {
        const gstText = await this.gstElement.textContent();
        return parseFloat(gstText?.replace('$', '') || '0');
    }
    async getTotal(): Promise<number> {
        const totalText = await this.totalElement.textContent();
        return parseFloat(totalText?.replace('$', '') || '0');
    }
    async isProductInCart(productName: string): Promise<boolean> {
        const table = this.cartElement;
        const row = table.getByRole('row').filter({ hasText: productName });
        return await row.isVisible();
    }
    async checkCartSummary(){
        await expect(this.cartSummaryElement.getByTestId('cart-subtotal')).toBeVisible();
        await expect(this.cartSummaryElement.getByTestId('cart-gst')).toBeVisible();
        await expect(this.cartSummaryElement.getByTestId('cart-total')).toBeVisible();
        
        const calculatedsubTotal:Number= await this.calculateExpectedSubTotal();
        const subtotal:number= await this.getSubtotal();
        expect(subtotal).toBeCloseTo(calculatedsubTotal.valueOf());
        const gst = subtotal*0.15;
        expect(await this.getGst()).toBeGreaterThan(0);


        console.log("Error: gst is not right expected gst is "+gst);

    }
   async calculateExpectedSubTotal():Promise<Number> {


      const priceCells = this.page.locator('table tbody tr td:nth-child(4)');

      
        const priceTexts = await priceCells.allInnerTexts();

       const calculatedsubTotal = priceTexts.reduce((sum, text) => {
         const numericValue = parseFloat(text.replace(/[^0-9.]/g, '')) || 0;
          return sum + numericValue;
        }, 0);

        console.log(`Calculated Total: ${calculatedsubTotal}`);
       return calculatedsubTotal;

    }
}