///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
 import faker from 'faker'

describe('Personal Information Module Test Cases',()=>{

    it('As a patient the user should be navigated to the personal information page by clicking on profile icon',()=>{
        cy.patientlogin(cred.pemail,cred.ppassword)
        cy.url().should('contain','/home')
        cy.get('.p-1 > .h-7').should('be.visible').click()
        cy.url().should('contain','/profile')

    })
    it('At personal information page each label and field should have proper label and validations',()=>{
        cy.get('.justify-start > img').should('be.visible')
        cy.get('.justify-start > .m-auto').should('be.visible').should('have.text','LX MEDICAL')
        cy.get('[href="/appointments"]').should('be.visible').should('have.text','Appointments')
        cy.get('.justify-start > .hidden > :nth-child(3)').should('be.visible').should('have.text','Charts')
        cy.get('.justify-start > .hidden > :nth-child(4)').should('be.visible').should('have.text','Chat')
        cy.get('.p-1 > .h-7').should('be.visible')
        cy.get('.relative > .text-gray-600').should('be.visible')
        cy.get('.h-7').should('be.visible')
        cy.get('.px-4 > :nth-child(1) > img').should('be.visible')
        cy.get('.px-4 > .font-bold').should('be.visible')
        cy.get('.shadow-corner').should('be.visible').should('contain','Personal Information')
        cy.get('.space-y-8 > :nth-child(2)').should('be.visible').should('contain','Manage Membership Plan')
        cy.get('.space-y-8 > :nth-child(3)').should('be.visible').should('contain','Account Settings')
        cy.get('.space-y-8 > :nth-child(4)').should('be.visible').should('contain','About')
        cy.get('.space-y-4 > :nth-child(1)').should('be.visible').should('have.text','Personal Information')
        cy.get('.space-y-4 > :nth-child(2) > .text-gray-400').should('be.visible').should('have.text','Full Name')
        cy.get(':nth-child(3) > .text-gray-400').should('be.visible').should('have.text','Email Address')
        cy.get(':nth-child(4) > .text-gray-400').should('be.visible').should('have.text','Phone Number')
        cy.get(':nth-child(5) > .text-gray-400').should('be.visible').should('have.text','Date of Birth')
        cy.get(':nth-child(6) > .text-gray-400').should('be.visible').should('have.text','Gender')
        cy.get('.space-y-2 > .font-bold').should('be.visible').should('have.text','Address')
        cy.get(':nth-child(8) > .flex').should('be.visible').should('contain','Edit Details')
    
    
    })

    it('By clicking on edit details button the user should be navigated to edit details page',()=>{
        cy.get(':nth-child(8) > .flex').should('be.visible').should('contain','Edit Details').click()
        cy.url().should('contain','/personal')
    
    })
    it('At Edit details page each label and field should have proper label and validations',()=>{
        cy.get('.my-10 > :nth-child(1) > :nth-child(1) > .font-semibold').should('be.visible').should('have.text','Edit Details')
        cy.get('.my-10 > :nth-child(1) > :nth-child(1) > .h-6').should('be.visible')
        cy.get('.w-28 > img').should('be.visible')
        cy.get('.grid > .text-sm').should('be.visible').should('have.text','Change Profile Image')
        cy.get(':nth-child(2) > :nth-child(1) > .text-sm > div').should('be.visible').should('have.text','First Name')
        cy.get(':nth-child(2) > :nth-child(2) > .text-sm > div').should('be.visible').should('have.text','Last Name')
        cy.get(':nth-child(3) > :nth-child(1) > .text-sm > div').should('be.visible').should('have.text','Phone Number')
        cy.get(':nth-child(3) > :nth-child(2) > .text-sm > div').should('be.visible').should('have.text','Email')
        cy.get(':nth-child(4) > :nth-child(1) > .text-sm > div').should('be.visible').should('have.text','Date of Birth')
        cy.get(':nth-child(4) > :nth-child(2) > .block').should('be.visible').should('have.text','Gender')
        cy.get(':nth-child(6) > .font-medium').should('be.visible').should('have.text','Your Address')
        cy.get(':nth-child(7) > :nth-child(1) > .text-sm > div').should('be.visible').should('have.text','Address Line 1')
        cy.get(':nth-child(7) > :nth-child(2) > .text-sm > div').should('be.visible').should('contain','Address Line 2')
        cy.get(':nth-child(8) > :nth-child(1) > .text-sm > div').should('be.visible').should('have.text','Postal Code')
        cy.get(':nth-child(8) > :nth-child(2) > .text-sm > div').should('have.text','City')
        cy.get(':nth-child(9) > div.w-full > .text-sm > div').should('be.visible').should('have.text','State')
        cy.get('.mt-2 > .flex').should('be.visible').should('have.text','Save Details')

    })
    it("As a Patient the user should be able to update my profile details", () => {
        const fname = faker.name.firstName();
        const lname = faker.name.lastName();
        const phone = '8279556458';
        const Address='plot33'
        const Postal='90001'

        cy.log(fname)
        cy.log(lname)
        cy.log(phone)
        cy.log(Address)
        cy.log(Postal)

        cy.get(':nth-child(2) > :nth-child(1) > .mt-1 > .appearance-none').should('be.visible').clear().type(fname)
        cy.get(':nth-child(2) > :nth-child(2) > .mt-1 > .appearance-none').should('be.visible').clear().type(lname)
        cy.get(':nth-child(3) > :nth-child(1) > .mt-1 > .appearance-none').should('be.visible').clear().type(phone)
        cy.get(':nth-child(7) > :nth-child(1) > .mt-1 > .appearance-none').should('be.visible').clear().type(Address)
        cy.get(':nth-child(8) > :nth-child(1) > .mt-1 > .appearance-none').should('be.visible').clear().type(Postal)
        cy.get(':nth-child(7) > :nth-child(2) > .mt-1 > .appearance-none').type('park lane')
        cy.get('.mt-2 > .flex').click();
         cy.writeFile('../../fixtures/profile.json', {
            fname: fname,
            lname: lname,
            phone: phone,
            address:Address,
            postal:Postal
        })
        // verify profile
        cy.get(':nth-child(2) > :nth-child(1) > .mt-1 > .appearance-none').should('be.visible',fname)
        cy.get(':nth-child(2) > :nth-child(2) > .mt-1 > .appearance-none').should('be.visible',lname)
        cy.get(':nth-child(3) > :nth-child(1) > .mt-1 > .appearance-none').should('be.visible',phone)
        cy.get(':nth-child(7) > :nth-child(1) > .mt-1 > .appearance-none').should('be.visible',Address)
        cy.get(':nth-child(8) > :nth-child(1) > .mt-1 > .appearance-none').should('be.visible',Postal)
        cy.patientlogout()
    })
})