Feature: Register
    
    Background:
         Given the user navigates to the login page
    Scenario: Login successfully
        When  the user inputs his email and password
        And the user clicks the login button
        Then the user should login successfully and land on the homepage


    Scenario Outline: Login failure due to missing credentials
  
        When  the user inputs "<email>" and "<password>"
        And the user clicks the login button
        Then the user should see an "<error_message>" error message

        Examples:

        | email             | password       | error_message |
        |                   |                | Please fill out this field.|
        | valid@email.com   |                | Please fill out this field.|
        | valid@email.com   |  password123   | Invalid email or password  |