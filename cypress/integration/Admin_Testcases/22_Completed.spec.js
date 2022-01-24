///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')

describe('Accepted Appointment Details Test cases',()=>{

    it('As a Admin the user should be navigated to the Appointment Details page of Accepted appointment by clicking on the eye icon against that appointment',()=>{
        cy.visit('https://staging.rch.build-release.com/admin')
        cy.url().should('eq',cred.qaUrl)
        cy.get(':nth-child(1) > .mt-1 > .appearance-none').type(cred.email)
        cy.get(':nth-child(2) > .mt-1 > .appearance-none').type(cred.password)
        cy.get('.mt-3 > .flex').click()
        cy.url().should('contain','/dashboard')
        cy.get('.space-y-4 > :nth-child(2)').should('be.visible').should('have.text','Patients').click()
        cy.url().should('contain','/patients')
        cy.get('.bg-white > .w-full').type('pvnkumar80@gmail.com')
        cy.get('.flex > .text-xs').should('be.visible').should('have.text','Book').click()
        cy.url().should('contain','/book_appointment')
        cy.get('.my-4>div:nth-child(2)>div>form>div>div:nth-child(1)>div:nth-child(1)>div>div').click()
        cy.get('.react-datepicker>div>div:nth-child(2)>div:nth-child(5)>div.react-datepicker__day.react-datepicker__day--030').click()
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
        cy.get('.border-b.py-3 > .flex').should('be.visible').should('have.text','Assign Provider')
        cy.get(':nth-child(1) > .text-gray-500').should('be.visible').should('have.text','Appointment ID')
        cy.get('.flex.capitalize > .text-gray-500').should('be.visible').should('have.text','Requested For')
        cy.get(':nth-child(3) > .text-gray-500').should('be.visible').should('have.text','Status')
        cy.get('.mx-4 > :nth-child(3) > :nth-child(1)').should('be.visible').should('have.text','Patients')
        cy.get('.py-4.capitalize > :nth-child(1)').should('be.visible').should('have.text','Services Requested')
        cy.get('.min-h-screen>div:nth-child(2)>div:nth-child(5)>button').should('be.visible').should('have.text','Cancel Appointment')

    })
    it('The unique appointment id should be displayed',()=>{
        cy.get(':nth-child(1) > .text-gray-500').should('be.visible').should('have.text','Appointment ID')

    })
    it('The date requested by the patient should be displayed',()=>{
        cy.get('.flex.capitalize > .text-gray-500').should('be.visible').should('have.text','Requested For')

    })
    it('As a Admin the user should be navigated to the medical history page of particular patient by clicking on the name card of that particular patient',()=>{
        cy.get('.justify-between > .flex > .w-6').should('be.visible').click()
        cy.get('.py-8 > .h-6').should('be.visible').click()

    })
    it('The list of services requested by the patient should be displayed',()=>{
        cy.get('.py-4.capitalize > :nth-child(1)').should('be.visible').should('have.text','Services Requested')

    })
    it('As a Admin the user can assign a provider to the Appointment By clicking on the "Assign Provider" button',()=>{
        cy.get('.border-b.py-3 > .flex').should('be.visible').should('have.text','Assign Provider').click()
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
        cy.get('.hidden>div>form>div:nth-child(3)>label').should('be.visible').should('have.text','Add Comment For Provider')
        cy.get('.hidden>div>form>div:nth-child(3)>div').should('be.visible')
        cy.get('.hidden>div>form>div:nth-child(4)>button').should('be.visible').should('have.text','Assign')

        })
        it('As a Admin the user can add comments for the provider at the time of assigning the provider',()=>{
            cy.get('.hidden>div>form>div:nth-child(3)>div').should('be.visible').type('Priority customer')
 
        })
        it('After filling Assign provider form and clicking on "Assign" button the provider should be assigned and status should be changed to provider assigned',()=>{
            cy.get('.hidden > .justify-between > .w-6').should('be.visible').click().select('Jack Phillips')
            cy.get('.hidden>div>form>div:nth-child(2)>div:nth-child(1)>div').should('be.visible').click()
            cy.get(':nth-child(5) > .react-datepicker__day--030').should('be.visible').click()
            cy.get('.hidden>div>form>div:nth-child(2)>div:nth-child(2)>div').should('be.visible').click()
            cy.get('.rc-time-picker-panel-select-active > ul > :nth-child(6)').should('be.visible').click()
            cy.get('.hidden>div>form>div:nth-child(4)>button').should('be.visible').should('have.text','Assign').click()
            cy.wait(5000)
            cy.get(':nth-child(3) > .font-semibold > .text-sm').should('be.visible').should('have.text','provider assigned')

        })
        
    it('As a Admin the user can cancel the appointment after entering the cancellation reason by clicking on the cancel button',()=>{
        cy.get('.min-h-screen>div:nth-child(2)>div:nth-child(5)>button').should('have.text','Cancel Appointment').click()
        cy.get('.hidden > .mt-6 > form > .pt-2 > div.w-full > .mt-1 > .resize-y').should('be.visible').type('Provider not available')
        cy.get('.hidden>div:nth-child(2)>form>div:nth-child(2)>button').should('be.visible').should('have.text','Cancel Appointment').click()
        cy.wait(5000)
        cy.get(':nth-child(3) > .font-semibold > .text-sm').should('be.visible').should('have.text','cancelled')


    })
})