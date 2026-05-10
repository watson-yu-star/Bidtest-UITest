Feature: search
  
  @search
  Scenario: Search product name
    Given the user navigates to homepage
    When the user input the prodct "tomatoes" into search bar
    Then the user should see the product "tomatoes" in the result
 
  @search
  Scenario: Filter product by category
    Given the user navigates to homepage
    When the user select "Beverages" from the dropdown list
    Then the user should see the products from category "Beverages" in the result