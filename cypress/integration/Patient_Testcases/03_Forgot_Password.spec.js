///<reference types='cypress'/>
const cred = require('../../fixtures/cred.json')
Cypress.on('uncaught:exception', (err) => {
    return false
  })

describe('Forgot Password Module Test Cases',()=>{
    const getIframeBody = () => {
        // get the iframe > document > body
        // and retry until the body element is not empty
        return cy
            .get('#html_msg_body')
            .its('0.contentDocument.body').should('not.be.empty')
            // wraps "body" DOM element to allow
            // chaining more Cypress commands, like ".find(...)"
            // https://on.cypress.io/wrap
            .then(cy.wrap)
    }
      
    it('As a Patient the user should be redirected to forgot password page by clicking on forgot password  link in sign in page',()=>{
        cy.visit(cred.PatientUrl)
        cy.url().should('eq',cred.PatientUrl)
        cy.get('.bg-white > .mx-auto > .w-44').should('be.visible').click()
        cy.url().should('contain','/login')
        cy.get('.justify-between > a > .text-primary').should('be.visible').should('have.text','Forgot Password?').click()
        cy.url().should('contain','/forgot-password')

    })
    it('At forgot password page each label and field should have proper label and validations',()=>{
        cy.get('.text-gray-900').should('be.visible').should('contain','Forgot Password?')
        cy.get('a > .text-primary').should('be.visible')
        cy.get('.text-gray-500').should('be.visible').should('contain','A 6 digit')
        cy.get('div.w-full > .text-sm > div').should('be.visible').should('have.text','Email')
        cy.get('.mt-5 > .flex').should('be.visible').should('have.text','Continue')
    })

    it('The user should get error if no email is entered',()=>{
        cy.get('.mt-5 > .flex').should('be.visible').should('have.text','Continue').click()
        cy.get('.text-red-600').should('be.visible').should('have.text','Required')
    })

    it('The user should get error if invalid email is entered',()=>{
        cy.get('.appearance-none').should('be.visible').type('pp@mailinator.com')
        cy.get('.mt-5 > .flex').should('be.visible').should('have.text','Continue').click()
        cy.contains('User not found')

    })
    it('As a Patient by entering valid registered email id and clicking on continue button the user should be redirected to the Enter verification code page',()=>{
        cy.get('.appearance-none').should('be.visible').clear().type(cred.pemail)
        cy.get('.mt-5 > .flex').should('be.visible').should('have.text','Continue').click()
        cy.contains('OTP send to')
    })    

    it('At Enter verification code page each label and field should have proper label and validations',()=>{
        cy.get('.text-gray-800').should('be.visible').should('have.text','Enter Verification Code')
        cy.get('.mr-2').should('be.visible')
        cy.get('.mt-5.mb-2').should('be.visible')
        cy.get('.text-gray-500').should('be.visible').should('contain','A 6 digit')
        cy.get('.text-gray-600').should('be.visible').should('have.text',cred.pemail)
        cy.get(':nth-child(1) > input').should('be.visible')
        cy.get(':nth-child(2) > input').should('be.visible')
        cy.get(':nth-child(3) > input').should('be.visible')
        cy.get(':nth-child(4) > input').should('be.visible')
        cy.get(':nth-child(5) > input').should('be.visible')
        cy.get(':nth-child(6) > input').should('be.visible')
        cy.get('.font-medium').should('be.visible')
        cy.get('.mt-3 > .font-bold').should('be.visible').should('have.text','Resend Code')
        cy.get('.mt-5 > .flex').should('be.visible').should('have.text','Submit')
    })

    it('As a Patient the user should able to resend verification code by clicking resend link',()=>{
        cy.get('.mt-3 > .font-bold').should('be.visible').should('have.text','Resend Code').click()
        cy.contains('OTP send to')

    })

    it('The user should get an error if no data is entered',()=>{
        cy.get('.mt-5 > .flex').should('be.visible').should('have.text','Submit').click()
        cy.get('.my-4 > .text-xs').should('be.visible').should('have.text','Verfication Code is not valid, please re-enter or resend Verfication code')
        
    })

    it('The user should get an error if invalid data is entered',()=>{
        cy.get(':nth-child(1) > input').should('be.visible').type('1')
        cy.get(':nth-child(2) > input').should('be.visible').type('2')
        cy.get(':nth-child(3) > input').should('be.visible').type('3')
        cy.get(':nth-child(4) > input').should('be.visible').type('4')
        cy.get(':nth-child(5) > input').should('be.visible').type('5')
        cy.get(':nth-child(6) > input').should('be.visible').type('6')
        cy.get('.mt-5 > .flex').should('be.visible').should('have.text','Submit').click()
        cy.get('.my-4 > .text-xs').should('be.visible').should('have.text','Verfication Code is not valid, please re-enter or resend Verfication code')

    })
    
    it('Verify to Reset password from email', () => {
        cy.getotp('pawankumar@mailinator.com')
      })
      it('Verify to Reset password from email', () => {
       // cy.visit('https://qa.rch.build-release.com/forgot-password')
       cy.go('back')
        cy.wait(2000)
       cy.go('back')
       cy.wait(2000)


      //  cy.readFile('cypress/integration/Patient_Testcases/text.txt').then((data1) => {
            //cy.get('div:nth-child(1) > input[type=text]').type(data1)
           // cy.wait(2000)
           // cy.log('.........Member added successfully.....')
         //  })
         
        
           

           
          })
  })
  