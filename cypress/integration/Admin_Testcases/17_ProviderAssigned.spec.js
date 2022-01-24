///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')

describe('Accepted Appointment Details Test cases',()=>{

    it('As a Admin the user should be navigated to the Appointment Details page of "Provider Assigned" appointment by clicking on the eye icon against that appointment',()=>{
        cy.login()
        cy.url().should('contain','/dashboard')
        cy.get('.space-y-4>div:nth-child(2)').should('be.visible').should('have.text','Patients').click()
        cy.url().should('contain','/patients')
        cy.get('input[type=search]').type('pvnkumar80@gmail.com')
        cy.get('.flex > .text-xs').should('be.visible').should('have.text','Book').click()
        cy.url().should('contain','/book_appointment')
        cy.get('.my-4>div:nth-child(2)>div>form>div>div:nth-child(1)>div:nth-child(1)>div>div').click()
        cy.get('.react-datepicker__day--today').click()
        cy.get('.my-4>div:nth-child(2)>div>form>div>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div>input').should('be.visible').check()
        cy.get('.my-4>div:nth-child(2)>div>form>div>div:nth-child(3)').click()
        cy.get('form>.px-8>div:nth-child(3)>div:nth-child(2)>div:nth-child(2)>div>div').type('Fever')
        cy.get('.my-8 > .flex').should('be.visible').should('have.text','Continue').click()
        cy.get('form>div>div:nth-child(2)>div:nth-child(3)>div:nth-child(3)').click()
        cy.get('form>div>div>div>[type=button]').should('be.visible').should('have.text','Continue').click()
        cy.wait(2000)
        cy.contains('Appointment Added successfully')
        cy.xpath('/html/body/div[7]/div/div/div[1]/div[2]/div[3]/button').should('be.visible').should('have.text','Continue').click()
        cy.get('.flex>div>nav>div:nth-child(4)').should('be.visible').should('have.text','Appointments').click()
        cy.get('table>tbody>tr:nth-child(1)>td:nth-child(4)').should('be.visible').should('have.text','requested')
        cy.get('table>tbody>tr:nth-child(1)>td:nth-child(7)').should('be.visible').click()
        cy.get(':nth-child(3) > .font-semibold > .text-sm').should('be.visible').should('have.text','requested')
        cy.get('[textid="admin.appointment.accept"]').should('be.visible').should('have.text','Accept').click()
        cy.wait(5000)
        cy.get(':nth-child(3) > .font-semibold > .text-sm').should('be.visible').should('have.text','accepted')
        
    })
    it('At "Appointment details" page each label and field should have proper label and validations',()=>{
        cy.get('.space-x-4 > .font-semibold').should('be.visible').should('have.text','Appointment Details')
        cy.get('.w-7').should('be.visible')
        cy.get('.border-b.py-3 > .text-primary').should('be.visible')
        cy.get(':nth-child(1) > .text-gray-500').should('be.visible').should('have.text','Appointment ID')
        cy.get('.flex.capitalize > .text-gray-500').should('be.visible').should('have.text','Requested For')
        cy.get(':nth-child(3) > .text-gray-500').should('be.visible').should('have.text','Status')
        cy.get('.mx-4 > :nth-child(3) > :nth-child(1)').should('be.visible').should('have.text','Patients')
        cy.get('.py-4.capitalize > :nth-child(1)').should('be.visible').should('have.text','Services Requested')
        cy.get('.py-4:nth-child(6)>div:nth-child(1)').should('be.visible').should('have.text','Provider Details')
        cy.get('.py-4:nth-child(6)>div:nth-child(2)>div:nth-child(1)').should('be.visible')
        cy.get('.py-4:nth-child(6)>div:nth-child(2)>div:nth-child(2)').should('be.visible')
        cy.get('[textid="cancel.appointment"]').should('have.text','Cancel Appointment')
        cy.get('[textid="reschedule.appointment"]').should('have.text','Reschedule Appointment')
        cy.get('[textid="change.provider"]').should('have.text','Change Provider')
 
    })
    it('The unique appointment id should be displayed',()=>{
        cy.get(':nth-child(1) > .text-gray-500').should('be.visible').should('have.text','Appointment ID')

    })
    it('The date requested by the patient should be displayed',()=>{
        cy.get('.flex.capitalize > .text-gray-500').should('be.visible').should('have.text','Requested For')

    })
    it('As a Admin the user should be navigated to the medical history page of particular patient by clicking on the name card of that particular patient',()=>{
        cy.get('.justify-between > .flex > .w-6').should('be.visible').click()
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
            cy.get('.pl-5 > div.font-semibold.capitalize').should('be.visible').should('have.text','Chat Between Patient And Provider')
            cy.get('.min-h-screen>div>div:nth-child(2)>div>div:nth-child(1)>div:nth-child(1)>svg').should('be.visible').click()

        })
        
    it('As a Admin the user can should get appointment reschedule window by clicking on "reschedule Appointment" button',()=>{
        cy.get('[textid="reschedule.appointment"]').should('have.text','Reschedule Appointment').click()
        cy.get('.hidden>div:nth-child(1)>div').should('be.visible').should('have.text','Reschedule Appointment')

    })
    it('At "Appointment Reschedule" page each label and field should have proper label and validations',()=>{
        cy.get('.hidden>div:nth-child(1)>div').should('be.visible').should('have.text','Reschedule Appointment')
        cy.get('.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>label').should('be.visible').should('have.text','Appointment Date')
        cy.get('.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>label').should('be.visible').should('have.text','Appointment Time')
        cy.get('.hidden>div:nth-child(2)>form>div:nth-child(2)>button').should('be.visible').should('have.text','Reschedule')
    })
    it('After Selecting Appointment date, Appointment time and by clicking on Rescheduled button the Appointment should be rescheduled',()=>{
        cy.get('.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(1)>label').should('be.visible').should('have.text','Appointment Date').click()
        cy.get('.react-datepicker__day--30').scrollIntoView().should('be.visible').click()
        cy.get('.hidden>div:nth-child(2)>form>div:nth-child(1)>div:nth-child(2)>label').should('be.visible').should('have.text','Appointment Time').click()
        cy.get('.rc-time-picker-panel-select-option-selected').should('be.visible').click({multiple:true})
        cy.get('.hidden>div:nth-child(2)>form>div:nth-child(2)>button').should('be.visible').should('have.text','Reschedule').click()
    })
    it('The Rescheduled date and time should reflect instantly under appointment details',()=>{
        cy.get('.py-6:nth-child(3)>div>span').should('be.visible').should('contain','30 2022')
         
    })
    it('As a Admin the user can change the provider assigned by clicking on the change provider button',()=>{
        cy.get('[textid="change.provider"]').should('have.text','Change Provider').click()
        cy.get('.hidden>.mt-6>form>div:nth-child(1)>div:nth-child(2)').should('be.visible').click()
        cy.wait(3000)
        cy.get('#react-select-2-option-1').click()
        cy.get('[textid="admin.appointment.assign"]').should('be.visible').should('have.text','Assign').click()

    })
    it('As a Admin the user can cancel the appointment after entering the cancellation reason by clicking on the cancel button',()=>{
        cy.get('[textid="cancel.appointment"]').should('have.text','Cancel Appointment').click()
        cy.get('.hidden > .mt-6 > form > .pt-2 > div.w-full > .mt-1 > .resize-y').should('be.visible').type('Provider not available')
        cy.get('.hidden>div:nth-child(2)>form>div:nth-child(2)>button').should('be.visible').should('have.text','Cancel Appointment').click()
        cy.wait(5000)
        cy.get(':nth-child(3) > .font-semibold > .text-sm').should('be.visible').should('have.text','cancelled')


    })
})