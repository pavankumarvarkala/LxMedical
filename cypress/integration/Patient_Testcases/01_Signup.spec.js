///<reference types = 'cypress'/>
const cred = require('../../fixtures/cred.json')
 import faker from 'faker'
const email =faker.name.firstName()+'@mailinator.com'
 describe('Sign Up module testcases', ()=>{
it('As a patient the user should be navigated to the landing page after entering the url' ,()=>{
    cy.visit(cred.PatientUrl)
    cy.url().should('eq',cred.PatientUrl)
})

it('As a patient the user should be navigated to the create account page by clicking create account button in login page',()=>{
    cy.get('.bg-white > .mx-auto > .w-44').should('be.visible').click()
    cy.url().should('contain','/login')
    cy.get('[href="/signup"] > .flex').should('be.visible').should('contain','Create').click()
    cy.url().should('contain','/signup')
})

it('At create an account page each label and field should have properblabel and validations',()=>{
    cy.get('[alt=logo]').should('be.visible')
    cy.get('.p-10 > :nth-child(1)').should('be.visible').should('have.text','LX Medical')
    cy.get('.font-semibold').should('be.visible').should('contain','Create An Account')
    cy.get('.h-6').should('be.visible')
    cy.get('.gap-4 > :nth-child(1) > :nth-child(1)').should('be.visible').should('have.text','First Name')
    cy.get('.gap-4 > :nth-child(1) > :nth-child(2)').should('be.visible').should('have.text','Last Name')
    cy.get('.gap-4 > :nth-child(2) > :nth-child(1)').should('be.visible').should('contain','Phone Number')
    cy.get('.gap-4 > :nth-child(2) > :nth-child(2)').should('be.visible').should('have.text','Email')
    cy.get(':nth-child(3) > div.w-full').should('be.visible').should('have.text','Date of Birth')
    cy.get(':nth-child(3) > :nth-child(2)').should('be.visible').should('contain','Gender')
    cy.get(':nth-child(5) > .font-medium').should('be.visible').should('have.text','Your Address')
    cy.get(':nth-child(6) > :nth-child(1)').should('be.visible').should('have.text','Address Line 1')
    cy.get(':nth-child(6) > :nth-child(2)').should('be.visible').should('contain','Address Line 2')
    cy.get(':nth-child(7) > :nth-child(1)').should('be.visible').should('contain','Postal Code')
    cy.get(':nth-child(7) > :nth-child(2)').should('be.visible').should('contain','City')
    cy.get('#patientSignup>form>div:nth-child(8)').should('be.visible').should('contain','State')
    cy.get('.h-4').should('be.visible').should('not.be.checked')
    cy.get('.gap-x-1 > :nth-child(3)').should('be.visible').should('contain','Terms')
    cy.get('.gap-x-1 > :nth-child(5)').should('be.visible').should('contain','Privacy')
    cy.get('.justify-center').should('be.visible').should('contain','Continue')
})

it('As a patient the user should get all the validation error if proceeds to next page with no data',()=>{
    cy.get('.justify-center').should('be.visible').click()
    cy.get(':nth-child(1) > :nth-child(1) > .text-red-600').should('be.visible').should('have.text','Required')
    cy.get(':nth-child(1) > :nth-child(2) > .text-red-600').should('be.visible').should('have.text','Required')
    cy.get(':nth-child(2) > :nth-child(1) > .text-red-600').should('be.visible').should('have.text','Required')
    cy.get(':nth-child(2) > :nth-child(2) > .text-red-600').should('be.visible').should('have.text','Required')
    cy.get(':nth-child(3) > div.w-full > .text-red-600').should('be.visible').should('have.text','Required')
    cy.get(':nth-child(3) > :nth-child(2) > .text-red-600').should('be.visible').should('have.text','Required')
    cy.get(':nth-child(6) > :nth-child(1) > .text-red-600').should('be.visible').should('have.text','Required')
    cy.get(':nth-child(7) > :nth-child(1) > .text-red-600').should('be.visible').should('have.text','Required')
    cy.get(':nth-child(7) > :nth-child(2) > .text-red-600').should('be.visible').should('have.text','Required')
    cy.get(':nth-child(8) > div.w-full > .text-red-600').should('be.visible').should('have.text','Required')

})


it('As a patient the user should be able to navigated to the Disclosure page after filling all details with valid data',()=>{
    cy.get(':nth-child(1) > :nth-child(1) > .relative > .appearance-none').should('be.visible').type('pawan')
    cy.get(':nth-child(1) > :nth-child(2) > .mt-1 > .appearance-none').should('be.visible').type('kumar')
    cy.get(':nth-child(2) > :nth-child(1) > .mt-1 > .appearance-none').should('be.visible').type('7799552341')
    cy.get(':nth-child(2) > :nth-child(2) > .mt-1 > .appearance-none').should('be.visible').type('pawan@mailinator.com')
    cy.get('.css-tlfecz-indicatorContainer').click()
    cy.wait(5000)
    cy.get('.text-red-600').should('be.visible').should('contain','already exists')
    cy.get(':nth-child(2) > :nth-child(2) > .relative > .appearance-none').clear()
    cy.get(':nth-child(2) > :nth-child(2) > .mt-1 > .appearance-none').should('be.visible').type(email)
    cy.get('.react-datepicker__input-container > .appearance-none').should('be.visible').click()
    cy.get('.react-datepicker__year-select').should('be.visible').select('1991')
    cy.get('.react-datepicker__day--019').should('be.visible').click()
    cy.get('.css-1hwfws3').click()
    cy.get('#patientSignup > form > div:nth-child(3) > div:nth-child(2) > div.text-sm.font-bold.text-primary.css-2b097c-container > div') .contains('Male').click()
    cy.get(':nth-child(6) > :nth-child(1) > .mt-1 > .appearance-none').should('be.visible').type('plot no 99')
    cy.get(':nth-child(6) > :nth-child(2) > .mt-1 > .appearance-none').should('be.visible').type('park street')
    cy.get(':nth-child(7) > :nth-child(1) > .mt-1 > .appearance-none').should('be.visible').type('35242')
    cy.get('.justify-center').should('be.visible').click()
    cy.get('.text-red-600').should('be.visible').should('have.text','Please accept Terms of Use & Privacy Policy')
    cy.get('.h-4').should('be.visible').should('not.be.checked').check()
    cy.get('.gap-x-1 > :nth-child(3)').should('be.visible').click()
    cy.get('.my-5').should('be.visible').should('have.text','Terms & conditions')
    cy.get('.w-5').should('be.visible').click()
    cy.get('.gap-x-1 > :nth-child(5)').should('be.visible').should('have.text','Privacy Policies').click()
    cy.get('.gap-x-1 > :nth-child(5)').should('be.visible').should('have.text','Privacy Policies')
    cy.get('.w-5 > path').should('be.visible').click()
    cy.get('.justify-center').should('be.visible').click()

})

it('As a patient the user should be navigated to the patient consent page after accepting disclosure conditions',()=>{
    cy.get('.text-gray-800').should('be.visible').should('have.text','Disclosure of Out of Network')
    cy.get('.justify-center').should('be.visible').should('contain','Continue').click()
    cy.get('.text-red-600').should('be.visible').should('have.text','Please accept to continue')
    cy.get('.ml-2 > div').should('be.visible').should('have.text','I accept the above conditions')
    cy.get('.h-4').should('be.visible').should('not.be.checked').check()
    cy.get('.justify-center').should('be.visible').should('contain','Continue').click()

})

it('As a patient the user should be navigated to the email verification page after accepting patient consent conditions',()=>{
    cy.get('.text-gray-800').should('be.visible').should('have.text','Patient Consent to Treatment')
    cy.get('.justify-center').should('be.visible').should('contain','Continue').click()
    cy.get('.text-red-600').should('be.visible').should('have.text','Please accept to continue')
    cy.get('.ml-2 > div').should('be.visible').should('have.text','I accept the above conditions')
    cy.get('.h-4').should('be.visible').should('not.be.checked').check()
    cy.get('.justify-center').should('be.visible').should('contain','Continue').click()

})

it('As a patient the user should be navigated to the create password page after verifying email',()=>{
     cy.get('.Toastify__toast-body').should('be.visible').should('contain','Otp sent')
    cy.get('.text-gray-600').should('be.visible').should('have.text',email)
    cy.get('.text-gray-800').should('be.visible').should('have.text','Enter Verification Code')
    cy.get('.text-gray-500').should('be.visible').should('contain','A 6 digit')
    cy.get('.font-medium').should('be.visible').should('contain','received')
    cy.get('.mt-3 > .font-bold').should('be.visible').should('contain','Resend')
    cy.get('.mt-5 > .flex').should('be.visible').should('have.text','Submit').click()
    cy.get('.my-4 > .text-xs').should('be.visible').should('contain','not valid')
 


    

    
})



})