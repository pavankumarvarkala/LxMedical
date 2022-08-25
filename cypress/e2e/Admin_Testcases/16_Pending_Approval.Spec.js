///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
import faker from 'faker'

describe('Pending Approval Appointment Details Test cases',()=>{

    it('As a Admin the user should be navigated to the Appointment Details page of "Pending Approval" appointment by clicking on the eye icon against that appointment',()=>{
        
        cy.login()
        cy.url().should('contain','/dashboard') 
        cy.xpath('//nav/div[2]/div[2]').should('be.visible').should('have.text','Patients').click()

        cy.url().should('contain','/patients')
        cy.AddPatient()

        cy.readFile('cypress/fixtures/provider.json').then((provider) => {
        cy.xpath('//input[@type="search"]').should('be.visible').type(provider.email.toLowerCase())
        cy.xpath('//tr[1]/td[2]/div/p').should('be.visible').should('have.text',provider.email.toLowerCase())
        cy.wait(4000)
        })

        cy.bookappointment()
        cy.xpath('//input[@type="search"]').should('be.visible').clear()
        cy.wait(4000)

        cy.xpath('//nav/div[4]/div[2]').should('be.visible').should('have.text','Appointments').click()
        cy.url().should('contain','/appointments')
        cy.xpath('//div[contains(text(),"Ad")]').should('be.visible').should('have.text','Add Filter').click()

        cy.wait(3000)
        cy.xpath('//div[contains(text(),"pe")]').should('be.visible').should('have.text','pending approval').click()
        cy.wait(4000)

        cy.xpath('//tr[1]/td[4]/div/p').should('be.visible').should('have.text','pending approval')
        cy.xpath('//tr[1]/td[8]/div[1]/*[1]').scrollIntoView().should('be.visible').click()
        cy.wait(4000)
        cy.xpath('//span[contains(text(),"pendi")]').should('be.visible').should('have.text','pending approval')
        
    })
    it('At "Appointment details" page each label and field should have proper label and validations',()=>{
        cy.xpath('//div[contains(text(),"Appointment D")]').should('be.visible').should('have.text','Appointment Details')
        cy.xpath('//div[2]/div/div[4]/div[1]').should('be.visible')
        cy.xpath('//div[5]/div[1]/div[1]').should('be.visible')

        cy.xpath('//div[contains(text(),"Appointment I")]').should('have.text','Appointment ID')
        cy.xpath('//div[contains(text(),"Acc")]').should('be.visible').should('have.text','Accept')
        cy.xpath('//div[contains(text(),"Requested F")]').should('be.visible').should('have.text','Requested For')

        cy.xpath('//div[contains(text(),"St")]').should('be.visible').should('have.text','Status')
        cy.xpath('//div[contains(text(),"Service A")]').should('be.visible').should('have.text','Service Address')
        cy.xpath('//div[5]/div[4]/div[1]').should('be.visible').should('have.text','Patients')

        cy.xpath('//div[contains(text(),"Services R")]').should('be.visible').should('have.text','Services Requested')
        cy.xpath('//button[@textid="cancel.appointment"]').should('have.text','Cancel Appointment')

    })
    it('The unique appointment id should be displayed',()=>{
        cy.xpath('//div[contains(text(),"Appointment I")]').should('have.text','Appointment ID')

    })
    it('The date requested by the patient should be displayed',()=>{
        cy.xpath('//div[contains(text(),"Requested F")]').should('be.visible').should('have.text','Requested For')

    })

    it('The Service Address where the patient requested the service should be displayed',()=>{
        cy.xpath('//div[contains(text(),"Service A")]').should('be.visible').should('have.text','Service Address')

    })

    it('As a Admin the user should be navigated to the medical history page of particular patient by clicking on the name card of that particular patient',()=>{
        cy.xpath('//div[4]/div[2]/div[1]/div[1]/div[1]/div[1]/*[2]').should('be.visible').click()
        cy.wait(4000)
        cy.url().should('contain','/medical_history')

        cy.xpath('//div[2]/div/nav/div[1]/div').should('be.visible').should('have.text','Medical History')
        cy.get('.h-6 > path').scrollIntoView().should('be.visible').click()
        cy.wait(4000)

        cy.url().should('contain','/appointments')


    })
    it('The list of services requested by the patient should be displayed',()=>{
        cy.xpath('//div[contains(text(),"Services R")]').should('be.visible').should('have.text','Services Requested')

    })
    it('As a Admin the user can accept the Appointment By clicking on the "Accept" button',()=>{
        cy.xpath('//div[contains(text(),"Acc")]').should('be.visible').should('have.text','Accept').click()
        cy.wait(5000)
        cy.xpath('//span[contains(text(),"awa")]').should('be.visible').should('have.text','awaiting time')

    })


    it('As a Admin the user can Add "Comment for Provider" By clicking on the "Edit" icon against it.',()=>{
        cy.xpath('//div[contains(text(),"Comment for Provider")]').should('be.visible').should('contain','Comment for Provider')

        cy.get('div.flex.items-center.justify-between> svg').should('be.visible').click()

        cy.xpath('//div[@class="mt-1.5 relative"]/textarea').should('be.visible').clear().type('test1')

        cy.xpath('//div[@class="mt-1.5 relative"]/div/button[2]').should('be.visible').should('have.text','Cancel')

        cy.xpath('//div[contains(text(),"Edit")]').should('be.visible').should('have.text','Edit').click()
        cy.wait(5000)

        cy.xpath('//div[contains(text(),"test1")]').should('be.visible').should('have.text','test1')

        cy.get('div.flex.items-center.justify-between> svg').should('be.visible').click()

        cy.xpath('//div[@class="mt-1.5 relative"]/textarea').should('be.visible').clear().type('Sample1')

        cy.xpath('//div[contains(text(),"Edit")]').should('be.visible').should('have.text','Edit').click()
        cy.wait(5000)

        cy.xpath('//div[contains(text(),"Sample1")]').should('be.visible').should('have.text','Sample1')

    })

    it('As a Admin the user can cancel the appointment after entering the cancellation reason by clicking on the cancel button',()=>{
        cy.xpath('//button[@textid="cancel.appointment"]').scrollIntoView().should('have.text','Cancel Appointment').click({force:true})
        cy.wait(3000)
        cy.get('div.hidden>h3>div>div').should('be.visible').should('have.text','Confirmation')
        cy.get('div.hidden>h3>div>svg').should('be.visible')

        cy.get('div.hidden>div').should('be.visible').should('have.text','Are you sure, want to cancel this appointment.')
        cy.xpath('//div[1]/form[1]/div[1]/div[1]/label[1]/div[1]').should('be.visible').should('have.text','Reason For Cancellation')
        cy.xpath('//div[1]/form[1]/div[1]/div[1]/div[1]').should('be.visible')
        cy.xpath('//div[1]/form[1]/div[1]/div[1]/div[1]').should('be.visible').type('Provider not available')

        cy.xpath('//div[1]/form[1]/div[2]/button').should('be.visible').should('have.text','Cancel Appointment').click()
        cy.wait(5000)
        cy.xpath('//span[contains(text(),"can")]').should('be.visible').should('have.text','cancelled') 
        cy.logout()

    })


})