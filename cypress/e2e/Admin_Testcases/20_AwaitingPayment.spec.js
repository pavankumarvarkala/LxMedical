///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')

describe('Awaiting Payment Appointment Details Test cases',()=>{

    it('As a Admin the user should be navigated to the Appointment Details page of Awaiting Payment appointment by clicking on the eye icon against that particular appointment',()=>{
        cy.login(cred.email,cred.password)
        cy.url().should('contain','/dashboard')
        //Click patient tab on the left side tray

        cy.xpath('//nav/div[4]/div[2]').should('be.visible').should('have.text','Appointments').click()
        cy.url().should('contain','/appointments')
        cy.xpath('//div[contains(text(),"Ad")]').should('be.visible').should('have.text','Add Filter').click()
        cy.wait(3000)
        cy.xpath('//div[contains(text(),"awaiting pa")]').should('be.visible').should('have.text','awaiting payment').click()
        cy.wait(4000)
        cy.xpath('//tr[1]/td[8]/div[1]').scrollIntoView().should('be.visible').click()
        cy.wait(4000)
        cy.xpath('//span[contains(text(),"awaiting pa")]').should('be.visible').should('contain','awaiting payment')


    })
    it('At "Appointment details" page each label and field should have proper label and validations',()=>{
        cy.xpath('//div[contains(text(),"Appointment D")]').should('be.visible').should('have.text','Appointment Details')
        cy.xpath('//div[2]/div/div[4]/div[1]').should('be.visible')


        cy.xpath('//div[contains(text(),"Appointment I")]').should('have.text','Appointment ID')
        cy.xpath('//div[contains(text(),"Requested F")]').should('be.visible').should('have.text','Requested For')
        cy.xpath('//div[contains(text(),"St")]').should('be.visible').should('have.text','Status')

        cy.xpath('//div[contains(text(),"Service A")]').should('be.visible').should('have.text','Service Address')
        cy.xpath('//div[contains(text(),"Sc")]').should('be.visible').should('have.text','Scheduled On')
        cy.xpath('//div[5]/div[4]/div[1]').should('be.visible').should('have.text','Patients')

        cy.xpath('//div[contains(text(),"Services R")]').should('be.visible').should('have.text','Services Requested')
        cy.xpath('//div[contains(text(),"Provider D")]').should('be.visible').should('have.text','Provider Details')
        cy.xpath('//div[6]/div[2]/div/div').should('be.visible')

        cy.xpath('//div[contains(text(),"Payment")]').should('be.visible').should('have.text','Payment Details')
        cy.xpath('//div[contains(text(),"Tota")]').should('be.visible').should('have.text','Total Payable')

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
        cy.xpath('//div[contains(text(),"Services R")]').should('have.text','Services Requested')

    })

    it('As a Admin the user can Add "Comment for Provider" By clicking on the "Edit" icon against it.',()=>{
        cy.xpath('//div[contains(text(),"Comment for Provider")]').scrollIntoView().should('be.visible').should('contain','Comment for Provider')

        cy.get('div.flex.items-center.justify-between> svg').scrollIntoView().should('be.visible').click()

        cy.xpath('//div[@class="mt-1.5 relative"]/textarea').scrollIntoView().should('be.visible').clear().type('test1')

        cy.xpath('//div[@class="mt-1.5 relative"]/div/button[2]').scrollIntoView().should('be.visible').should('have.text','Cancel')

        cy.xpath('//div[contains(text(),"Ed")]').scrollIntoView().should('be.visible').should('have.text','Edit').click()
        cy.wait(5000)

        cy.xpath('//div[contains(text(),"test1")]').scrollIntoView().should('be.visible').should('have.text','test1')

        cy.get('div.flex.items-center.justify-between> svg').scrollIntoView().should('be.visible').click()

        cy.xpath('//div[@class="mt-1.5 relative"]/textarea').scrollIntoView().should('be.visible').clear().type('Sample1')

        cy.xpath('//div[contains(text(),"Ed")]').scrollIntoView().should('be.visible').should('have.text','Edit').click()
        cy.wait(5000)

        cy.xpath('//div[contains(text(),"Sample1")]').scrollIntoView().should('be.visible').should('have.text','Sample1')

    })

    it('The Appointment scheduled date and time should be displayed',()=>{
        cy.xpath('//div[contains(text(),"Sc")]').should('have.text','Scheduled On')

        cy.xpath('//div[3]/div[1]/span').should('be.visible')
        cy.wait(5000)
    })
    it('As a Admin the user should be navigated to the Profile details page of provider by clicking on name card of the provider',()=>{
        cy.xpath('//div[6]/div[2]/div/div').should('be.visible').click({force:true})
        cy.wait(5000)
        cy.url().should('contain','/providers')
        cy.xpath('//div[contains(text(),"Provider D")]').scrollIntoView().should('be.visible').should('have.text','Provider Details')
        cy.get('.h-6 > path').scrollIntoView().should('be.visible').click({force:true})
        cy.wait(5000)

        })
    it('As a Admin the user can chat with provider by clicking on chat icon against the provider',()=>{
        cy.xpath('//div[6]/div[2]/div/div/div[2]/img').should('be.visible').click({force:true})
        cy.wait(5000)
        cy.url().should('contain','/chat')

        cy.xpath('//div[2]/div[1]/div[2]/div[1]/div[1]').should('be.visible').should('have.text','Chat')
        cy.get('div.flex.flex-wrap>.h-6').scrollIntoView().should('be.visible').click({force:true})
        cy.wait(5000)

        cy.logout()
 
        })
        
})