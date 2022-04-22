///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')

describe('Cancelled Appointment Details Test cases',()=>{

    it('As a Admin the user should be navigated to the Appointment Details page of "Cancelled" appointment by clicking on the eye icon against that appointment',()=>{
        cy.login()
        cy.url().should('contain','/dashboard')
        cy.get('.space-y-4 > :nth-child(4)').should('be.visible').should('have.text','Appointments').click()
        cy.url().should('contain','/appointments')
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter').click()
        cy.get('.py-1:nth-child(2)>div:nth-child(8)').should('be.visible').should('have.text','cancelled').click()
        cy.wait(3000)
        cy.get('tbody>tr:nth-child(1)>td:nth-child(8)>div>svg').scrollIntoView().should('be.visible').click()
        cy.wait(3000)
        cy.get(':nth-child(3) > .font-semibold > .text-sm').should('be.visible').should('contain','cancelled')

    })
    it('At "Appointment details" page each label and field should have proper label and validations',()=>{
        cy.get('.space-x-4 > .font-semibold').should('be.visible').should('have.text','Appointment Details')
         cy.get('.w-7').should('be.visible')
         cy.get('[textid="reactivate.appointment"]').should('be.visible').should('have.text','Re-activate')
        cy.get('.border-b.py-3 > .text-primary').should('be.visible')
        cy.get('.mx-4 > :nth-child(2)>div:nth-child(1)>div').should('be.visible').should('have.text','Appointment ID')
        cy.get('.mx-4 > :nth-child(2)>div:nth-child(2)>div').should('be.visible').should('have.text','Requested For')
        cy.get('.mx-4 > :nth-child(2)>div:nth-child(3)>div:nth-child(1)').should('be.visible').should('have.text','Status')
        // cy.get('.gap-x- > :nth-child(2) > .text-gray-500').should('be.visible').should('have.text','Service Address')
        cy.get('.mx-4 > :nth-child(5)>div:nth-child(1)').should('be.visible').should('have.text','Patients')
        cy.get('.mx-4 > :nth-child(6)>div:nth-child(1)').should('be.visible').should('have.text','Services Requested')
        
 
    })
    it('The unique appointment id should be displayed',()=>{
        cy.get('.mx-4 > :nth-child(2)>div:nth-child(1)>div').should('be.visible').should('have.text','Appointment ID')

    })
    it('The date requested by the patient should be displayed',()=>{
        cy.get('.mx-4 > :nth-child(2)>div:nth-child(2)>div').should('be.visible').should('have.text','Requested For')

    })

    it('The Service Address where the patient requested the service should be displayed',()=>{
        // cy.get('.gap-x- > :nth-child(2) > .text-gray-500').should('be.visible').should('have.text','Service Address')

    })

    it('As a Admin the user should be navigated to the medical history page of particular patient by clicking on the name card of that particular patient',()=>{
        cy.get('.justify-between > .flex > .w-6').should('be.visible').click()
        cy.wait(4000)
        cy.get('svg.h-6').should('be.visible').click()

    })
    it('The list of services requested by the patient should be displayed',()=>{
        cy.get('.mx-4 > :nth-child(6)>div:nth-child(1)').should('have.text','Services Requested')

    })
    it('The cancellation reason added by admin/patient should be reflected',()=>{
        cy.get('.mx-4 > :nth-child(4)>div:nth-child(1)>div>div>div:nth-child(1)').should('be.visible').should('have.text','Cancellation Reason')

    })
    it('As a Admin the user can Re-Activate the appointment by clicking on the "Re-Activate" button.',()=>{
        cy.get('[textid="reactivate.appointment"]').should('be.visible').should('have.text','Re-activate').click()
        cy.contains('Appointment Reactivated successfully')
        cy.wait(3000)
        cy.get(':nth-child(3) > .font-semibold > .text-sm').should('be.visible').should('contain','accepted')

        

    })
        
})