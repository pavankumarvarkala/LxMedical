///<reference types='cypress'/>

const cred=require('../../fixtures/cred.json')
 import faker from 'faker'

 describe('Medical history module testcases',()=>{
 
    it('As a Admin the user should be navigated to the medical history page by clicking on the particular member',()=>{
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
        //Click on Add Another member button
        cy.get('.flex-wrap > .flex').should('be.visible').should('have.text','Add Another Member').click()
        cy.addfamilymembercharts()
        //Click on the name card of family member added
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(2)').should('be.visible').click()
        cy.url().should('contain','/medical_history')
    })

    it('At medical history page each label and field should have proper label and validations',()=>{
        //validating all fields and labels
        cy.get('.flex > .border-primary > div').should('be.visible').should('contain','Medical History')
        cy.get('.border-transparent > div').should('be.visible').should('contain','Reports')
        cy.xpath('//div[contains(text(),"Past")]').should('be.visible').should('contain','Past Medical History')
        cy.xpath('//div[contains(text(),"Family")]').should('be.visible').should('contain','Add Family History')
        cy.xpath('//div[contains(text(),"Aller")]').should('be.visible').should('contain','Allergies')
        cy.xpath('//div[contains(text(),"Curr")]').should('be.visible').should('contain','Current Medications')
        cy.xpath('//div[contains(text(),"Sur")]').should('be.visible').should('contain','Surgical History')
    })
    //Past medical history
    it('As a Admin the user should be navigated to the add past medical history page by clicking on "past medical history" tab',()=>{
        cy.xpath('//div[contains(text(),"Past")]').should('be.visible').should('contain','Past Medical History').click()
        cy.url().should('contain','/add_medical_history')
         
    })
    
    it('At "past medical history" page each label and field should have proper label and validations',()=>{
        cy.xpath('//div[contains(text(),"Pas")]').should('be.visible').should('contain','Past Medical History')
        cy.get('.flex.border-b > .cursor-pointer').should('be.visible')
        cy.xpath('//div[contains(text(),"Sele")]').should('be.visible').should('have.text','Select your Illness')

        cy.xpath('//div[contains(text(),"None")]').should('be.visible').should('contain','None')
        cy.xpath('//div[contains(text(),"Hyp")]').should('be.visible').should('contain','Hypertension')
        cy.xpath('//div[contains(text(),"Diabe")]').should('be.visible').should('contain','Diabetes')
        
        cy.xpath('//div[contains(text(),"Chole")]').should('be.visible').should('contain','High Cholestrol')
        cy.xpath('//div[contains(text(),"Asth")]').should('be.visible').should('contain','Asthama')
        cy.xpath('//div[contains(text(),"COPD")]').should('be.visible').should('contain','COPD')
        
        cy.xpath('//div[contains(text(),"Heart")]').should('be.visible').should('contain','Heart Disease')
        cy.xpath('//div[contains(text(),"Kidney D")]').should('be.visible').should('contain','Kidney Disease')
        cy.xpath('//div[contains(text(),"Kidney S")]').should('be.visible').should('contain','Kidney Stones')
        
        cy.xpath('//div[contains(text(),"G6PD")]').should('be.visible').should('contain','G6PD')
        cy.xpath('//div[contains(text(),"Toba")]').should('be.visible').should('contain','Tobacco Use')
        cy.xpath('//div[contains(text(),"Canc")]').should('be.visible').should('contain','Cancer')

        cy.xpath('//input[@name="None"]').should('be.visible').should('not.be.checked')
        cy.xpath('//input[@name="Hypertension"]').should('be.visible').should('not.be.checked')
        cy.xpath('//input[@name="Diabetes"]').should('be.visible').should('not.be.checked')

        cy.xpath('//input[@name="High Cholestrol"]').should('be.visible').should('not.be.checked')
        cy.xpath('//input[@name="Asthama"]').should('be.visible').should('not.be.checked')
        cy.xpath('//input[@name="COPD"]').should('be.visible').should('not.be.checked')

        cy.xpath('//input[@name="Heart Disease"]').should('be.visible').should('not.be.checked')
        cy.xpath('//input[@name="Kidney Disease"]').should('be.visible').should('not.be.checked')
        cy.xpath('//input[@name="Kidney Stones"]').should('be.visible').should('not.be.checked')

        cy.xpath('//input[@name="G6PD"]').should('be.visible').should('not.be.checked')
        cy.xpath('//input[@name="Tobacco Use"]').should('be.visible').should('not.be.checked')
        cy.xpath('//input[@name="Cancer"]').should('be.visible').should('not.be.checked')

        cy.xpath('//div[contains(text(),"Add other")]').should('be.visible').should('contain','Add other Illness...')
        cy.xpath('//textarea[@name="others"]').should('be.visible')
        cy.xpath('//button[@textid="save.and.exit"]').should('be.visible').should('have.text','Save & Exit').click()
        
        cy.contains('At least one field is required')
        cy.xpath('//button[@textid="save.and.continue"]').should('be.visible').should('have.text','Save & Continue').click()
        cy.contains('At least one field is required')

               
    })
    it('If the user selects "None" checkbox, then all other checkboxes should be unchecked(if they are checked) and disabled.".',()=>{
        cy.xpath('//input[@name="Hypertension"]').should('be.visible').check()
        cy.xpath('//input[@name="Diabetes"]').should('be.visible').check()
        cy.xpath('//input[@name="High Cholestrol"]').should('be.visible').check()
        cy.wait(2000)
        
        cy.xpath('//input[@name="None"]').should('be.visible').check()
        cy.wait(2000)

        cy.xpath('//input[@name="Hypertension"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="Diabetes"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="High Cholestrol"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="Asthama"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="COPD"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="Heart Disease"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="Kidney Disease"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="Kidney Stones"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="G6PD"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="Tobacco Use"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="Cancer"]').should('be.visible').should('be.disabled')
        cy.wait(2000)
    })

    it('After adding "Past Medical history" and clicking on "Save&Exit" button,data should be saved and user should be navigated back to "Medical History" page.',()=>{
        
        cy.xpath('//input[@name="None"]').should('be.visible').uncheck()
        cy.wait(2000)

        cy.xpath('//input[@name="Hypertension"]').should('be.visible').check()
        cy.xpath('//input[@name="Diabetes"]').should('be.visible').check()
        cy.xpath('//input[@name="High Cholestrol"]').should('be.visible').check()
        cy.xpath('//input[@name="Asthama"]').should('be.visible').check()
        cy.xpath('//input[@name="COPD"]').should('be.visible').check()
        cy.xpath('//input[@name="Heart Disease"]').should('be.visible').check()
        cy.xpath('//textarea[@name="others"]').should('be.visible').type('Hyperhydrosis,Hypertension')
        cy.xpath('//button[@textid="save.and.exit"]').should('be.visible').should('have.text','Save & Exit').click()
        cy.contains('Medical History Added successfully')
        cy.wait(4000)

    })

    
    it('The saved information should reflect under medical history page instantly',()=>{
        cy.xpath('//span[contains(text(),"Hypertension")]').should('contain','Hypertension')
        cy.xpath('//span[contains(text(),"Diabetes")]').should('contain','Diabetes')
        cy.xpath('//span[contains(text(),"High")]').should('be.visible').should('contain','High Cholestrol')
        cy.xpath('//span[contains(text(),"Asth")]').should('be.visible').should('contain','Asthama')
        cy.xpath('//span[contains(text(),"COPD")]').should('be.visible').should('contain','COPD')
        cy.xpath('//span[contains(text(),"Hear")]').should('be.visible').should('contain','Heart Disease')
        cy.xpath('//li[contains(text(),"Hyperhydrosis")]').should('be.visible').should('contain','Hyperhydrosis')  
        cy.xpath('//li[contains(text(),"Hypertension")]').should('be.visible').should('contain','Hypertension')  

    })


    it('As a Admin the user should be navigated to the "past medical history" edit page by clicking on the edit icon on the "past medical history" tab',()=>{
        cy.xpath('//div[contains(text(),"Ed")]').should('contain','Edit').click()
        cy.wait(4000)
        cy.url().should('contain','/edit_medical_history')
         
     })
     it('After editing the past medical history and clicking on "Save&Continue" button user should be navigated to the "Family History" page.',()=>{
        cy.xpath('//textarea[@name="others"]').should('be.visible').clear().type('Tuberculosis,hernia')
        cy.xpath('//input[@name="Hypertension"]').should('be.visible').uncheck()
        cy.xpath('//input[@name="Diabetes"]').should('be.visible').uncheck()
        cy.xpath('//input[@name="High Cholestrol"]').should('be.visible').uncheck()
        cy.xpath('//button[@textid="save.and.continue"]').should('be.visible').should('have.text','Save & Continue').click()
        cy.contains('Medical History Updated Successfully')
        cy.wait(4000)
        cy.xpath('//div[contains(text(),"Family")]').should('be.visible').should('contain','Family History') 
        

     })



    //Family History
    it('At "family history" page each label and field should have proper label and validationsb',()=>{
        cy.xpath('//div[contains(text(),"Family")]').should('be.visible').should('contain','Family History')
        cy.get('.flex.border-b > .cursor-pointer').should('be.visible')
        cy.xpath('//div[contains(text(),"Sele")]').should('be.visible').should('have.text','Select Illness')

        cy.xpath('//div[contains(text(),"None")]').should('be.visible').should('contain','None')
        cy.xpath('//div[contains(text(),"Hyp")]').should('be.visible').should('contain','Hypertension')
        cy.xpath('//div[contains(text(),"Diabe")]').should('be.visible').should('contain','Diabetes')
        
        cy.xpath('//div[contains(text(),"Chole")]').should('be.visible').should('contain','High Cholestrol')
        cy.xpath('//div[contains(text(),"Asth")]').should('be.visible').should('contain','Asthama')
        cy.xpath('//div[contains(text(),"COPD")]').should('be.visible').should('contain','COPD')
        
        cy.xpath('//div[contains(text(),"Heart")]').should('be.visible').should('contain','Heart Disease')
        cy.xpath('//div[contains(text(),"Kidney D")]').should('be.visible').should('contain','Kidney Disease')
        cy.xpath('//div[contains(text(),"Kidney S")]').should('be.visible').should('contain','Kidney Stones')
        
        cy.xpath('//div[contains(text(),"G6PD")]').should('be.visible').should('contain','G6PD')
        cy.xpath('//div[contains(text(),"Toba")]').should('be.visible').should('contain','Tobacco Use')
        cy.xpath('//div[contains(text(),"Canc")]').should('be.visible').should('contain','Cancer')

        cy.xpath('//input[@name="None"]').should('be.visible').should('not.be.checked')
        cy.xpath('//input[@name="Hypertension"]').should('be.visible').should('not.be.checked')
        cy.xpath('//input[@name="Diabetes"]').should('be.visible').should('not.be.checked')

        cy.xpath('//input[@name="High Cholestrol"]').should('be.visible').should('not.be.checked')
        cy.xpath('//input[@name="Asthama"]').should('be.visible').should('not.be.checked')
        cy.xpath('//input[@name="COPD"]').should('be.visible').should('not.be.checked')

        cy.xpath('//input[@name="Heart Disease"]').should('be.visible').should('not.be.checked')
        cy.xpath('//input[@name="Kidney Disease"]').should('be.visible').should('not.be.checked')
        cy.xpath('//input[@name="Kidney Stones"]').should('be.visible').should('not.be.checked')

        cy.xpath('//input[@name="G6PD"]').should('be.visible').should('not.be.checked')
        cy.xpath('//input[@name="Tobacco Use"]').should('be.visible').should('not.be.checked')
        cy.xpath('//input[@name="Cancer"]').should('be.visible').should('not.be.checked')

        cy.xpath('//div[contains(text(),"Add other")]').should('be.visible').should('contain','Add other Illness...')
        cy.xpath('//textarea[@name="others"]').should('be.visible')
        cy.xpath('//button[@textid="save.and.exit"]').should('be.visible').should('have.text','Save & Exit').click()
        
        cy.contains('At least one field is required')
        cy.xpath('//button[@textid="save.and.continue"]').should('be.visible').should('have.text','Save & Continue').click()
        cy.contains('At least one field is required') 
    })
    it('If the user selects "None" checkbox, then all other checkboxes should be unchecked(if they are checked) and disabled.".',()=>{
        cy.xpath('//input[@name="Hypertension"]').should('be.visible').check()
        cy.xpath('//input[@name="Diabetes"]').should('be.visible').check()
        cy.xpath('//input[@name="High Cholestrol"]').should('be.visible').check()
        cy.wait(2000)
        
        cy.xpath('//input[@name="None"]').should('be.visible').check()
        cy.wait(2000)

        cy.xpath('//input[@name="Hypertension"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="Diabetes"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="High Cholestrol"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="Asthama"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="COPD"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="Heart Disease"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="Kidney Disease"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="Kidney Stones"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="G6PD"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="Tobacco Use"]').should('be.visible').should('be.disabled')
        cy.xpath('//input[@name="Cancer"]').should('be.visible').should('be.disabled')
        cy.xpath('//textarea[@name="others"]').should('be.visible').should('be.disabled')

        cy.wait(2000)
    })

    it('After adding "Family History" and clicking on "Save&Exit" button,data should be saved and user should be navigated back to "Medical History" page.',()=>{
        
        cy.xpath('//input[@name="None"]').should('be.visible').uncheck()
        cy.wait(2000)

        cy.xpath('//input[@name="Kidney Disease"]').should('be.visible').check()
        cy.xpath('//input[@name="Kidney Stones"]').should('be.visible').check()
        cy.xpath('//input[@name="G6PD"]').should('be.visible').check()

        cy.xpath('//input[@name="Tobacco Use"]').should('be.visible').check()
        cy.xpath('//input[@name="Cancer"]').should('be.visible').check()
        cy.xpath('//textarea[@name="others"]').should('be.visible').type('Hyperhydrosis,Hypertension')

        cy.xpath('//button[@textid="save.and.exit"]').should('be.visible').should('have.text','Save & Exit').click()
        cy.contains('Medical History Added successfully')
        cy.wait(4000)
    })

    
    it('The saved information should reflect under medical history page instantly',()=>{
        
        cy.xpath('//span[contains(text(),"Kidney Dis")]').should('be.visible').should('contain','Kidney Disease')
        cy.xpath('//span[contains(text(),"Kidney S")]').should('be.visible').should('contain','Kidney Stones')
        cy.xpath('//span[contains(text(),"G6PD")]').should('be.visible').should('contain','G6PD')

        cy.xpath('//span[contains(text(),"Can")]').should('be.visible').should('contain','Cancer')
        cy.xpath('//span[contains(text(),"Toba")]').should('be.visible').should('contain','Tobacco Use')
        cy.xpath('//li[contains(text(),"Hyperhydrosis")]').should('be.visible').should('contain','Hyperhydrosis')

        cy.xpath('//li[contains(text(),"Hypertension")]').should('be.visible').should('contain','Hypertension')  

    })

    it('As a Admin the user should be navigated to the "Family history" edit page by clicking on the edit icon on the "Family history" tab',()=>{
        cy.get('.space-y-8>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div').should('contain','Edit').click()
        cy.wait(4000)
        cy.url().should('contain','/edit_family_medical_history')
         
     })
     it('After editing the "Family history" and clicking on "Save&Continue" button,the data should saved and user should be navigated to the "Allergies" page.',()=>{
        cy.xpath('//textarea[@name="others"]').should('be.visible').clear().type('Tuberculosis,hernia')
        cy.xpath('//input[@name="Kidney Disease"]').should('be.visible').uncheck()
        cy.xpath('//input[@name="Kidney Stones"]').should('be.visible').uncheck()

        cy.xpath('//button[@textid="save.and.continue"]').should('be.visible').should('have.text','Save & Continue').click()
        cy.contains('Medical History Updated Successfully')

        cy.wait(4000)
        cy.xpath('//div[contains(text(),"Aller")]').should('be.visible').should('contain','Allergies') 
        

     })


    //Allergies
    it('At "Allergies" page each label and field should have proper label and validations',()=>{
        cy.xpath('//div[contains(text(),"None")]').should('be.visible').should('contain','None')

        cy.xpath('//div[contains(text(),"Des")]').should('be.visible').should('contain','Describe your allergies')
        cy.xpath('//div[contains(text(),"Aller")]').should('be.visible').should('contain','Allergies') 
        cy.xpath('//div[contains(text(),"Add ")]').should('be.visible').should('contain','Add your allergies')

        cy.xpath('//textarea[@name="allergies"]').should('be.visible')
        cy.xpath('//button[@textid="save.and.exit"]').should('be.visible').should('have.text','Save & Exit').click()
        
        cy.contains('At least one field is required')
        cy.xpath('//button[@textid="save.and.continue"]').should('be.visible').should('have.text','Save & Continue').click()
        cy.contains('At least one field is required')
         
    })
    it('After adding "Allergies" and clicking on "Save&Exit" button,data should be saved and user should be navigated back to "Medical History" page.',()=>{
        
        cy.xpath('//input[@name="noneallergies"]').should('be.visible').check()
        cy.wait(2000)
        cy.xpath('//textarea[@name="allergies"]').should('be.visible').should('be.disabled')

        cy.xpath('//button[@textid="save.and.exit"]').should('be.visible').should('have.text','Save & Exit').click()
        cy.contains('Medical History Added successfully')
        cy.wait(4000)


         
    })
    it('The saved information should reflect under medical history page instantly',()=>{
        cy.xpath('//span[contains(text(),"None")]').should('be.visible').should('contain','None')

    })

    it('As a Admin the user should be navigated to the "Allergies" edit page by clicking on the edit icon on the "Allergies" tab',()=>{
        cy.get('.space-y-8>div:nth-child(3)>div:nth-child(1)>div:nth-child(2)>div').should('contain','Edit').click()
        cy.wait(4000)
        cy.url().should('contain','/edit_allergies_history')
         
     })
     it('After editing the "Allergies" and clicking on "Save&Continue" button,the data should be saved and user should be navigated to the "Current Medications" page.',()=>{
        
        cy.xpath('//input[@name="noneallergies"]').should('be.visible').uncheck()
        cy.wait(2000)
        cy.xpath('//textarea[@name="allergies"]').should('be.visible').type('Hyperhydrosis,hypertension')

        cy.xpath('//button[@textid="save.and.continue"]').should('be.visible').should('have.text','Save & Continue').click()
        cy.contains('Medical History Updated Successfully')
        cy.wait(4000)
        cy.xpath('//div[contains(text(),"Current")]').should('be.visible').should('contain','Current Medications') 

        

     })


    //Current Medications
    it('At "Current Medications" page each label and field should have proper label and validations',()=>{
        
        cy.xpath('//div[contains(text(),"None")]').should('be.visible').should('contain','None')

        cy.xpath('//div[contains(text(),"Des")]').should('be.visible').should('contain','Describe Current Medications')
        cy.get('div.flex.border-b>div').should('be.visible').should('contain','Current Medications') 
        cy.xpath('//div[contains(text(),"Add ")]').should('be.visible').should('contain','Add Current Medications')

        cy.xpath('//textarea[@name="currentMedication"]').should('be.visible')
        cy.xpath('//button[@textid="save.and.exit"]').should('be.visible').should('have.text','Save & Exit').click()
        
        cy.contains('At least one field is required')
        cy.xpath('//button[@textid="save.and.continue"]').should('be.visible').should('have.text','Save & Continue').click()
        cy.contains('At least one field is required')
         
    })
    it('After adding "Current Medications" and clicking on "Save&Exit" button,data should be saved and user should be navigated back to "Medical History" page.',()=>{
        
        cy.xpath('//input[@name="nonecurrentMedication"]').should('be.visible').check()
        cy.wait(2000)
        cy.xpath('//textarea[@name="currentMedication"]').should('be.visible').should('be.disabled')

        cy.xpath('//button[@textid="save.and.exit"]').should('be.visible').should('have.text','Save & Exit').click()
        cy.contains('Medical History Added successfully')
        cy.wait(4000)


         
    })
    it('The saved information should reflect under medical history page instantly',()=>{
        cy.xpath('//span[contains(text(),"None")]').should('be.visible').should('contain','None')

    })

    it('As a Admin the user should be navigated to the "Current Medication" edit page by clicking on the edit icon on the "Current Medications" tab',()=>{
        cy.get('.space-y-8>div:nth-child(4)>div:nth-child(1)>div:nth-child(2)>div').should('contain','Edit').click()
        cy.wait(4000)
        cy.url().should('contain','/edit_medications_history')
         
     })
     it('After editing the "Current Medications" and clicking on "Save&Continue" button,the data should be saved and user should be navigated to the "Surgical History" page.',()=>{
        
        cy.xpath('//input[@name="nonecurrentMedication"]').should('be.visible').uncheck()
        cy.wait(2000)
        cy.xpath('//textarea[@name="currentMedication"]').should('be.visible').type('BP Medication,Diabetes Medication')
        
        cy.xpath('//button[@textid="save.and.continue"]').should('be.visible').should('have.text','Save & Continue').click()
        cy.contains('Medical History Updated Successfully')
        cy.wait(4000)
        cy.xpath('//div[contains(text(),"Surgical")]').should('be.visible').should('contain','Surgical History') 

        

     })

    //Surgical History
    it('At "Surgical History" page each label and field should have proper label and validations',()=>{
        
        cy.xpath('//div[contains(text(),"None")]').should('be.visible').should('contain','None')

        cy.xpath('//div[contains(text(),"Des")]').should('be.visible').should('contain','Describe Surgical History')
        cy.get('div.flex.border-b>div').should('be.visible').should('contain','Surgical History') 
        cy.xpath('//div[contains(text(),"Add ")]').should('be.visible').should('contain','Add Surgical History')

        cy.xpath('//textarea[@name="surgicalHistory"]').should('be.visible')
        cy.xpath('//button[@textid="save.and.exit"]').should('be.visible').should('have.text','Save & Exit').click()
        
        cy.contains('At least one field is required')
         
    })
    it('After adding "Surgical History" and clicking on "Save&Exit" button,data should be saved and user should be navigated back to "Medical History" page.',()=>{
        
        cy.xpath('//input[@name="nonesurgicalHistory"]').should('be.visible').check()
        cy.wait(2000)
        cy.xpath('//textarea[@name="surgicalHistory"]').should('be.visible').should('be.disabled')
        
        cy.xpath('//button[@textid="save.and.exit"]').should('be.visible').should('have.text','Save & Exit').click()
        cy.contains('Medical History Added successfully')
        cy.wait(4000)


         
    })
    it('The saved information should reflect under medical history page instantly',()=>{
        cy.xpath('//span[contains(text(),"None")]').should('be.visible').should('contain','None')

    })

    it('As a Admin the user should be navigated to the "Surgical History" edit page by clicking on the edit icon on the "Surgical History" tab',()=>{
        cy.get('.space-y-8>div:nth-child(5)>div:nth-child(1)>div:nth-child(2)>div').should('contain','Edit').click()
        cy.wait(4000)
        cy.url().should('contain','/edit_surgical_history')
         
     })
     it('After editing the "Surgical History" and clicking on "Save&Exit" button, Data should be saved and user should be navigated to the "Medical History" page.',()=>{
        cy.xpath('//input[@name="nonesurgicalHistory"]').should('be.visible').uncheck()
        cy.wait(2000)
        cy.xpath('//textarea[@name="surgicalHistory"]').should('be.visible').type('Heart surgery,leg surgery')

        cy.xpath('//button[@textid="save.and.exit"]').should('be.visible').should('have.text','Save & Exit').click()
        cy.contains('Medical History Updated Successfully')
        cy.logout()
        

     })


})