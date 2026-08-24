import { Locator, Page, expect } from '@playwright/test';
export class HomePage {

    private readonly shopButtonElement: Locator;
    private readonly cartButtonElement: Locator;
    private readonly accountElement: Locator;
    private readonly logoutButtonElement: Locator;
    private readonly loginButtonElement: Locator;
    private readonly registerButtonElement: Locator;
    private readonly cartCountElement: Locator;
    private readonly searchBarElement: Locator;
    private readonly categoryFilterElement:Locator;

     constructor(private page: Page) {
        this.shopButtonElement = page.getByTestId('nav-products');
        this.cartButtonElement = page.getByTestId('nav-cart');
        this.accountElement = page.getByTestId('nav-user-name');
        this.loginButtonElement = page.getByTestId('nav-login');
        this.registerButtonElement = page.getByTestId('nav-register');
        this.logoutButtonElement = page.getByTestId('nav-logout');
        this.cartCountElement = page.getByTestId('nav-cart-count');
        this.searchBarElement = page.getByTestId('filter-search');
        this.categoryFilterElement = page.getByTestId('filter-category');

     }

     async navigateToHomePage() {
        const responsePromise = this.page.waitForResponse('**/products');

        await this.page.goto('/');
        await responsePromise;
       
    }

     async waitForHomePage() {
        await expect(this.shopButtonElement).toBeVisible();
        await expect(this.cartButtonElement).toBeVisible();

        await this.page.waitForLoadState('networkidle');
    }
    async loginCheck(username: string) {
        await expect(this.accountElement).toBeVisible();
        await expect(this.accountElement).toHaveText(username);
        await expect(this.logoutButtonElement).toBeVisible();
    }
    async addProductToCart(productName: string) {

        console.log(productName);

        const addButton=await this.page.locator('.product-card') 
              .filter({ hasText: productName })
              .getByRole('button', { name: 'Add to cart' });
        await expect(addButton).toBeEnabled();
        await  addButton.click();
       
    }
    async loginToBuy(productName: string) {
      
       console.log(productName);
        
         await this.page.locator('.product-card') 
              .filter({ hasText: productName })
              .getByText('Log in to buy')
              .click();
              
    }
    async navigateToCart() {
        //console.log("click the cart button")
        //await this.page.goto('/cart');
        //await this.page.locator('[data-testid="nav-cart"]').click();

        //await this.page.getByTestId('nav-cart').click();
        await this.cartButtonElement.click();
    }
    async checkRedIconOnCart(numberOfItems: string) {
        const redIcon = this.cartCountElement;
        await expect(redIcon).toBeVisible();
        await expect(redIcon).toHaveText(numberOfItems);
    }

    async clickLoginButton() {
        console.log('Clicking login button');
        await this.loginButtonElement.click();
    }

    async searchProduct(productName:string){
       
        /*
      this.page.on('response', response => {
        if (response.url().includes('/products')) {
            console.log(`>> Intercepted: ${response.url()} | Status: ${response.status()}`);
            }
        });
       */
    
      await this.searchBarElement.fill(productName); 
      


    }

    async findProduct(productName:string){
            
       // console.log(productName);
        
        await expect(this.page.getByTestId('filter-summary')).toBeVisible();

        await expect(this.page.locator('.product-card') 
              .filter({ hasText: productName })).toBeVisible();
              

    }
    async filterProduct(categoryName:string){


        await this.categoryFilterElement.selectOption(categoryName);
       

    }

    async checkCategory(categoryName:string){

        const products = await this.page.locator('.product-card')
                                         .filter({hasText:categoryName})
                                         .all();
        expect(products.length).toEqual(2);
       
        for(const product of products){
           await expect(product).toContainText(categoryName);
        }
    }
}