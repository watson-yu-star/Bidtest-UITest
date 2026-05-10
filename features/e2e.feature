Feature: e2e test
   @e2e
    Scenario: Login and add product to cart
        Given the user navigates to homepage 
        When the user clicks the login button from the navbar
        Then the user navigates to login page
        When the user inputs his email and password
        And the user clicks the login button
        Then the user should login successfully and land on the homepage
        When the user add product "Free-Range Chicken Breast" into cart
        Then the user should see redicon "1" on the cart
        When the user click the cart button from the navbar
        Then the user should navigate to cart page
        Then the user should see the product "Free-Range Chicken Breast"
        When the user click contine to check button
        Then the user should navigate to checkout page
        Then the user should see the order summary
        When the user fill the address
        And  the user click the place order button
        Then the user should order successfully
   @e2e 
    Scenario: Add product to cart without Login
        Given the user navigates to homepage 
        When the user click the Log in to buy button on product "Free-Range Chicken Breast"
        Then the user navigates to login page
        When the user inputs his email and password
        And the user clicks the login button
        Then the user should login successfully and land on the homepage
        When the user add product "Free-Range Chicken Breast" into cart
        Then the user should see redicon "1" on the cart
        When the user click the cart button from the navbar
        Then the user should navigate to cart page
        Then the user should see the product "Free-Range Chicken Breast"
        When the user click contine to check button
        Then the user should navigate to checkout page
        Then the user should see the order summary
        When the user fill the address
        And  the user click the place order button
        Then the user should order successfully