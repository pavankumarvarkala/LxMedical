///<reference types='Cypress'/>


const cred=require('../../fixtures/cred.json')
 import faker from 'faker'

 describe('Manage Cards module testcases',()=>{
 
    it('As a Admin the user should be "Manage Cards" section of any patient by clicking on "Manage Cards" tab under patients details page.',()=>{
        cy.login(cred.email,cred.password)
        cy.url().should('contain','/dashboard')
        //Click patient tab on the left side tray
        cy.xpath('//nav/div[2]/div[2]').should('be.visible').should('have.text','Patients').click()

        cy.url().should('contain','/patients')
        //Add new patient custom command
        cy.AddPatient()

        cy.readFile('cypress/fixtures/provider.json').then((provider) => {
        //search added patient    
        cy.xpath('//input[@type="search"]').should('be.visible').type(provider.email.toLowerCase())
        cy.wait(4000)

        //Checking email is present in the list
        cy.xpath('//tr[1]/td[2]').should('be.visible').should('have.text',provider.email.toLowerCase())
        cy.wait(4000)
        })

        //Click on eye icon against patient 
        cy.xpath('//tr[1]/td[7]/div[1]/*[1]').scrollIntoView().should('be.visible').click()
        cy.url().should('contain','/address')

        //Click on "Manage Cards" tab in patient profile
        cy.xpath('//div[text()="Manage Cards"]').should('be.visible').should('contain','Manage Cards').click()
        cy.url().should('contain','/payment-cards')

    })

    it('At "Manage Cards" page each label and field should have proper label and validations',()=>{
        //validating all fields and labels
        cy.xpath('//div[contains(text(),"T")]').should('be.visible').should('contain','Total Cards - 0')
        cy.xpath('//div[contains(text(),"Add P")]').should('be.visible').should('contain','Add Payment Card')
        

    })

    it('Validate "Add Card" functionality with Blank data.',()=>{
        //Click on "Add Payment Card" button.
        cy.xpath('//div[contains(text(),"Add P")]').should('be.visible').should('contain','Add Payment Card').click()

        //Validate if "Add Card Details" modal is present or not.
        cy.xpath('//div[1]/h3[1]/div[1]/div[1]').should('be.visible').should('contain','Add Card Details')

        //Verifying that "Card image" is present.
        cy.xpath('//div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]').should('be.visible')
        
        //Verifying the label of "Card Number" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[1]/div[1]/label[1]/div[1]').should('be.visible').should('contain','Card Number')

        //Verifying that "Card Number" input field is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[1]/div[1]/div').should('be.visible')

        //Verifying the label of "Card Holder Name" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[1]/div/label').should('be.visible').should('contain','Card Holder')
        
        //Verifying that "Card Holder Name" input field is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[1]/div/div').should('be.visible').click()

        //Verifying the validation message for blank data for "Card Number" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[1]/div[1]/div[2]').should('be.visible').should('have.text','Card number is required')
        
        //Verifying the label of "Expiry Date" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/label[1]/div[1]').should('be.visible').should('contain','Expiry Date')

        //Verifying that "Expiry Date" input field is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/div').should('be.visible').click()

        //Verifying the validation message for blank data for "Card Holder Name" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[1]/div/div[2]').should('be.visible').should('have.text','Card Holder name is required')

        //Verifying the label of "CVV Details" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[2]/label[1]/div[1]').should('be.visible').should('contain','CVV Details')

        //Verifying that "CVV Details" input field is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[2]/div').should('be.visible').click()

        //Verifying the validation message for blank data for "Expiry Date" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/div[2]').should('be.visible').should('have.text','Expiry date is required')

        //Verifying that "Checkbox" to set card as primary is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[3]/div[1]/div[1]/input[1]').should('be.visible').click()

        //Verifying the validation message for blank data for "CVV Details" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[2]/div[2]').should('be.visible').should('have.text','CVV is required')

        //Verifying the "Set as Primary" text beside checbox.
        cy.xpath('//div[1]/div[1]/form[1]/div[3]/div[1]/div[1]/label[1]/div[1]').should('be.visible').should('contain','Set as Primary')

        //Verifying the label of "Add Card" button.
        cy.xpath('//div[1]/div[1]/form[1]/div[4]/button[1]').should('be.visible').should('contain','Add Card')

        //Closing "Add Payment Card" modal. 
        cy.get('div.hidden>h3>div>svg').should('be.visible').click()

    })

    it('Validate "Add Card" functionality with invalid data.',()=>{
        //Click on "Add Payment Card" button.
        cy.xpath('//div[contains(text(),"Add P")]').should('be.visible').should('contain','Add Payment Card').click()

        //Validate "Add Card Details" modal is present or not.
        cy.xpath('//div[1]/h3[1]/div[1]/div[1]').should('be.visible').should('contain','Add Card Details')

        //Validate "Card Number" input field for invalid data.
        cy.xpath('//div[1]/div[1]/form[1]/div[1]/div[1]/div').should('be.visible').type('1123456789009876534')
        
        //Validate "Card Holder" input field for invalid data.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[1]/div/div').should('be.visible').type('pavan1234@#$%^&')

        //Verifying the validation message for "invalid data" for "Card Number" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[1]/div[1]/div[2]').should('be.visible').should('have.text','Card number is invalid')
        
        //Validate "Expiry Date" input field for invalid data.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/div').should('be.visible').type('1121')

        //Verifying the validation message for "invalid data" for "Card Holder Name" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[1]/div/div[2]').should('be.visible').should('have.text','Card Holder name is invalid')

        //Validate "CVV Details" input field for invalid data.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[2]/div').should('be.visible').type('1234')

        //Verifying the validation message for "invalid data" for "Expiry Date" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/div[2]').should('be.visible').should('have.text','Expiry date is invalid')

        //Verifying that "Checkbox" to set card as primary is present.
        cy.xpath('//div[1]/div[1]/form[1]/div[3]/div[1]/div[1]/input[1]').should('be.visible').click()

        //Verifying the validation message for "invalid data" for "CVV Details" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[2]/div[2]').should('be.visible').should('have.text','CVV is invalid')

        //Closing "Add Payment Card" modal. 
        cy.get('div.hidden>h3>div>svg').should('be.visible').click()
    })

    it('Validate "Add Card" functionality with valid data.',()=>{
        //Click on "Add Payment Card" button.
        cy.xpath('//div[contains(text(),"Add P")]').should('be.visible').should('contain','Add Payment Card').click()

        //Validate "Add Card Details" modal is present or not.
        cy.xpath('//div[1]/h3[1]/div[1]/div[1]').should('be.visible').should('contain','Add Card Details')

        //Enter Valid data into "Card Number" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[1]/div[1]/div').should('be.visible').type('4242424242424242')
        
        //Enter Valid data into "Card Holder" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[1]/div/div').should('be.visible').type('pavan kumar')

        //Enter Valid data into "Expiry Date" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[1]/div').should('be.visible').type('1123')

        //Enter Valid data into "CVV Details" input field.
        cy.xpath('//div[1]/div[1]/form[1]/div[2]/div[2]/div[1]/div[2]/div').should('be.visible').type('593')

        //Clicking on "Add Card" button.
        cy.xpath('//div[1]/div[1]/form[1]/div[4]/button[1]').should('be.visible').should('contain','Add Card').click()

        cy.contains('A New Card Has Been Added')
       
        //Verifying that the card added successfuuly.
        cy.xpath('//div[contains(text(),"T")]').should('be.visible').should('contain','Total Cards - 1')

    })

    it('Validate "Set As Primary Card" functionality.',()=>{
        //Adding one more card
        cy.addcard()
        cy.wait(3000)

        //Verifying that the card added successfuuly.
        cy.xpath('//div[contains(text(),"T")]').should('be.visible').should('contain','Total Cards - 2')

        cy.xpath('//input[1]').should('be.visible').click()

        cy.contains('Card has been set as Primary Card')   

    })

    it('Validate "Delete Card" functionality.',()=>{
        
        //Click on Delete icon on second card.
        cy.xpath('//span[1]/*[1]').should('be.visible').click()
        cy.wait(3000)

        //Verifying that the "Delete Confirmation" modal is present.
        cy.xpath('//div[1]/h3[1]/div[1]/div[1]').should('be.visible').should('contain','Confirmation')

        //validating all fields and labels on confirmation modal.
        cy.xpath('//div[2]/div[1]/div[1]/div[1]/div[1]/div[1]').should('be.visible').should('contain','Are you sure, you want to remove this Card?')

        cy.xpath('//div[1]/div[1]/div[2]/div[1]/span[1]').should('be.visible').should('contain','pavan kumar')

        cy.xpath('//div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]').should('be.visible').should('contain','Card Number :')

        cy.xpath('//div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[2]').should('be.visible').should('contain','Expiry Date :')

        cy.xpath('//div[1]/div[1]/div[2]/button[1]').should('be.visible').should('contain','Remove').click()
        cy.contains('Card Deleted')   
        cy.wait(5000)

        //Verifying that the card is Deleted successfuuly.
        cy.xpath('//div[contains(text(),"T")]').should('be.visible').should('contain','Total Cards - 1')

    })



})