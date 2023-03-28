///<reference types='cypress'/>
const cred = require('../../fixtures/cred.json')

describe('Login module testcases', () => {

    it('As a Admin I should be able to navigate on login page', () => {
        //Launch URL.
        cy.visit(cred.qaUrl);
        //Verifying that the login page is visible.
        cy.xpath("//*[text()='Sign In']").should('have.text', 'Sign In').and('be.visible');
    })

    it('At login screen each label and link should be proper', () => {
        //verifing the "Please enter your credentials to sign in." text on sign in page.
        cy.get('.text-gray-500').should('have.text', 'Please enter your credentials to sign in.');

        //Verifying that the logo on the sign in page is visible.
        cy.get('[alt="logo"]').invoke('attr', 'src').should('eq', '/static/media/Favicon-Light-20211230.aab62f3c.png');
        
        //Verifying the label "Email" input field.
        cy.xpath("//label").eq(0).should('have.text', 'Email');

        //Verifying that the "Email" input field is present.
        cy.xpath("//*[@name='email']").should('be.visible');


        //Verifying the label "Password" input field.
        cy.xpath("//label").eq(1).should('have.text', 'Password');

        //Verifying that the "Password" input field is present.
        cy.xpath("//*[@name='password']").should('be.visible');

        //Verifying the label of "Submit" button.
        cy.xpath("//button[@textid='submit']").should('be.visible');

        //Verifying the "Forgot Password" Link.
        cy.get('a').should('have.text', 'Forgot Password?');
    })
    it('At login screen each field should have proper validation', () => {

        //Clicking inside "Email" input field.
        cy.xpath("//input[@name='email']").should('be.visible').clear()

        //Clicking outside Email input box.
        cy.get('.py-20').click();

        //Verifying validation error for "Blank data".
        cy.get('.text-red-600').eq(0).should('have.text', 'Required').and('be.visible');

        //Entering invalid data into "Email" input field.
        cy.xpath("//input[@name='email']").should('be.visible').type('dasd@asda@')

        //Verifying validation error for "invalid data".
        cy.get('.text-red-600').eq(0).should('have.text', 'Please enter valid email').and('be.visible');

        //Clearing data in the "Email" input field.
        cy.xpath("//input[@name='email']").clear();

    })
    it('At login screen password field should have proper validation', () => {
        
        //Clicking inside "Password" input field.
        cy.xpath("//input[@name='password']").should('be.visible').clear()

        //Clicking outside "Password" input box.
        cy.get('.py-20').click();

        //Verifying validation error for "Blank data".
        cy.get('.text-red-600').eq(1).should('have.text', 'Required').and('be.visible');

        //Entering Sigle Character into "Password" input field.
        cy.xpath("//input[@name='password']").should('be.visible').clear().type('a')

        //Verifying validation error for "Minimum Characters".
        cy.get('.text-red-600').eq(1).should('have.text', 'Password should have min. 8 characters').and('be.visible');

        //Entering Data with "Space" into "Password" input field.
        cy.xpath("//input[@name='password']").should('be.visible').clear().type('a b')

        //Verifying validation error for "Space entered into password input field".
        cy.get('.text-red-600').eq(1).should('have.text', 'Space not allowed').and('be.visible');

    })
    it('At login screen forgot password link text should be visible', () => {
        //Clicking on "Forgot Password" link.
        cy.get('a').should('be.visible').click();

        //Verifying that "Forgot Password" page is visible.
        cy.get('.text-gray-900').should('have.text', 'Forgot Password? ').and('be.visible')

        //Clicking on Back Arrow on "Forgot Password" page.
        cy.get('a > .text-primary').click()
    })
    it('I should unable to login with invalid credential', () => {
        //Entering invalid data into "Email" input feld.
        cy.xpath("//input[@name='email']").type('alpha@gmail.com');

        //Entering invalid data into "Password" input feld.
        cy.xpath("//input[@name='password']").type('Password@321');

        //Checking that the "Submit" button is Enabled and Clicking on it.
        cy.xpath("//button[@textid='submit']").should('be.enabled').and('be.visible').click();

        //Verifying the validation error for invalid Credentials.
        cy.contains('Incorrect email or password')
    })
    it('I should be able to login with the valid credeantial', () => {
        //Entering Valid data into "Email" input feld.
        cy.xpath("//input[@name='email']").clear().type(cred.email);

        //Entering Valid data into "Password" input feld.
        cy.xpath("//input[@name='password']").clear().type(cred.password);

        //Clicking on "Submit" button.
        cy.xpath("//button[@textid='submit']").click();
        
        //Verifying that the Dashboard page is visible after login.
        cy.get('.max-w-xs > img').should('be.visible')

        //Verifying the URL.
        cy.url().should('include', '/dashboard')
    })
    it('As a Admin I should be able to logout successfully', () => {
        //Logging out of the App.
        cy.logout();
    })
})