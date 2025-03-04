@contactus
Feature: Test Jupiter Toys Contact Us Page
    As a user, I should be able to test the functionality of the contact us page by submitting the form.

    ## when generating steps, change the background to scenario. codeceptjs dont understand background
    Background: Background name: Login to Jupiter Application
        Given I navigate to Jupiter home page
        When I see page is ready
        Then I should see the jupiter toys logo
        Then I should see the login link
        And I should see the contact link

    @contactpage001 @uat
    Scenario: Submit contact form with empty fields
        Given I navigate to the contact page
        When I click the submit button
        Then I should see error messages
        When I populate mandatory fields
        Then I should not see error messages

    @contactpage002 @uat
    Scenario: Submit contact form with valid data
        Given I navigate to the contact page
        When I populate mandatory fields
        And I click the submit button
        Then I should see a successful submission message
        

    @cartpage 
    Scenario: Verify cart details
        Given I navigate to Shop page
        Then I buy 2 Stuffed Frog, 5 Fluffy Bunny, 3 Valentine Bear
        And I navigate to the cart page
        Then I should see the correct subtotal for each product
        And I should see the correct price for each product
        And I should see the total equals the sum of the subtotals