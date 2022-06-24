///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')

describe('Cancelled Appointment Details Test cases',()=>{

    it('As a Admin the user should be navigated to the Appointment Details page of "Cancelled" appointment by clicking on the eye icon against that appointment',()=>{
        cy.login(cred.email,cred.password)
        cy.url().should('contain','/dashboard')
        //Click patient tab on the left side tray

        cy.xpath('//nav/div[4]/div[2]').should('be.visible').should('have.text','Appointments').click()
        cy.url().should('contain','/appointments')
        cy.xpath('//div[contains(text(),"Ad")]').should('be.visible').should('have.text','Add Filter').click()
        cy.wait(3000)
        cy.xpath('//div[contains(text(),"cancelled")]').should('be.visible').should('have.text','cancelled').click()
        cy.wait(4000)
        cy.xpath('//tr[1]/td[8]/div[1]').scrollIntoView().should('be.visible').click()
        cy.wait(4000)
        cy.xpath('//span[contains(text(),"cancelled")]').should('be.visible').should('contain','cancelled')

    })
    it('At "Appointment details" page each label and field should have proper label and validations',()=>{
        cy.xpath('//div[contains(text(),"Appointment D")]').should('be.visible').should('have.text','Appointment Details')
        cy.xpath('//div[1]/div[2]/div[1]/div[1]/div[1]/*[1]').should('be.visible')
        cy.xpath('//*[@id="root"]/div[2]/div/div[2]/div/div[2]/div[1]/div').should('be.visible')

        cy.xpath('//button[@textid="reactivate.appointment"]').should('be.visible').should('have.text','Re-activate')
        cy.xpath('//div[contains(text(),"Requested F")]').should('be.visible').should('have.text','Requested For')

        cy.xpath('//div[contains(text(),"St")]').should('be.visible').should('have.text','Status')
        cy.xpath('//div[contains(text(),"Service A")]').should('be.visible').should('have.text','Service Address')
        cy.xpath('//div[contains(text(),"Cancellation")]').should('be.visible').should('have.text','Cancellation Reason')

        cy.xpath('//div[2]/div[5]/div[1]').should('be.visible').should('have.text','Patients')
        cy.xpath('//div[contains(text(),"Services R")]').should('be.visible').should('have.text','Services Requested')
        
 
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
        cy.xpath('//div[5]/div[2]/div[1]/div[1]/div[1]/div[1]/*[2]').should('be.visible').click()
        cy.wait(4000)
        cy.url().should('contain','/medical_history')

        cy.xpath('//div[2]/div/nav/div[1]/div').should('be.visible').should('have.text','Medical History')
        cy.xpath('//div[@id="root"]/div[2]/div[1]/div[2]/div[1]/div[1]/*[1]').scrollIntoView().should('be.visible').click()
        cy.wait(4000)

        cy.url().should('contain','/appointments')


    })
    it('The list of services requested by the patient should be displayed',()=>{
        cy.xpath('//div[contains(text(),"Services R")]').should('be.visible').should('have.text','Services Requested')

    })
    it('The cancellation reason added by admin/patient should be reflected',()=>{
        cy.xpath('//div[contains(text(),"Cancellation")]').should('be.visible').should('have.text','Cancellation Reason')

    })
    it('As a Admin the user can Re-Activate the appointment by clicking on the "Re-Activate" button.',()=>{
        cy.xpath('//button[@textid="reactivate.appointment"]').should('be.visible').should('have.text','Re-activate').click()
        // cy.contains('Appointment Reactivated successfully')
        // cy.wait(3000)
        // cy.get(':nth-child(3) > .font-semibold > .text-sm').should('be.visible').should('contain','accepted')

        

    })
        
})