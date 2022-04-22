///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')

describe('Provider Assigned Appointment Details Test cases',()=>{

    it('As a Admin the user should be navigated to the Appointment Details page of "Provider Assigned" appointment by clicking on the eye icon against that appointment',()=>{
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
        cy.get('[textid="admin.appointment.assign.provider"]').should('be.visible').should('have.text','Assign Provider').click()
        cy.wait(5000)
        cy.get('.hidden>div>form>div:nth-child(4)>div').should('be.visible').type('Priority customer')
        cy.wait(5000)
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
    it('At "Appointment details" page each label and field should have proper label and validations',()=>{
        cy.get('.space-x-4 > .font-semibold').should('be.visible').should('have.text','Appointment Details')
        cy.get('.w-7').should('be.visible')
        cy.get('.min-h-screen.pb-2>div:nth-child(2)>div:nth-child(1)>div:nth-child(1)').should('be.visible')
        cy.get('.mx-4 > :nth-child(2)>div:nth-child(1)>div').should('be.visible').should('have.text','Appointment ID')
        cy.get('.mx-4 > :nth-child(2)>div:nth-child(2)>div').should('be.visible').should('have.text','Requested For')
        cy.get('.mx-4 > :nth-child(2)>div:nth-child(3)>div:nth-child(1)').should('be.visible').should('have.text','Status')
        cy.get('.mx-4 > :nth-child(3)>div:nth-child(2)>div').should('be.visible').should('have.text','Service Address')
        cy.get('.mx-4 > :nth-child(3)>div:nth-child(1)>div').should('be.visible').should('have.text','Scheduled On')
        cy.get('.mx-4 > :nth-child(4)>div:nth-child(1)').should('be.visible').should('have.text','Patients')
        cy.get('.mx-4 > :nth-child(5)>div:nth-child(1)').should('be.visible').should('have.text','Services Requested')
        cy.get('.mx-4 > :nth-child(6)>div:nth-child(1)').should('be.visible').should('have.text','Provider Details')
        cy.get('[textid="cancel.appointment"]').should('be.visible').should('have.text','Cancel Appointment')
        cy.get('[textid="reschedule.appointment"]').should('have.text','Reschedule Appointment')
        cy.get('[textid="change.provider"]').should('have.text','Change Provider')
 
    })
    it('The unique appointment id should be displayed',()=>{
        cy.get('.mx-4 > :nth-child(2)>div:nth-child(1)>div').should('be.visible').should('have.text','Appointment ID')

    })
    it('The date requested by the patient should be displayed',()=>{
        cy.get('.mx-4 > :nth-child(2)>div:nth-child(2)>div').should('be.visible').should('have.text','Requested For')

    })

    it('The Service Address where the patient requested the service should be displayed',()=>{
        cy.get('.mx-4 > :nth-child(3)>div:nth-child(2)>div').should('be.visible').should('have.text','Service Address')

    })

    it('As a Admin the user should be navigated to the medical history page of particular patient by clicking on the name card of that particular patient',()=>{
        cy.get('.justify-between > .flex > .w-6').should('be.visible').click()
        cy.wait(4000)
        cy.get('svg.h-6').should('be.visible').click()

    })
    it('The list of services requested by the patient should be displayed',()=>{
        cy.get('.mx-4 > :nth-child(5)>div:nth-child(1)').should('have.text','Services Requested')

    })
    it('The Appointment scheduled date and time should be displayed',()=>{
        cy.get('.py-6:nth-child(3)>div:nth-child(1)>span').should('be.visible')
        cy.wait(5000)
    })
    it('As a Admin the user should be navigated to the Profile details page of provider by clicking on name card of the provider',()=>{
        cy.get('.py-4:nth-child(6)>div:nth-child(2)>div:nth-child(1)').should('be.visible').click()
        cy.wait(5000)
        cy.url().should('contain','/providers')
        cy.get('.col-span-12 > div:nth-child(1) > div').should('be.visible')
        cy.get('.space-x-4.text-primary > svg').should('be.visible').click()
        cy.wait(5000)

        })
    it('As a Admin the user can chat with provider by clicking on chat icon against the provider',()=>{
        cy.get('.py-4:nth-child(6)>div:nth-child(2)>div:nth-child(1)>div>div:nth-child(2)').should('be.visible').click()
        cy.wait(5000)
        cy.url().should('contain','/chat')
        cy.get('.space-x-4.text-primary > svg').should('be.visible').click()
        cy.wait(5000)

 
        })
        
    it('As a Admin the user can should get appointment reschedule window by clicking on "reschedule Appointment" button',()=>{
        cy.get('[textid="reschedule.appointment"]').should('have.text','Reschedule Appointment').click()
        cy.wait(5000)
        cy.get('.hidden>div:nth-child(1)>div').should('be.visible').should('have.text','Reschedule Appointment')

    })
    it('At "Appointment Reschedule" page each label and field should have proper label and validations',()=>{
        cy.get('.hidden>div:nth-child(1)>div').should('be.visible').should('have.text','Reschedule Appointment')
        cy.get('.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>label').should('be.visible').should('have.text','Appointment Date')
        cy.get('.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>label').should('be.visible').should('have.text','Appointment Time')
        cy.get('.hidden>div:nth-child(2)>form>div:nth-child(2)>button').should('be.visible').should('have.text','Reschedule')
    })
    it('After Selecting Appointment date, Appointment time and by clicking on Rescheduled button the Appointment should be rescheduled',()=>{
        cy.get('.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>div').should('be.visible').click()
        cy.get('.react-datepicker__day--025').scrollIntoView().should('be.visible').click()
        cy.get('.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>div').should('be.visible').click()
        cy.get('.rc-time-picker-panel-select:nth-child(1)>ul>li:nth-child(2)').scrollIntoView().should('be.visible').click()
        cy.get('.rc-time-picker-panel-select:nth-child(3)>ul>li:nth-child(1)').should('be.visible').click()
        cy.get('.hidden>div:nth-child(2)>form>div:nth-child(2)>button').should('be.visible').should('have.text','Reschedule').click({force:true})
    })
    it('The Rescheduled date and time should reflect instantly under appointment details',()=>{
        cy.get('.py-6:nth-child(3)>div:nth-child(1)>span').should('be.visible').should('contain','25 202')
         
    })
    it('As a Admin the user can change the provider assigned by clicking on the change provider button',()=>{
        cy.get('[textid="change.provider"]').should('have.text','Change Provider').click()
        cy.wait(3000)
        cy.get('.hidden>.mt-6>form>div:nth-child(1)>div:nth-child(2)').should('be.visible').click()
        cy.wait(3000)
        cy.get('.css-11unzgr>div:nth-child(4)').click()
        cy.get('.hidden > .mt-6 > .grid > .pt-4 > .flex').should('be.visible').should('have.text','Assign').click()
        cy.wait(3000)
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