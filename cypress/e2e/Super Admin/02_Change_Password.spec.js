///<reference types='cypress'/>
const cred = require('../../fixtures/cred.json')

import faker from 'faker'
describe("Change password Testcases", () => {

    const old_password = "//input[@name='oldPassword']";
    const new_password = "//input[@name='newPassword']";
    const confirm_password = "//input[@name='confirmPassword']";

    it("As a Admin I should be able to navigate on change password screen", () => {
        
        //Login into the admin portal.
        cy.suplogin();
        cy.wait(3000)

        //Clicking on "Settings" tab.
        cy.xpath("//nav//div[text()='Settings']").should('be.visible').click();

        //verifying that the change password page is visible.
        cy.url().should('include', '/password');
    })
    it("At Chnage Password page each page should have proper labels", () => {

        //Verifing the "Change Password" Header is present.
        cy.get('.text-xl').should('be.visible').and('have.text', 'Change Password');

        //Verifying the label of "Old Password" input field.
        cy.xpath("//label//div").eq(0).should('be.visible').and('have.text', 'Old Password');

        //Verifying that the "Old Password" input field is present.
        cy.xpath('//*[@name="oldPassword"]').should('be.visible')
        
        //Verifying the label of "New Password" input field.
        cy.xpath("//label//div").eq(1).should('be.visible').and('have.text', 'New Password');

        //Verifying that the "New Password" input field is present.
        cy.xpath('//*[@name="newPassword"]').should('be.visible')

        //Verifying the label of "Confirm Password" input field.
        cy.xpath("//label//div").eq(2).should('be.visible').and('have.text', 'Confirm Password');

        //Verifying that the "Confirm Password" input field is present.
        cy.xpath('//*[@name="confirmPassword"]').should('be.visible')

        //Verifying the label of "Update" button.
        cy.xpath("//button//div[text()='Update']").should('be.visible').and('have.text', 'Update');
    })
    it('Validate "Change Password" section with Blank Data.', () => {
        //Clicking on Submit button with blank data
        cy.xpath("//button//div[text()='Update']").should('be.visible').click();

        //Verfying the validation error for Blank Data for "Old Password" input field.
        cy.contains("Old Password is required").should('be.visible');

        //Verfying the validation error for Blank Data for "Old Password" input field.
        cy.contains("New Password is required").should('be.visible');

        //Verfying the validation error for Blank Data for "Old Password" input field.
        cy.contains("New Password is required").should('be.visible');
    })

    it('Validate "Change Password" section with invalid Data.', () => {
        // Creating random password from faker. 
        const password = faker.name + "@123456";

        //Entering invalid Password into "Old Password" input field.
        cy.xpath(old_password).type('123456@1235As');

        //Entering Valid Password into "New Password" input field.
        cy.xpath(new_password).type(password);

        //Entering Valid Password into "Confirm Password" input field.
        cy.xpath(confirm_password).type(password);

        
        //Clicking on Submit button.
        cy.xpath("//button//div[text()='Update']").should('be.visible').click();
        cy.wait(2000);
    })

    it("Validate 'Change Password' section with Minimum Characters.", () => {
        
        //Entering less than 8 charcters into "Old Password" input field.
        cy.xpath(old_password).clear().type('1231');

        //Entering less than 8 charcters into "New Password" input field.
        cy.xpath(new_password).clear().type('sada');

        //Entering less than 8 charcters into "Confirm Password" input field.
        cy.xpath(confirm_password).clear().type('sada');

        //Clicking on Submit button.
        cy.xpath("//button//div[text()='Update']").should('be.visible').click();
        cy.wait(2000);

        //Verfying the validation error for minimum characters for "Old Password" input field.
        cy.get('.text-red-600').eq(0).should('have.text', 'Password is too short - should be 8 chars minimum').and('be.visible');
        
        //Verfying the validation error for minimum characters for "New Password" input field.
        cy.get('.text-red-600').eq(1).should('have.text', 'Password should be atleast 8 characters and should contain combination of uppercase, lowercase & numbers').and('be.visible');
        
        //Verfying the validation error for minimum characters for "New Password" input field.
        cy.get('.text-red-600').eq(2).should('have.text', 'Password should be atleast 8 characters and should contain combination of uppercase, lowercase & numbers').and('be.visible');
    })

    it("Validate 'Change Password' section if both old, New Passwords are same also when both New and confirm password are not matching.", () => {
        

        //Entering less than 8 charcters into "Old Password" input field.
        cy.xpath(old_password).clear().type(cred.password);

        //Entering less than 8 charcters into "New Password" input field.
        cy.xpath(new_password).clear().type(cred.password);

        //Entering less than 8 charcters into "Confirm Password" input field.
        cy.xpath(confirm_password).clear().type('sada');

        //Clicking on Submit button.
        cy.xpath("//button//div[text()='Update']").should('be.visible').click();
        cy.wait(2000);
        
        //Verfying the validation error if both old and New passwords are same.
        cy.get('.text-red-600').eq(0).should('have.text', 'Old and new password can not be the same').and('be.visible');
        
        //Verfying the validation error if both Confirm and New passwords are not same.
        cy.get('.text-red-600').eq(1).should('have.text', 'Both passwords need to be the same').and('be.visible');
    })

    it("As a Admin I should be able to change password and admin should be able to login with new password", () => {
        const cred = require('../../fixtures/cred.json')
        
        //Entering Valid Password into "Old Password" input field.
        cy.xpath(old_password).clear().type(cred.password);

        //Entering Valid Password into "New Password" input field.
        cy.xpath(new_password).clear().type('Passcode@123');

        //Entering Valid Password into "Confirm Password" input field.
        cy.xpath(confirm_password).clear().type('Passcode@123');

        //Clicking on "Update" button.
        cy.xpath("//button//div[text()='Update']").click();
        cy.wait(2000);

        //Verifing that the validation message that password changed.
        cy.contains('changed', { matchCase: false });

        //User should able to see login after changing password successfully.
        cy.xpath("//div[text()='Sign In']").should('be.visible');

        //Entering valid data into "Email" input field.
        cy.get(':nth-child(1) > .mt-1 > .appearance-none').type(cred.SupEmail)

        //Entering valid data into "Password" input field.
        cy.get(':nth-child(2) > .mt-1 > .appearance-none').type('Passcode@123')

        //Clicking on "Sign in" button.
        cy.get('.mt-3 > .flex').click()
        cy.wait(2000);

        //Enter valid data into "Enter verification code" page.
        cy.xpath("//*[@class='my-4']/div[1]").should('be.visible').clear().type('123321')

        //Clicking on "Submit" button.
        cy.xpath("//*[@textid='submit']").click();
        cy.wait(3000)

        //verifying that the user is logged in successfully.
        cy.url().should('include', '/dashboard');

        //Clicking on "Settings" tab.
        cy.xpath("//nav//div[text()='Settings']").should('be.visible').click();

        //Entering Valid Password into "Old Password" input field.
        cy.xpath(old_password).clear().type('Passcode@123');

        //Entering Valid Password into "New Password" input field.
        cy.xpath(new_password).clear().type(cred.password);

        //Entering Valid Password into "Confirm Password" input field.
        cy.xpath(confirm_password).clear().type(cred.password);

        //Clicking on "Update" button.
        cy.xpath("//button//div[text()='Update']").click();
         
    })
})