///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
import faker from 'faker'

describe('Book Appointment module testcases',()=>{
 
    it('As a Admin the user should be navigated to the Book appointment page by clicking on "Book" button against the paticular patient.',()=>{
        cy.login(cred.email,cred.password)
        cy.url().should('contain','/dashboard')
        cy.get('.space-y-4 > :nth-child(2)').should('be.visible').should('have.text','Patients').click()
        cy.url().should('contain','/patients')
        cy.AddPatient()
        cy.readFile('cypress/fixtures/provider.json').then((provider) => {
        cy.get('[type=search]').should('be.visible').type(provider.email.toLowerCase())
        cy.get('tr:nth-child(1)>td:nth-child(2)').should('be.visible').should('have.text',provider.email.toLowerCase())
        cy.wait(4000)
        })
        cy.get('tr:nth-child(1)>td:nth-child(5)>div>div').should('be.visible').should('have.text','Book').click()
        cy.url().should('contain','/book_appointment')
    })
    it('At "Book An Appointment" page each label and field should have proper label and validations',()=>{
        cy.get('.space-x-8 > .font-semibold').should('be.visible').should('have.text','Book Appointment')
        cy.get('.cursor-pointer > .w-8').should('be.visible')
        cy.get('div.py-2.bg-white:nth-child(1)>div>div>div:nth-child(2)').should('be.visible').should('have.text','Select Patient')
        cy.get('div.py-2.bg-white:nth-child(1)>div>div>div:nth-child(5)').should('be.visible').should('have.text','Select Service')
        cy.get('.px-8>div:nth-child(1)>div:nth-child(1)>div>label').should('be.visible').should('have.text','Preferred Appointment Date')
        cy.get('.appearance-none').should('be.visible')
        cy.get('form>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(1)').should('be.visible').should('have.text','Preferred Time Slot')
        cy.get('form>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div>label').should('be.visible').should('have.text','Morning')
        cy.get('form>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(3)>div>label').should('be.visible').should('have.text','Afternoon')
        cy.get('form>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(4)>div>label').should('be.visible').should('have.text','Evening')
        cy.get('form>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div>input').should('be.visible').should('not.be.checked')
        cy.get('form>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(3)>div>input').should('be.visible').should('not.be.checked')
        cy.get('form>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div>input').should('be.visible').should('not.be.checked')
        cy.get('form>div>div:nth-child(2)>div>div:nth-child(1)').should('be.visible').should('have.text','Service Address')
        cy.get('form>div>div:nth-child(2)>div>div:nth-child(2)>svg').should('be.visible')
        cy.get('form>div>div:nth-child(2)>div>div:nth-child(2)>div').should('be.visible').should('have.text','Edit')
        cy.get('form>div>div:nth-child(2)>div:nth-child(2)').should('be.visible')
        cy.get('form>div>div:nth-child(3)>div:nth-child(1)>span').should('be.visible')
        cy.get('form>div>div:nth-child(3)>div:nth-child(1)>div>span').should('be.visible').should('have.text','self')
        cy.get('form>div>div:nth-child(3)>div:nth-child(1)>div>div>div>input').should('be.visible').should('not.be.checked')
        cy.get('form>div>div:nth-child(3)>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)>div').should('be.visible').should('have.text','Date of Birth')
        cy.get('form>div>div:nth-child(3)>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div').should('be.visible').should('have.text','Gender')
        cy.get('form>div>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div>label').should('contain','Please describe')
        cy.get('form>div>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div>div>textarea').should('be.visible')
        cy.get('[textid="add.another_family.member"]').should('be.visible').should('have.text','Add Another Family Member')
        cy.get('[textid="continue"]').should('be.visible').should('have.text','Continue')
    })
    it('As a Admin the user should be navigated to the service address edit page by clicking on edit symbol against the service address',()=>{
        cy.get('form>div>div:nth-child(2)>div>div:nth-child(2)>div').should('be.visible').click()
        cy.wait(4000)
        cy.get('div.hidden>div:nth-child(1)>div').should('be.visible').should('have.text','Edit Address')
    
    })
    it('As a Admin the user can able to close the Edit service Address window by Clicking on the cross icon',()=>{
        cy.get('div.hidden>div:nth-child(1)>svg').should('be.visible').click()
        cy.wait(2000)
        cy.get('form>div>div:nth-child(2)>div>div:nth-child(2)>div').should('be.visible').click()
        cy.wait(4000)
        cy.get('div.hidden>div:nth-child(1)>div').should('be.visible').should('have.text','Edit Address')
    
    })
    it('At "Service Address" Edit window each label and field should have proper label and validations',()=>{
        cy.get('div.hidden>div:nth-child(1)>div').should('be.visible').should('have.text','Edit Address')
        cy.get('div.hidden>div:nth-child(1)>svg').should('be.visible')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div>label').should('be.visible').should('have.text','Address Line 1')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(2)>div>label').should('be.visible').should('contain','Address Line 2')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(3)>div:nth-child(1)>label').should('be.visible').should('have.text','Postal Code')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(3)>div:nth-child(2)>label').should('be.visible').should('have.text','City')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(4)>div>label').should('be.visible').should('have.text','State')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div>div').should('be.visible')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(2)>div>div').should('be.visible')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(3)>div:nth-child(1)>div').should('be.visible')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(3)>div:nth-child(2)>div').should('be.visible')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(4)>div>div').should('be.visible')
        cy.get('div.hidden> div.mt-6 > form > div.flex > button').should('be.visible').should('contain','Save Address')
    })
    it('After editing the address and clicking on save address button the user should able to save the service address',()=>{
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div>div').should('be.visible').clear().type('plot no 75')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(3)>div:nth-child(1)>div').should('be.visible').clear().type('54456')
        cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(2)>div>div').should('be.visible').clear().type('park lane')
        cy.wait(2000)
        cy.get('div.hidden> div.mt-6 > form > div.flex > button').should('be.visible').should('contain','Save Address').click()

    })
    it('As a Admin the user can able select the appointment date by clicking on calendar icon against the preferred appointment date field.',()=>{
        cy.get('.appearance-none').should('be.visible').click()
        cy.get('.react-datepicker__day--today').click()
    
    })
    it('As a Admin the user can able to select the appointment time by checking the check boxes in preferred time slot.',()=>{
        cy.get('form>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div>input').should('be.visible').should('not.be.checked').check()
        cy.get('form>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(3)>div>input').should('be.visible').should('not.be.checked').check()
    
    })

    it('As a Admin the user can select atleast one family and also can add primary symptoms',()=>{
        cy.get('form>div>div:nth-child(3)>div:nth-child(1)>div>div>div>input').should('be.visible').should('not.be.checked').check()
        cy.get('form>div>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div>div>textarea').should('be.visible').type('puking')
        cy.wait(2000)

    })

    it('As a Admin the user can add additional family members as per his membership plan by clicking on "Add another member" button.',()=>{
        cy.get('.mt-6 > .flex').should('be.visible').should('have.text','Add Another Family Member').click()
        cy.wait(4000)
        cy.get('.hidden:nth-child(1)>div:nth-child(2)>form>div:nth-child(4)>div>label').should('be.visible').should('have.text','Please describe your primary symptoms…')
        cy.get('.hidden:nth-child(1)>div:nth-child(2)>form>div:nth-child(4)>div>div').should('be.visible').type('Fever')
        cy.addfamilymember()
    })
    it('After filling Book appointment form and clicking on continue the user should be navigated to the select paln page',()=>{
        cy.wait(2000)
        cy.get('[textid="continue"]').should('be.visible').should('have.text','Continue').click()
        cy.wait(4000)
        cy.get('div.py-2.bg-white:nth-child(1)>div>div>div:nth-child(5)').should('be.visible').should('contain','Select Service')
        cy.wait(2000)

    })

    it('At "Select Service" page each label and field should have proper label and validations',()=>{
        cy.get('div.py-2.bg-white:nth-child(1)>div>div>div:nth-child(5)').should('be.visible').should('contain','Select Service')
        cy.get('form>div>div:nth-child(2)>div:nth-child(1)').should('be.visible').should('contain','Members receive 15% discount')
        cy.get('[type=search]').should('be.visible')
        cy.get('[textid="continue"]').should('be.visible').should('have.text','Continue')
        cy.get('form>div>div:nth-child(2)>div:nth-child(3)>div:nth-child(1)').should('be.visible').click()
        cy.contains('This service is available only for single patient.')
        cy.wait(2000)
        cy.get('.cursor-pointer > .w-8').should('be.visible').click()
        cy.wait(4000)
        cy.get('form>div>div:nth-child(3)>div:nth-child(1)>div>div>div>input').should('be.visible').uncheck()
        // cy.get('form>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div>input').scrollIntoView().should('be.visible').should('not.be.checked').check()
        // cy.get('form>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(3)>div>input').scrollIntoView().should('be.visible').should('not.be.checked').check()
        // cy.get('.appearance-none').scrollIntoView().should('be.visible').click()
        // cy.get('.react-datepicker__day--today').click()
        cy.wait(2000)
        cy.get('[textid="continue"]').should('be.visible').should('have.text','Continue').click()
        cy.wait(4000)
        cy.get('div.py-2.bg-white:nth-child(1)>div>div>div:nth-child(5)').should('be.visible').should('contain','Select Service')
        cy.wait(2000)
        cy.get('form>div>div:nth-child(2)>div:nth-child(3)>div:nth-child(1)').should('be.visible').click()
        cy.wait(2000)
        cy.get('form>div>div:nth-child(2)>div:nth-child(3)>div:nth-child(3)').should('be.visible').click()
        cy.contains('Any other services cannot be availed with "Telemedicine Visit" service.')
        cy.wait(2000)
        cy.get('.cursor-pointer > .w-8').should('be.visible').click()
        cy.wait(4000)
        cy.get('form>div>div:nth-child(3)>div:nth-child(1)>div>div>div>input').should('be.visible').uncheck()
        // cy.get('form>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div>input').scrollIntoView().should('be.visible').should('not.be.checked').check()
        // cy.get('form>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(3)>div>input').scrollIntoView().should('be.visible').should('not.be.checked').check()
        // cy.get('.appearance-none').scrollIntoView().should('be.visible').click()
        // cy.get('.react-datepicker__day--today').click()
        cy.wait(2000)
        cy.get('[textid="continue"]').should('be.visible').should('have.text','Continue').click()
        cy.wait(4000)
        cy.get('div.py-2.bg-white:nth-child(1)>div>div>div:nth-child(5)').should('be.visible').should('contain','Select Service')
        cy.wait(3000)


    })

    it('The user can able to search a particular service from the search box provided',()=>{
        cy.get('[type=search]').should('be.visible').type('telemedicine')
        cy.wait(4000)
        cy.get('form>div>div:nth-child(2)>div:nth-child(3)>div:nth-child(1)').should('be.visible').should('contain','Telemedicine Service')
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(4000)

    })
    it('As a admin the user can select more than one service for a single patient and multiple patients',()=>{
        cy.get('form>div>div:nth-child(2)>div:nth-child(3)>div:nth-child(2)').should('be.visible').click()
        cy.get('form>div>div:nth-child(2)>div:nth-child(3)>div:nth-child(3)').should('be.visible').click()

    })

    it('After selecting the service and clicking on "Book Appointment" button the user should get the booking confirmation',()=>{
        cy.get('[textid="continue"]').should('be.visible').should('have.text','Continue').click()
        cy.contains('Appointment Added successfully ')
        cy.wait(4000)
        cy.get('div.hidden>div:nth-child(1)>div').should('be.visible').should('have.text','Confirmation')

    })

    it('By clicking on continue button booking confirmation page the user should be navigated to the patients page',()=>{
        cy.xpath('/html/body/div[7]/div/div/div[1]/div[2]/div[3]/button').should('be.visible').should('have.text','Continue').click()
        cy.wait(4000)
        cy.url().should('contain','/patients')

    })
    it('The booked appointment should refelect instantly under apointment page and also on patient side',()=>{
        cy.get('.space-y-4 > :nth-child(4)').should('be.visible').should('have.text','Appointments').click()
        cy.wait(4000)
        cy.get('tr:nth-child(1)>td:nth-child(4)').should('be.visible').should('have.text','requested')
    })
    it('The primary symptoms added by the patient should reflect on the appointment name card',()=>{
        cy.get('tr:nth-child(1)>td:nth-child(8)>div>svg').scrollIntoView().should('be.visible').click()
        cy.wait(4000)
        cy.get('div.min-h-screen.pb-2>div:nth-child(2)>div:nth-child(4)>div:nth-child(2)>div>div>div:nth-child(2)').should('be.visible').should('contain','Fever')
        cy.logout()

    })

    
})