import { Locator, Page, expect } from '@playwright/test';

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
        console.log("cart  "+productName);
        const row = this.page.getByRole('row').filter({ hasText: productName });
        await expect(row).toBeVisible();
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

        const subtotal:number= await this.getSubtotal();
        expect(subtotal).toBeGreaterThan(0);
        const gst = subtotal*0.15;
        expect(await this.getGst()).toBeGreaterThan(0);
        console.log("Error: gst is not right expected gst is "+gst);

    }
   async calculateExpectedTotal() {


      const priceCells = this.page.locator('table tbody tr td:nth-child(4)');

      // 2. Grab all texts at once (this waits for the elements to appear)
        const priceTexts = await priceCells.allInnerTexts();

    // 3. Use .reduce() to clean and sum the numbers
       const calculatedTotal = priceTexts.reduce((sum, text) => {
         const numericValue = parseFloat(text.replace(/[^0-9.]/g, '')) || 0;
          return sum + numericValue;
        }, 0);

        console.log(`Calculated Total: ${calculatedTotal}`);
       const subtotal = await this.getSubtotal();
       const gst = await this.getGst();
       expect.soft(calculatedTotal).toBeCloseTo(subtotal, 2);

       expect.soft(gst).toBeCloseTo(subtotal * 0.15, 2);
       console.log(`Calculated Total: ${calculatedTotal}, GST: ${gst}, Subtotal: ${subtotal}`); 
       const total = await this.getTotal();
       expect.soft(calculatedTotal + gst).toBeCloseTo(total, 2);
    }
}