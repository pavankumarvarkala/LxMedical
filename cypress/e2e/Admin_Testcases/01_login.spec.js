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
    it('At login screen Email input field should have proper validation', () => {

        //Clicking inside "Email" input field.
        cy.xpath("//input[@name='email']").should('be.visible').clear()

        //Clicking outside Email input box.
        cy.get('.py-20').click();

        //Verifying validation error for "Blank data".
        cy.xpath('//form/div[1]/div[2]').eq(0).should('have.text', 'Required').and('be.visible');

        //Entering invalid data into "Email" input field.
        cy.xpath("//input[@name='email']").should('be.visible').type('dasd@ asda@')

        //Verifying validation error for "invalid data".
        cy.xpath('//div[contains(text(),"val")]').eq(0).should('have.text', 'Please enter valid email').and('be.visible');

        //Clearing data in the "Email" input field.
        cy.xpath("//input[@name='email']").clear();


    })
    it('At login screen password input field should have proper validation', () => {
        
        //Clicking inside Password input box.
        cy.xpath("//*[@name='password']").should('be.visible').clear();

        //Clicking outside Password input box.
        cy.get('.py-20').click();

        //Verifying validation error for "Blank data".
        cy.xpath('//form/div[2]/div[2]').eq(0).should('have.text', 'Required').and('be.visible');

        //Enter Lessthan 8 Characters into "Password" input field.
        cy.xpath("//*[@name='password']").should('be.visible').type("vsdvd11")

        //Clicking outside Password input box.
        cy.get('.py-20').click();

        //Verifying validation error for "Minimum Characters".
        cy.xpath('//div[contains(text(),"8")]').eq(0).should('have.text', 'Password should have min. 8 characters').and('be.visible');

        //Clearing data in the "Password" input field.
        cy.xpath("//*[@name='password']").should('be.visible').clear();

        //Entering Data with "Space" into "Password" input field.
        cy.xpath("//input[@name='password']").should('be.visible').clear().type('a b')

        //Verifying validation error for "Space entered into password input field".
        cy.xpath('//div[contains(text(),"Sp")]').should('have.text', 'Space not allowed').and('be.visible');

    })
    it('At login screen forgot password link text should be visible', () => {
        //Clicking on "Forgot Password" link.
        cy.get('a').should('be.visible').click();

        //Verifying that "Forgot Password" page is visible.
        cy.get('.text-gray-900').should('have.text', 'Forgot Password? ').and('be.visible')

        //Clicking on Back Arrow on "Forgot Password" page.
        cy.get('a > .text-primary').click()
    })
    it('I should be unable to login with invalid credential', () => {
        //Entering invalid data into "Email" input feld.
        cy.xpath("//input[@name='email']").type('alpha@gmail.com');

        //Entering invalid data into "Password" input feld.
        cy.xpath("//input[@name='password']").type('Password@321');

        //Checking that the "Submit" button is Enabled and Clicking on it.
        cy.xpath("//button[@textid='submit']").should('be.enabled').and('be.visible').click();

        //Verifying the validation error for invalid Credentials.
        cy.contains('Incorrect email or password')
    })
    it('I should be able to navigate to Enter Verification code page after login with the valid credeantials', () => {
        //Entering Valid data into "Email" input feld.
        cy.xpath("//input[@name='email']").clear().type(cred.email);

        //Entering Valid data into "Password" input feld.
        cy.xpath("//input[@name='password']").clear().type(cred.password);

        //Clicking on "Submit" button.
        cy.xpath("//button[@textid='submit']").click();
        cy.wait(3000)
        
        //Verifying that the "OTP Verification" page is visible after login.
        cy.xpath('//div[contains(text(),"E")]').should('be.visible').should('have.text','Enter Verification Code')


    })

    it('At "Enter Verification Code" page each label and link should be proper ', () => {
        
        //Verify the text of "Enter Verification" code header.
        cy.xpath('//*[contains(text(),"En")]').should('be.visible').should('have.text','Enter Verification Code')

        //Verifiying that the back arrow button is visible.
        cy.xpath('//*[@fill="currentColor"]').should('be.visible')

        //Verifiying that the "inbox image" is visible.
        cy.xpath('//*[@alt="EmailIcon"]').should('be.visible')

        //Verify the text below "inbox image" is visible and correct.
        cy.xpath('//div[contains(text(),"6 digit")]').should('be.visible').should('contain.text','A 6 digit verification code has been sent to ')

        //verifing that the OTP input fields are present.
        cy.xpath("//*[@class='my-4']/div[1]").should('be.visible')

        //Verifing that the "Haven't received OTP" text is present.
        cy.xpath('//*[contains(text(),"Hav")]').should('be.visible').should('have.text',"Haven't received the OTP?")

        //Verifing the label of "Resend OTP" Link.
        cy.xpath('//*[contains(text(),"Res")]').should('be.visible').should('have.text',"Resend OTP")

        //verifying the label of "submit" button.
        cy.xpath('//*[@textid="submit"]').should('be.visible').should('have.text',"Submit")

    })

    it('Validate "Enter Verification Code" page with Blank Data.', () => {
        
        //Clicking on "Submit" button with Blank data.
        cy.xpath("//*[@textid='submit']").click();

        //Verifiying validation error for blank data.
        cy.xpath('//*[contains(text(),"valid")]').should('be.visible').should('have.text','Verfication Code is not valid, please re-enter or resend Verfication code')
    })

    it('Validate "Enter Verification Code" page with invalid Data.', () => {
        
        //Enter invalid data into "Enter verification code" page.
        cy.xpath("//*[@class='my-4']/div[1]").should('be.visible').type('123456')

        //Clicking on "Submit" button.
        cy.xpath("//*[@textid='submit']").click();

        cy.wait(2000)

        //Verifiying validation error for blank data.
        cy.contains('Invalid otp')
    })
    it('After Entering valid OTP and Clicking on Submit button user should be logged in successfully.', () => {
        

        //Clicking on "Back arrow" icon.
        cy.xpath('//*[@fill="currentColor"]').should('be.visible').click()
        cy.wait(4000)

        //Entering Valid data into "Email" input feld.
        cy.xpath("//input[@name='email']").clear().type(cred.email);

        //Entering Valid data into "Password" input feld.
        cy.xpath("//input[@name='password']").clear().type(cred.password);

        //Clicking on "Submit" button.
        cy.xpath("//button[@textid='submit']").click();
        cy.wait(3000)
        
        //Verifying that the "OTP Verification" page is visible after login.
        cy.xpath('//div[contains(text(),"E")]').should('be.visible').should('have.text','Enter Verification Code')

        //Enter valid data into "Enter verification code" page.
        cy.xpath("//*[@class='my-4']/div[1]").should('be.visible').clear().type('123321')

        //Clicking on "Submit" button.
        cy.xpath("//*[@textid='submit']").click();

        //verifying that the user is logged in successfully.
        cy.url().should('include', '/dashboard');

        cy.logout();


    })
})