///<reference types='cypress'/>

const data = require('../../fixtures/cred.json')

describe('Forgot password module testcases', () => {

    it("As a Admin I should be able to navigate on Forgot password page", () => {
        cy.visit(data.qaUrl);
        cy.get('a > .text-primary').should('be.visible').click();
        cy.url().should('include', 'forgot-password');
    })

    it("At Forgot password page each field should have proper lable and validation", () => {
        cy.get('.text-gray-900').should('be.visible').and('have.text', 'Forgot Password? ');
        cy.get('.text-gray-500').should('be.visible').and('contain', 'A 6 digit verification code will be sent to your registered Email Address');
        cy.get(':nth-child(1) > .text-sm > div').should('be.visible').and('have.text', 'Email');
        cy.get('.appearance-none').should('be.visible');
        cy.get('.mt-5 > .flex').should('be.visible').click();
        cy.get('.text-red-600').should('be.visible').and('contain.text', 'Required');
        //invalid email case
        cy.get('.appearance-none').clear().type('ASd@ads@sd.com');
        cy.get('.text-red-600').should('be.visible').and('have.text', 'Please enter valid email');
    })

    it("OTP shouldn't send on invalid email", () => {
        cy.get('.appearance-none').clear().type('abc@gmail.com');
        cy.get('.mt-5 > .flex').click();
        cy.contains('User not found');
    })

    it("OTP should sent on Valid registerd email", () => {
        const emailId = data.email;
        cy.get('.appearance-none').clear().type(emailId);
        cy.get('.mt-5 > .flex').click();
        cy.contains('OTP send to ' + emailId);
    })
    // vefication screen testcases
    it("Verify each and evey label and title on varification screen",() => {

        cy.get('.text-gray-800').should('be.visible').and('have.text','Enter Verification Code');
        cy.get('.text-gray-500').should('be.visible').and('have.text','A 6 digit verification code has been sent to your email address');
        cy.get('.mt-3 > :nth-child(1)').should('be.visible').and('have.text',"Haven't received the code?");
        cy.get('.mt-5 > .flex').should('be.visible');


    })

    it("valdation should appear when user does not enter otp into the field",() => {

        cy.get('.mt-5 > .flex').should('be.visible').click();
        cy.get('.my-4 > .text-xs').should('be.visible').and('have.text','Verfication Code is not valid, please re-enter or resend Verfication code');

    })

    it("validation should appear when user enter invalid OTP",() => {
        cy.xpath("//div[@style='display: flex; margin: 0px 0px 0px -0.5rem;']").type('336699');
        cy.get('.mt-5 > .flex').should('be.visible').click();
        cy.get('.my-4 > .text-xs').should('be.visible').and('have.text','Verfication Code is not valid, please re-enter or resend Verfication code')
    })

    it("verify resend button functionality ",() => {

        cy.get('.mt-3 > .font-bold').should('be.visible').click();
        const emailId = data.email;
        cy.contains('OTP send to ' + emailId);
        
    })

   

})