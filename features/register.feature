Feature: Register
    
    Background:
         Given the user navigate to the Register page

    Scenario: Register successfully
        When the user inputs the name,email and password
        And the user click create account button
        Then the user shound creat his account and land on the homepage

    Scenario: Register failure with empty name
        When the user inputs the email and password
        And the user click create account button
        Then the user shound see an error message "Please fill out this field."

    Scenario: Register failure with invalid email
        When the user inputs the name, invalid email and password
        And the user click create account button
        Then the user shound see an invalid email error message
    
    Scenario: Register failure with short password
        When the user inputs the name, email and short password
        And the user click create account button
        Then the user shound see an invalid password error message