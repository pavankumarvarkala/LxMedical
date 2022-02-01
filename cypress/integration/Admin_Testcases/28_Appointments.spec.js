///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')

describe('Appointments Module Test cases',()=>{

    it('As a Admin the user should be navigated to the Appointment Details page of completed appointment by clicking on the eye icon against that particular appointment',()=>{
        cy.login()
        cy.url().should('contain','/dashboard')
        cy.get('.space-y-4 > :nth-child(4)').should('be.visible').should('have.text','Appointments').click()
        cy.url().should('contain','/appointments')
    })
    it('At "Appointments" page each label and field should have proper label and validations',()=>{
         cy.get('.-mx-4>div:nth-child(1)>div:nth-child(1)').should('be.visible').should('have.text','Appointments')
         cy.get('[textid="admin.unVerified_payments"]').should('be.visible').should('have.text','Unverified Payments')
         cy.get('[textid="admin.bml_payments"]').should('be.visible').should('have.text','Bill Me Later Requests')
         cy.get('[type=search]').should('be.visible')
         cy.get('[type=text]').should('be.visible')
         cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter')
         cy.get('.mt-1:nth-child(2)').should('be.visible').should('have.text','Next')

        })
        it('As a Admin the user should be navigated to the "unverified payments list" page by clicking on the "Unverified Payments" button',()=>{
         cy.get('[textid="admin.unVerified_payments"]').should('be.visible').should('have.text','Unverified Payments').click()
         cy.get('.-mx-4>div:nth-child(1)>div:nth-child(2)').should('be.visible').should('have.text','Unverified Payments List')
         cy.get('.-mx-4>div:nth-child(1)>div:nth-child(1)').should('be.visible').click()

        })

        it('As a Admin the user should be navigated to the "Appointment details" page by clicking on eye icon against that particular Appointment',()=>{
        cy.get('tbody>tr:nth-child(1)>td:nth-child(7)>div>svg').scrollIntoView().should('be.visible').click()
        cy.get('.space-x-4 > .font-semibold').should('be.visible').should('have.text','Appointment Details')
        cy.get('.w-7').should('be.visible').click()

           })

        it('As a Admin the user should be navigated to the "Bill me later requests list" page by clicking on the "Bill me later requests" button',()=>{
        cy.get('[textid="admin.bml_payments"]').should('be.visible').should('have.text','Bill Me Later Requests').click()
        cy.get('.-mx-4>div:nth-child(1)>div:nth-child(2)').should('be.visible').should('have.text','Bill Me Later Requests List')
        cy.get('.-mx-4>div:nth-child(1)>div:nth-child(1)').should('be.visible').click()
   
        })

        it('As a Admin the user can filter the Appointments based on the status of the Appointment like requested,accepted etc. by clicking on the filter button',()=>{
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter').click()
        cy.get('.py-1:nth-child(2)>div:nth-child(10)').should('be.visible').should('have.text','completed').click()
        cy.wait(3000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>svg').should('be.visible').click()
        cy.wait(2000)
   
        })

        it('As a Admin the user can filter the appointment between particular dates by clicking on the calendar icon',()=>{
        cy.get('[type=text]').should('be.visible').click()
        cy.get('.react-datepicker__day--today').should('be.visible').click()
        cy.get('.react-datepicker__day--010').should('be.visible').click()
        cy.wait(2000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>svg').should('be.visible').click()
   
        })

        it('As a Admin the user can also filter the appointments based on the payment mode like cash,pos or bill me later etc.',()=>{
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter').click()
        cy.get('.py-1:nth-child(1)>div:nth-child(2)').should('be.visible').should('have.text','CASH').click()
        cy.wait(2000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>svg').should('be.visible').click()
        cy.wait(2000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter').click()
        cy.get('.py-1:nth-child(1)>div:nth-child(3)').should('be.visible').should('have.text','POS').click()
        cy.wait(2000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>svg').should('be.visible').click()
        cy.wait(2000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)').should('be.visible').should('have.text','Add Filter').click()
        cy.get('.py-1:nth-child(1)>div:nth-child(4)').should('be.visible').should('have.text','Bill Me Later').click()
        cy.wait(2000)
        cy.get('.-mx-4>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>svg').should('be.visible').click()
        cy.wait(2000)
   
        })
        
        it('As a Admin the user can search any appointment with appointment id or patient name or provider name with the help of search bar',()=>{
        cy.get('[type=search]').should('be.visible').type('LXMED021')
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').type('pvnkumar80@gmail.com')
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').type('Pavan Kumar')
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').type('Lxmedical Provider')
        cy.wait(2000)
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(2000)
   
        })
        
        it('As a Admin the user can switch between pages using next and previous buttons.',()=>{
        cy.get('.mt-1:nth-child(2)').should('be.visible').should('have.text','Next').click()
        cy.wait(2000)
        cy.get('.mt-1:nth-child(1)').should('be.visible').should('have.text','Previous').click()
        cy.wait(2000)

        })
         
})