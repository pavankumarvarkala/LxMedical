///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
 import faker from 'faker'

 describe('Add/edit/delete family member testcases',()=>{
     it('As a Admin the should be navigated to the patient charts section by clicking on charts tab on patient profile of particular patient.',()=>{
        cy.login(cred.email,cred.password)
        cy.url().should('contain','/dashboard')
        //Click patient tab on the left side tray
        cy.get('.space-y-4 > :nth-child(2)').should('be.visible').should('have.text','Patients').click()
        cy.url().should('contain','/patients')
        //Add new patient custom command
        cy.AddPatient()
        cy.readFile('cypress/fixtures/provider.json').then((provider) => {
        //search added patient    
        cy.get('[type=search]').should('be.visible').type(provider.email.toLowerCase())
        //Checking email is present in the list
        cy.get('tr:nth-child(1)>td:nth-child(2)').should('be.visible').should('have.text',provider.email.toLowerCase())
        cy.wait(4000)
        })
        //Click on eye icon against patient 
        cy.get('tr:nth-child(1) > td:nth-child(7) > div > svg:nth-child(1) > path:nth-child(1)').scrollIntoView().should('be.visible').click()
        cy.url().should('contain','/address')
        //Click on charts tab in patient profile
        cy.get('nav.flex.flex-wrap>div:nth-child(2)>div').should('be.visible').should('contain','Charts').click()
        cy.url().should('contain','/charts')
    })

     it('At Charts page each label and field should have proper label and validations',()=>{
        cy.get('.font-medium > .inline').should('be.visible').should('have.text','Members')
        cy.get('.flex-wrap > .flex').should('be.visible').should('have.text','Add Another Member')
        cy.get(':nth-child(1) > .bg-white > .justify-between > .text-base').should('be.visible')
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(1)').should('be.visible')
        cy.get(':nth-child(1) > .bg-white > .justify-between > .flex > .font-medium').should('be.visible').should('have.text','self')
         cy.get('.h-screen>div:nth-child(2)>div:nth-child(1)>div>div:nth-child(2)>div:nth-child(1)>div').should('be.visible').should('have.text','Date of Birth')
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(1)>div>div:nth-child(2)>div:nth-child(2)>div').should('be.visible').should('have.text','Gender')
     
    })
  
    //Add Family Member
    it('As a Admin the user should able to get a pop up window of add family member by clicking on "add another member" button on charts page',()=>{
        cy.get('.flex-wrap > .flex').should('be.visible').should('have.text','Add Another Member').click()

 
    })

    it('At add family member page each label and field have proper lable and validations',()=>{
        cy.xpath('//div[1]/h3[1]/div[1]/div').should('be.visible').should('have.text','Add Minor')
        cy.get('div.hidden>h3>div>svg').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[1]/div[1]/label').should('be.visible').should('have.text','First Name')
        cy.xpath('//div[1]/form[1]/div[1]/div[1]/div[1]').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[1]/div[2]/label').should('be.visible').should('have.text','Last Name')
        cy.xpath('//div[1]/form[1]/div[1]/div[2]/div').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[2]/div[1]/label').should('be.visible').should('have.text','Date of Birth')
        cy.xpath('//div[1]/form[1]/div[2]/div[1]/div').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[2]/div[2]/div[1]').should('be.visible').should('have.text','Relationship')
        cy.xpath('//div[1]/form[1]/div[2]/div[2]/div[2]').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[3]/div/div[1]').should('be.visible').should('have.text','Gender')
        cy.xpath('//div[1]/form[1]/div[3]/div/div[2]').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[4]/button').should('be.visible').should('have.text','Add Minor').click()

        cy.xpath('//div[1]/form[1]/div[1]/div[1]/div[2]').should('be.visible').should('have.text','Required')

        cy.xpath('//div[1]/form[1]/div[1]/div[2]/div[2]').should('be.visible').should('have.text','Required')

        cy.xpath('//div[1]/form[1]/div[2]/div[1]/div[2]').should('be.visible').should('have.text','Required')

        cy.xpath('//div[1]/form[1]/div[2]/div[2]/div[3]').should('be.visible').should('have.text','Required')

        cy.xpath('//div[1]/form[1]/div[3]/div/div[3]').should('be.visible').should('have.text','Required')


    })
    it('By filling add family member form and cliking on add member button the family member should be added',()=>{
        cy.xpath('//div[1]/form[1]/div[1]/div[1]/div[1]').should('be.visible').type('shiva')

        cy.xpath('//div[1]/form[1]/div[1]/div[2]/div[1]').should('be.visible').type('Teja')

        cy.xpath('//div[1]/form[1]/div[2]/div[1]/div[1]').should('be.visible').click()
        cy.get('.react-datepicker__year-select').select('1991')
        cy.get('.react-datepicker__day--012').should('be.visible').click()

        cy.xpath('//div[1]/form[1]/div[2]/div[2]/div[2]').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(2)').click()

        cy.xpath('//div[1]/form[1]/div[3]/div/div[2]').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(2)').click()

        cy.xpath('//div[1]/form[1]/div[4]/button').should('be.visible').should('have.text','Add Minor').click()
        cy.contains('Family Member Added successfully')
    })

    it('The added family member should refelect under charts section',()=>{
        cy.xpath('//span[contains(text(),"shiva")]').should('be.visible').should('have.text','shiva teja')
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(2)>div:nth-child(2)>span').should('be.visible').should('have.text','Female')
     })
    //Edit Family Member
    it('As a Admin the user can edit the details of the family member by clicking on edit icon against the particular member',()=>{
        
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(2)').should('be.visible')
        cy.get(':nth-child(2) > .bg-white > .justify-between > .flex > :nth-child(3)').should('be.visible').click()

    })
    it('At Edit family member window each label and field have proper lable and validations',()=>{
        cy.xpath('//div[1]/h3[1]/div[1]/div').should('be.visible').should('have.text','Edit Family Member')
        cy.get('div.hidden>h3>div>svg').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[1]/div[1]/label').should('be.visible').should('have.text','First Name')
        cy.xpath('//div[1]/form[1]/div[1]/div[1]/div[1]').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[1]/div[2]/label').should('be.visible').should('have.text','Last Name')
        cy.xpath('//div[1]/form[1]/div[1]/div[2]/div').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[2]/div[1]/label').should('be.visible').should('have.text','Date of Birth')
        cy.xpath('//div[1]/form[1]/div[2]/div[1]/div').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[2]/div[2]/div[1]').should('be.visible').should('have.text','Relationship')
        cy.xpath('//div[1]/form[1]/div[2]/div[2]/div[2]').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[3]/div/div[1]').should('be.visible').should('have.text','Gender')
        cy.xpath('//div[1]/form[1]/div[3]/div/div[2]').should('be.visible')

        cy.xpath('//div[1]/form[1]/div[4]/button').should('be.visible').should('have.text','Save Details')

    })
    it('After editing the family member details the user can save details by clicking save details button',()=>{
        cy.xpath('//div[1]/form[1]/div[1]/div[1]/div[1]').should('be.visible').clear().type('Nanda')

        cy.xpath('//div[1]/form[1]/div[1]/div[2]/div[1]').should('be.visible').clear().type('Kishore')

        cy.xpath('//div[1]/form[1]/div[2]/div[1]/div[1]').should('be.visible').click()
        cy.get('.react-datepicker__day--010').scrollIntoView().should('be.visible').click()

        cy.xpath('//div[1]/form[1]/div[2]/div[2]/div[2]').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(1)').scrollIntoView().click()

        cy.xpath('//div[1]/form[1]/div[3]/div/div[2]').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(1)').scrollIntoView().click()

        cy.xpath('//div[1]/form[1]/div[4]/button').should('be.visible').should('have.text','Save Details').click()

        cy.contains('Family Member Updated Successfully')
        cy.wait(2000)
    })

    it('The edited details should be refelected under charts section',()=>{
        cy.get(':nth-child(2) > .bg-white > .justify-between > .text-base').should('be.visible').should('have.text','nanda kishore')
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(2)>div>div:nth-child(2)>div:nth-child(2)>span').should('be.visible').should('have.text','Male')
 
    })
    //Delete Family Member
    it('As a Admin the user can able to delete a family member by clicking on delete icon on particular member',()=>{
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(2)').should('be.visible')
        cy.get(':nth-child(2) > .bg-white > .justify-between > .flex > :nth-child(2)').should('be.visible').click()

    })

    it('At delete member confirmation window each label and field have proper lable and validations',()=>{
        cy.xpath('//div[1]/h3/div/div').should('be.visible').should('have.text','Confirmation')
        cy.get('div.hidden>h3>div>svg').should('be.visible')

        cy.xpath('//div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/span[1]').should('be.visible').should('have.text','nanda kishore')

        cy.xpath('//div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div').should('be.visible').should('have.text','son')

        cy.xpath('//div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div').should('be.visible').should('have.text','Date of Birth')
        cy.xpath('//div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div').should('be.visible').should('have.text','Gender')

        cy.xpath('//div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/span').should('be.visible').should('have.text','Male')
        cy.xpath('//div[1]/div[2]/div[1]/div[1]/div[1]/div[2]').should('be.visible').should('have.text','Are you sure, you want to remove this member?')

        cy.xpath('//div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/button').should('be.visible').should('have.text','Remove')

    })

    it('By clicking on remove button on confirmation window the family member should be deleted',()=>{
        cy.xpath('//div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/button').should('be.visible').should('have.text','Remove').click()
        cy.contains('Family Member Deleted Successfully')
  
    })

    it('The deleted member should not reflect under charts section',()=>{
        cy.get('.flex-wrap > .font-medium').should('be.visible').should('have.text','1 Members')
        cy.logout()        
    })


})