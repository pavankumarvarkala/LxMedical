///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')

describe('Provider Dispatched Appointment Details Test cases',()=>{

    it('As a Admin the user should be navigated to the Appointment Details page of Accepted appointment by clicking on the eye icon against that appointment',()=>{
        cy.login()
        cy.url().should('contain','/dashboard')
        cy.get('.space-y-4 > :nth-child(4)').should('be.visible').should('have.text','Appointments').click()
        cy.url().should('contain','/appointments')
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter').click()
        cy.get('.py-1:nth-child(2)>div:nth-child(5)').should('be.visible').should('have.text','provider dispatched').click()
        cy.get('tbody>tr:nth-child(1)>td:nth-child(7)>div>svg').scrollIntoView().should('be.visible').click()
        cy.get('.min-h-screen:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>div:nth-child(2)>span').should('be.visible').should('contain','provider dispatched')

        
    })
    it('At "Appointment details" page each label and field should have proper label and validations',()=>{
        cy.get('.space-x-4 > .font-semibold').should('be.visible').should('have.text','Appointment Details')
        cy.get('.w-7').should('be.visible')
        cy.get('.border-b.py-3 > .text-primary').should('be.visible')
        cy.get('.min-h-screen:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>div').should('be.visible').should('have.text','Appointment ID')
        cy.get('.min-h-screen:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)>div').should('be.visible').should('have.text','Requested For')
        cy.get('.min-h-screen:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>div:nth-child(1)').should('be.visible').should('have.text','Status')
        cy.get('.min-h-screen:nth-child(1)>div:nth-child(2)>div:nth-child(3)>div:nth-child(1)>div').should('be.visible').should('have.text','Scheduled On')
        cy.get('.min-h-screen:nth-child(1)>div:nth-child(2)>div:nth-child(4)>div:nth-child(1)').should('be.visible').should('have.text','Patients')
        cy.get('.py-4.capitalize > :nth-child(1)').should('be.visible').should('have.text','Services Requested')
        cy.get('.py-4:nth-child(6)>div:nth-child(1)').should('be.visible').should('have.text','Provider Details')
        cy.get('.py-4:nth-child(6)>div:nth-child(2)>div:nth-child(1)').should('be.visible')
        cy.get('.py-4:nth-child(6)>div:nth-child(2)>div:nth-child(2)').should('be.visible')
        cy.get('[textid="cancel.appointment"]').should('have.text','Cancel Appointment')
 
    })
    it('The unique appointment id should be displayed',()=>{
        cy.get('.min-h-screen:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div:nth-child(1)>div').should('be.visible').should('have.text','Appointment ID')

    })
    it('The date requested by the patient should be displayed',()=>{
        cy.get('.min-h-screen:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)>div').should('be.visible').should('have.text','Requested For')

    })
    it('As a Admin the user should be navigated to the medical history page of particular patient by clicking on the name card of that particular patient',()=>{
        cy.get('.min-h-screen:nth-child(1)>div:nth-child(2)>div:nth-child(4)>div:nth-child(2)>div>div>div:nth-child(1)>div').should('be.visible').click()
        cy.url().should('contain','/medical_history')
        cy.get('.py-8 > .h-6').should('be.visible').click()

    })
    it('The list of services requested by the patient should be displayed',()=>{
        cy.get('.py-4.capitalize > :nth-child(1)').should('be.visible').should('have.text','Services Requested')

    })
    it('The Appointment scheduled date and time should be displayed',()=>{
        cy.get('.py-6:nth-child(3)>div>span').should('be.visible')
        cy.wait(5000)
    })
    it('As a Admin the user should be navigated to the Profile details page of provider by clicking on name card of the provider',()=>{
        cy.get('.py-4:nth-child(6)>div:nth-child(2)>div:nth-child(1)').should('be.visible').click()
        cy.url().should('contain','/providers')
        cy.get('.col-span-12 > div:nth-child(1) > div').should('be.visible')
        cy.get('.space-x-4.text-primary > svg').should('be.visible').click()


        })
        it('As a Admin the user can chat with provider by clicking on chat icon against the provider',()=>{
            cy.get('.py-4:nth-child(6)>div:nth-child(2)>div:nth-child(1)>div>div:nth-child(2)').should('be.visible').click()
            cy.url().should('contain','/chat')
            cy.get('.space-x-4.text-primary > svg').should('be.visible').click()
            cy.wait(5000)

 
        })
        it('As a Admin the user can view the chat between the patient and provider',()=>{
            cy.get('.py-4:nth-child(6)>div:nth-child(2)>div:nth-child(2)').should('be.visible').click()
            cy.url().should('contain','/chat_view')
            cy.get('.pl-5 > div.font-semibold.capitalize').should('be.visible').should('have.text','Chat between Patient and Provider')
            cy.get('.min-h-screen>div>div:nth-child(2)>div>div:nth-child(1)>div:nth-child(1)>svg').should('be.visible').click()

        })
        
    
    it('As a Admin the user can cancel the appointment after entering the cancellation reason by clicking on the cancel button',()=>{
        cy.get('[textid="cancel.appointment"]').should('have.text','Cancel Appointment').click()
        cy.get('.hidden > .mt-6 > form > .pt-2 > div.w-full > .mt-1 > .resize-y').should('be.visible').type('Provider not available')
        cy.get('.hidden>div:nth-child(2)>form>div:nth-child(2)>button').should('be.visible').should('have.text','Cancel Appointment').click()
        cy.wait(5000)
        cy.get(':nth-child(3) > .font-semibold > .text-sm').should('be.visible').should('have.text','cancelled')


    })
})