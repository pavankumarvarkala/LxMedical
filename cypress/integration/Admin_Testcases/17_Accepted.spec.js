///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')

describe('Accepted Appointment Details Test cases',()=>{

    it('As a Admin the user should be navigated to the Appointment Details page of Accepted appointment by clicking on the eye icon against that appointment',()=>{
        cy.login()
        cy.url().should('contain','/dashboard')
        cy.get('.space-y-4 > :nth-child(2)').should('be.visible').should('have.text','Patients').click()
        cy.url().should('contain','/patients')
        cy.AddPatient()
        cy.readFile('cypress/fixtures/provider.json').then((provider) => {
        cy.get('[type=search]').should('be.visible').type(provider.email.toLowerCase())
        cy.get('tr:nth-child(1)>td:nth-child(2)').should('be.visible').should('have.text',provider.email.toLowerCase())
        cy.wait(4000)
        })
        cy.bookappointment()
        cy.get('[type=search]').should('be.visible').clear()
        cy.wait(4000)
        cy.get('.space-y-4 > :nth-child(4)').should('be.visible').should('have.text','Appointments').click()
        cy.get('table>tbody>tr:nth-child(1)>td:nth-child(4)').should('be.visible').should('have.text','requested')
        cy.get('table>tbody>tr:nth-child(1)>td:nth-child(8)>div>svg').scrollIntoView().should('be.visible').click()
        cy.wait(4000)
        cy.get(':nth-child(3) > .font-semibold > .text-sm').should('be.visible').should('have.text','requested')
        cy.get('[textid="admin.appointment.accept"]').should('be.visible').should('have.text','Accept').click()
        cy.wait(5000)
        cy.get(':nth-child(3) > .font-semibold > .text-sm').should('be.visible').should('have.text','accepted')
        
    })
    it('At "Appointment details" page each label and field should have proper label and validations',()=>{
        cy.get('.space-x-4 > .font-semibold').should('be.visible').should('have.text','Appointment Details')
        cy.get('.w-7').should('be.visible')
        cy.get('.min-h-screen.pb-2>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)').should('be.visible')
        cy.get('[textid="admin.appointment.assign.provider"]').should('be.visible').should('have.text','Assign Provider')
        cy.get('.mx-4 > :nth-child(2)>div:nth-child(1)>div').should('be.visible').should('have.text','Appointment ID')
        cy.get('.mx-4 > :nth-child(2)>div:nth-child(2)>div').should('be.visible').should('have.text','Requested For')
        cy.get('.mx-4 > :nth-child(2)>div:nth-child(3)>div:nth-child(1)').should('be.visible').should('have.text','Status')
        cy.get('.mx-4 > :nth-child(3)>div>div').should('be.visible').should('have.text','Service Address')
        cy.get('.mx-4 > :nth-child(4)>div:nth-child(1)').should('be.visible').should('have.text','Patients')
        cy.get('.mx-4 > :nth-child(5)>div:nth-child(1)').should('be.visible').should('have.text','Services Requested')
        cy.get('.mx-4 > :nth-child(6)>button').should('be.visible').should('have.text','Cancel Appointment')

    })
    it('The unique appointment id should be displayed',()=>{
        cy.get('.mx-4 > :nth-child(2)>div:nth-child(1)>div').should('be.visible').should('have.text','Appointment ID')

    })
    it('The date requested by the patient should be displayed',()=>{
        cy.get('.mx-4 > :nth-child(2)>div:nth-child(2)>div').should('be.visible').should('have.text','Requested For')

    })

    it('The Service Address where the patient requested the service should be displayed',()=>{
        cy.get('.mx-4 > :nth-child(3)>div>div').should('be.visible').should('have.text','Service Address')

    })

    it('As a Admin the user should be navigated to the medical history page of particular patient by clicking on the name card of that particular patient',()=>{
        cy.get('.justify-between > .flex > .w-6').should('be.visible').click()
        cy.wait(4000)
        cy.get('svg.h-6').should('be.visible').click()

    })
    it('The list of services requested by the patient should be displayed',()=>{
        cy.get('.mx-4 > :nth-child(5)>div:nth-child(1)').should('have.text','Services Requested')

    })
    it('As a Admin the user can assign a provider to the Appointment By clicking on the "Assign Provider" button',()=>{
        cy.get('[textid="admin.appointment.assign.provider"]').should('be.visible').should('have.text','Assign Provider').click()
        cy.wait(5000)
    })
    it('At "Assign provider" page each label and field should have proper label and validations',()=>{
        cy.get('.hidden > .justify-between > .font-bold').should('be.visible').should('have.text','Assign Provider')
        cy.get('.hidden > .justify-between > .w-6').should('be.visible')
        cy.get('.hidden>div>form>div:nth-child(1)>div:nth-child(1)').should('be.visible').should('have.text','Select Provider')
        cy.get('.hidden>div>form>div:nth-child(1)>div:nth-child(2)').should('be.visible')
        cy.get('.hidden>div>form>div:nth-child(2)>div:nth-child(1)>label').should('be.visible').should('have.text','Appointment Date')
        cy.get('.hidden>div>form>div:nth-child(2)>div:nth-child(1)>div').should('be.visible')
        cy.get('.hidden>div>form>div:nth-child(2)>div:nth-child(2)>label').should('be.visible').should('have.text','Appointment Time')
        cy.get('.hidden>div>form>div:nth-child(2)>div:nth-child(2)>div').should('be.visible')
        cy.get('.hidden>div>form>div:nth-child(4)>label').should('be.visible').should('have.text','Add Comment For Provider')
        cy.get('.hidden>div>form>div:nth-child(4)>div').should('be.visible')
        cy.get('.hidden>div>form>div:nth-child(5)>button').should('be.visible').should('have.text','Assign')

        })
        it('As a Admin the user can add comments for the provider at the time of assigning the provider',()=>{
            cy.get('.hidden>div>form>div:nth-child(4)>div').should('be.visible').type('Priority customer')
            cy.wait(5000)
 
        })
        it('After filling Assign provider form and clicking on "Assign" button the provider should be assigned and status should be changed to provider assigned',()=>{
            cy.get('.hidden>.mt-6>form>div:nth-child(1)>div:nth-child(2)').should('be.visible').click()
            cy.wait(3000)
            cy.get('.css-11unzgr>div:nth-child(2)').click()
            cy.get('.hidden>div>form>div:nth-child(2)>div:nth-child(1)>div').should('be.visible').click()
            cy.get('.react-datepicker__day--today').scrollIntoView().should('be.visible').click()
            cy.get('.hidden>div>form>div:nth-child(2)>div:nth-child(2)>div').should('be.visible').click()
            cy.get('.rc-time-picker-panel-select:nth-child(1)>ul>li:nth-child(2)').scrollIntoView().should('be.visible').click()
            cy.get('.rc-time-picker-panel-select:nth-child(3)>ul>li:nth-child(1)').should('be.visible').click()
            cy.get('.hidden>div>form>div:nth-child(5)>button').should('be.visible').should('have.text','Assign').click()
            cy.wait(5000)
            cy.get(':nth-child(3) > .font-semibold > .text-sm').should('be.visible').should('have.text','provider assigned')

        })
        
        it('As a Admin the user can cancel the appointment after entering the cancellation reason by clicking on the cancel button',()=>{
            cy.get('[textid="cancel.appointment"]').should('be.visible').should('have.text','Cancel Appointment').click()
            cy.wait(3000)
            cy.get('.hidden>div:nth-child(1)>div').should('be.visible').should('have.text','Confirmation')
            cy.get('.hidden>div:nth-child(1)>svg').should('be.visible')
            cy.get('div.hidden>div:nth-child(2)>div').should('be.visible').should('have.text','Are you sure, want to cancel this appointment.')
            cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div>label').should('be.visible').should('have.text','Reason For Cancellation')
            cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div>div>textarea').should('be.visible')
            cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(1)>div>div>textarea').should('be.visible').type('Provider not available')
            cy.get('div.hidden>div:nth-child(2)>form>div:nth-child(2)>button').should('be.visible').should('have.text','Cancel Appointment').click()
            cy.wait(5000)
            cy.get(':nth-child(3) > .font-semibold > .text-sm').should('be.visible').should('have.text','cancelled')
            cy.logout()

    
        })
})