///<reference types='cypress'/>

const cred=require('../../fixtures/cred.json')

describe('Forgot password module testcases', () => {

    it("As a Admin I should be able to navigate on Forgot password page", () => {
        cy.visit(cred.qaUrl);
        cy.xpath('//div[contains(text(),"F")]').should('be.visible').should('have.text','Forgot Password?').click();
        cy.url().should('include', 'forgot-password');
    })

    it("At Forgot password page each field should have proper lable and validation", () => {
        cy.xpath('//div[contains(text(),"F")]').should('be.visible').should('have.text','Forgot Password? ');
        cy.xpath('//div[contains(text(),"A")]').should('be.visible').and('contain', 'A 6 digit verification code will be sent to your registered Email Address.');
        cy.xpath('//label/div').should('be.visible').and('have.text','Email');
        cy.xpath('//input[@name="email"]').should('be.visible');
        cy.xpath('//button[@type="submit"]').should('be.visible').should('have.text','Continue').click();
        cy.wait(2000)
        cy.xpath('//div[contains(text(),"R")]').should('be.visible').and('contain.text', 'Required');
        //invalid email case
        cy.xpath('//input[@name="email"]').should('be.visible').type('ASd@ads@sd.com');
        cy.xpath('//div[contains(text(),"Pl")]').should('be.visible').and('have.text', 'Please enter valid email');
    })

    it("OTP shouldn't send on invalid email", () => {
        cy.xpath('//input[@name="email"]').should('be.visible').clear().type('abc@gmail.com');
        cy.xpath('//button[@type="submit"]').should('be.visible').should('have.text','Continue').click();
        cy.wait(2000);
        cy.contains('User not found with this information');
    })

    it("OTP should sent on Valid registerd email", () => {
        const emailId = cred.email;
        cy.xpath('//input[@name="email"]').should('be.visible').clear().type(emailId);
        cy.xpath('//button[@type="submit"]').should('be.visible').should('have.text','Continue').click();
        cy.wait(2000);
        cy.contains("OTP send to user's email/phone");
    })
    // vefication screen testcases
    it("Verify each and evey label and title on varification screen",() => {

        cy.xpath('//div[contains(text(),"E")]').should('be.visible').and('have.text','Enter Verification Code');
        cy.xpath('//div[contains(text(),"A")]').should('be.visible').and('have.text','A 6 digit verification code has been sent to your email address and phone number.');
        cy.xpath('//div[contains(text(),"H")]').should('be.visible').and('have.text',"Haven't received the code?");
        cy.xpath('//div[contains(text(),"R")]').should('be.visible').and('have.text',"Resend Code");

       


    })

    it("valdation should appear when user does not enter otp into the field",() => {

        cy.xpath('//button[@type="submit"]').should('be.visible').should('have.text','Submit').click();
        cy.xpath('//div[contains(text(),"Verfication Code is")]').should('be.visible').and('have.text',"Verfication Code is not valid, please re-enter or resend Verfication code");

    })

    it("validation should appear when user enter invalid OTP",() => {
        cy.xpath('//div[@class="hidden md:block"]').type('336699');
        cy.xpath('//button[@type="submit"]').should('be.visible').should('have.text','Submit').click();
        cy.xpath('//div[contains(text(),"Verfication Code is")]').should('be.visible').and('have.text',"Verfication Code is not valid, please re-enter or resend Verfication code");
    })

    it("verify resend button functionality ",() => {

        cy.xpath('//div[contains(text(),"R")]').should('be.visible').and('have.text',"Resend Code").click();
        const emailId = cred.email;
        cy.wait(2000);
        cy.contains("OTP send to user's email/phone");
        
    })

   

})