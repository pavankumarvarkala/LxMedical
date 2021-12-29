///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')

describe('Book Appointment module testcases',()=>{
 
    it('As a Admin the user should be navigated to the Book appointment page by clicking on "Book" button against the paticular patient.',()=>{
        cy.login(cred.email,cred.password)
        cy.get(':nth-child(1) > :nth-child(5) > .flex > .text-xs').should('be.visible').should('have.text','Book').click()
        cy.url().should('contain','/book_appointment')
    })
    it('At "Book An Appointment" page each label and field should have proper label and validations',()=>{
        cy.get('.space-x-8 > .font-semibold').should('be.visible').should('have.text','Book Appointment')
        cy.get('.cursor-pointer > .w-8').should('be.visible')
        cy.get('.border-b-2.py-2 > .flex > .text-primary').should('be.visible').should('have.text','Select Patient')
        cy.get('.px-8>div:nth-child(1)>div:nth-child(1)>div>label').should('be.visible').should('have.text','Preferred Appointment Date')
        cy.get('.appearance-none').should('be.visible')
        cy.get('.flex-col > .text-gray-600').should('be.visible').should('have.text','Preferred Time Slot')
        cy.get('.flex-col > :nth-child(2) > .flex > .ml-2 > div').should('be.visible').should('have.text','Morning')
        cy.get('.flex-col > :nth-child(3) > .flex > .ml-2 > div').should('be.visible').should('have.text','Afternoon')
        cy.get('.flex-col > :nth-child(4) > .flex > .ml-2 > div').should('be.visible').should('have.text','Evening')
        cy.get('.flex-col > :nth-child(2) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get('.flex-col > :nth-child(3) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get('.flex-col > :nth-child(4) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get('.pb-6 > .justify-between > :nth-child(1)').should('be.visible').should('have.text','Service Address')
        cy.get('.pb-6 > .border').should('be.visible')
        cy.get('.justify-between > .flex > .w-4').should('be.visible')
        cy.get('.justify-between > .flex > .ml-2').should('be.visible').should('have.text','Edit')
        cy.get(':nth-child(3) > .justify-between > .gap-x-3 > .font-medium').should('be.visible').should('have.text','self')
        cy.get(':nth-child(3) > .justify-between > .gap-x-3 > :nth-child(2) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get('.px-8>div:nth-child(3)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)>div').should('be.visible').should('have.text','Date of Birth')
        cy.get('.px-8>div:nth-child(3)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div').should('be.visible').should('have.text','Gender')
        cy.get('.px-8>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>label').should('contain','Please describe')
        cy.get('.px-8>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>div').should('be.visible')
        cy.get('.mt-6 > .flex').should('be.visible').should('have.text','Add Another Family Member')
        cy.get('.my-8 > .flex').should('be.visible').should('have.text','Continue')
    })
    it('As a Admin the user should be navigated to the service address edit page by clicking on edit symbol against the service address',()=>{
        cy.get('.justify-between > .flex > .w-4').should('be.visible').click()
    
    })
    it('At "Service Address" Edit window each label and field should have proper label and validations',()=>{
        cy.get('.justify-between > .font-bold').should('be.visible').should('have.text','Edit Address')
        cy.get('.hidden > .mt-6 > .mt-4 > :nth-child(1) > div.w-full > .text-sm > div').should('be.visible').should('have.text','Address Line 1')
        cy.get('.hidden > .mt-6 > .mt-4 > :nth-child(2) > div.w-full > .text-sm > div').should('be.visible').should('contain','Address Line 2')
        cy.get('.hidden > .mt-6 > .mt-4 > .grid-cols-2 > :nth-child(1) > .text-sm > div').should('be.visible').should('have.text','Postal Code')
        cy.get('.hidden > .mt-6 > .mt-4 > .grid-cols-2 > :nth-child(2) > .text-sm > div').should('be.visible').should('have.text','City')
        cy.get('body > div:nth-child(7) > div > div>div:nth-child(1)>div:nth-child(2)>form>div:nth-child(4)>div>label').should('be.visible').should('have.text','State')
        cy.get('.hidden > .mt-6 > .mt-4 > .mt-2 > .flex').should('be.visible').should('have.text','Save Address')
    })
    it('After editing the address and clicking on save address button the user should able to save the service address',()=>{
        cy.get('.hidden > .mt-6 > .mt-4 > :nth-child(1) > div.w-full > .mt-1 > .appearance-none').should('be.visible').clear().type('plot no 75')
        cy.get('.hidden > .mt-6 > .mt-4 > .grid-cols-2 > :nth-child(1) > .mt-1 > .appearance-none').should('be.visible').clear().type('35242')
        cy.get('.hidden > .mt-6 > .mt-4 > :nth-child(2) > div.w-full > .mt-1 > .appearance-none').should('be.visible').clear().type('park lane')
        cy.wait(2000)
        cy.get('.hidden > .mt-6 > .mt-4 > .mt-2 > .flex').should('be.visible').should('have.text','Save Address').click()

    })
    it('As a Admin the user can able select the appointment date by clicking on calendar icon against the preferred appointment date field.',()=>{
        cy.get('.appearance-none').should('be.visible').click()
        cy.get(':nth-child(5) > .react-datepicker__day--030').click()
    
    })
    it('As a Admin the user can able to select the appointment time by checking the check boxes in preferred time slot.',()=>{
        cy.get('.flex-col > :nth-child(2) > .flex > .h-4').should('be.visible').should('not.be.checked').click()
        cy.get('.flex-col > :nth-child(2) > .flex > .h-4').should('be.visible').should('be.checked')
    
    })
    it('As a Admin the user can add additional family members as per his membership plan by clicking on "Add another member" button.',()=>{
        cy.get('.mt-6 > .flex').should('be.visible').should('have.text','Add Another Family Member').click()    
    })
})