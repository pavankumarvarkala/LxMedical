///<reference types='cypress'/>
const cred = require('../../fixtures/cred.json')

describe('Login module testcases', () => {

    it('As a Admin I should be able to navigate on login page', () => {
        cy.visit(cred.qaUrl);
        cy.xpath("//*[text()='Sign In']").should('have.text', 'Sign In').and('be.visible');
    })

    it('At login screen each label and link should be proper', () => {
        cy.get('.text-gray-500').should('have.text', 'Please enter your credentials to sign in.');
        cy.get('[alt="logo"]').invoke('attr', 'src').should('eq', '/static/media/logo2.9ba2ea85.png');
        cy.xpath("//label").eq(0).should('have.text', 'Email');
        cy.xpath("//label").eq(1).should('have.text', 'Password');
        cy.xpath("//button[@textid='submit']").should('be.visible');
        cy.get('a').should('have.text', 'Forgot Password?');
    })
    it('At login screen each field should have proper validation', () => {
        cy.xpath("//input[@name='email']").should('be.visible').clear().type('dasd@asda@').clear()
        cy.get('.py-20').click();
        cy.get('.text-red-600').eq(0).should('have.text', 'Required').and('be.visible');
        cy.xpath("//input[@name='email']").should('be.visible').type('dasd@asda@')
        cy.get('.text-red-600').eq(0).should('have.text', 'Please enter valid email').and('be.visible');
        cy.xpath("//input[@name='email']").clear();

    })
    it('At login screen password field should have proper validation', () => {
        cy.xpath("//input[@name='password']").should('be.visible').clear().type('dasd@asda@').clear()
        cy.get('.py-20').click();
        cy.get('.text-red-600').eq(1).should('have.text', 'Required').and('be.visible');
    })
    it('At login screen forgot password link text should be visible', () => {
        cy.get('a').should('be.visible').click();
        cy.get('.text-gray-900').should('have.text', 'Forgot Password? ').and('be.visible')
        cy.get('a > .text-primary').click()
    })
    it('I should unable to login with invalid credential', () => {
        cy.xpath("//input[@name='email']").type('alpha@gmail.com');
        cy.xpath("//input[@name='password']").type('Password@321');
        cy.xpath("//button[@textid='submit']").should('be.enabled').and('be.visible').click();
        cy.contains('Incorrect email or password')
    })
    it('I should be able to login with the valid credeantial', () => {

        cy.xpath("//input[@name='email']").clear().type(cred.email);
        cy.xpath("//input[@name='password']").clear().type(cred.password);
        cy.xpath("//button[@textid='submit']").click();
        cy.get('.max-w-xs > img').should('be.visible')
       // cy.url().should('include', '/dashboard')
    })
    it('As a Admin I should be able to logout successfully', () => {
        cy.logout();
    })
})