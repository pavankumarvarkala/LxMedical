///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
 import faker from 'faker'

 describe('Medical history module testcases',()=>{
 
    it('As a Admin the user should be navigated to the medical history page by clicking on the particular member',()=>{
        cy.login(cred.email,cred.password)
        cy.url().should('contain','/dashboard')
        cy.get('.space-y-4 > :nth-child(2)').should('be.visible').should('have.text','Patients').click()
        cy.url().should('contain','/patients')
        cy.get('[type=search]').should('be.visible').type('pawan@yopmail.com')
        cy.wait(2000)
        cy.get('tr:nth-child(1) > td:nth-child(8) > div > svg:nth-child(1) > path:nth-child(1)').scrollIntoView().should('be.visible').click()
        cy.url().should('contain','/address')
        cy.get('nav.flex.flex-wrap>div:nth-child(2)>div').should('be.visible').should('contain','Charts').click()
        cy.url().should('contain','/charts')
        cy.get('.flex-wrap > .flex').should('be.visible').should('have.text','Add Another Member').click()
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(1) > :nth-child(1) > .relative > .appearance-none').should('be.visible').type('shiva')
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(1) > :nth-child(2) > .relative > .appearance-none').should('be.visible').type('Teja')
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(2) > div.w-full > .relative > .react-datepicker-wrapper > .react-datepicker__input-container > .appearance-none').should('be.visible').click()
        cy.get('.react-datepicker__year-select').select('1991')
        cy.get('.react-datepicker__day--012').should('be.visible').click()
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(2) > :nth-child(2) > .font-bold > .css-yk16xz-control').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(2)').click()
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(3) > :nth-child(1) > .font-bold > .css-yk16xz-control > .css-1hwfws3').should('be.visible').click()
        cy.get('.css-11unzgr>div:nth-child(2)').click()
        cy.get('.hidden > .mt-6 > .px-4 > .pt-4 > .flex').should('be.visible').should('have.text','Add Member').click()
        cy.contains('Family Member Added successfully')
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(2)').should('be.visible').click()
        cy.url().should('contain','/medical_history')
    })

    it('At medical history page each label and field should have proper label and validations',()=>{
        cy.get('.flex > .border-primary > div').should('be.visible').should('contain','Medical History')
        cy.get('.border-transparent > div').should('be.visible').should('contain','Reports')
        cy.get(':nth-child(1) > .flex > .font-medium').should('be.visible').should('contain','Past Medical History')
        cy.get(':nth-child(2) > .flex > .font-medium').should('be.visible').should('contain','Add Family History')
        cy.get(':nth-child(3) > .flex > .font-medium').should('be.visible').should('contain','Allergies')
        cy.get(':nth-child(4) > .flex > .font-medium').should('be.visible').should('contain','Current Medications')
        cy.get(':nth-child(5) > .flex > .font-medium').should('be.visible').should('contain','Surgical History')
    })
    //Past medical history
    it('As a Admin the user should be navigated to the add past medical history page by clicking on "past medical history" tab',()=>{
        cy.get('.space-y-8 > :nth-child(1) > .flex').should('be.visible').should('contain','Past Medical History').click()
        cy.url().should('contain','/add_medical_history')
         
    })
    
    it('At "past medical history" page each label and field should have proper label and validations',()=>{
        cy.get('.flex.border-b > .font-semibold').should('be.visible').should('contain','Past Medical History')
        cy.get('.flex.border-b > .cursor-pointer').should('be.visible')
        cy.get('.border-b > .text-primary').should('be.visible').should('have.text','Select your Illness')
        cy.get(':nth-child(1) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','Hypertension')
        cy.get(':nth-child(2) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','Diabetes')
        cy.get(':nth-child(3) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','High Cholestrol')
        cy.get(':nth-child(4) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','Asthama')
        cy.get(':nth-child(5) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','COPD')
        cy.get(':nth-child(6) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','Heart Disease')
        cy.get(':nth-child(7) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','Kidney Disease')
        cy.get(':nth-child(8) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','Kidney Stones')
        cy.get(':nth-child(9) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','G6PD')
        cy.get(':nth-child(10) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','Tobacco use')
        cy.get(':nth-child(11) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','Cancer')
        cy.get(':nth-child(1) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(2) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(3) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(4) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(5) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(6) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(7) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(8) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(9) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(10) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(11) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get('div.w-full > .block > div').should('be.visible').should('contain','Add other Illness...')
        cy.get('.resize-y').should('be.visible')
        cy.get(':nth-child(13) > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('At least one field is required')
               
    })
    it('After fiiling form and by clicking on save details button on the "past medical history" page the user should able save the details',()=>{
        cy.get(':nth-child(1) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(2) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(3) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(4) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(5) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(6) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(7) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(8) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(9) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(10) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(11) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get('.resize-y').should('be.visible').clear().type('Hyperhydrosis.,&#%')
        cy.get(':nth-child(13) > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('Medical History Added successfully')
    })
    it('The saved information should reflect under medical history page instantly',()=>{
        cy.get('.grid > :nth-child(1) > span').should('be.visible').should('contain','Hypertension')
        cy.get('.grid > :nth-child(2) > span').should('be.visible').should('contain','Diabetes')
        cy.get('.grid > :nth-child(3) > span').should('be.visible').should('contain','High Cholestrol')
        cy.get('.grid > :nth-child(4) > span').should('be.visible').should('contain','Asthama')
        cy.get('.grid > :nth-child(5) > span').should('be.visible').should('contain','COPD')
        cy.get('.grid > :nth-child(6) > span').should('be.visible').should('contain','Heart Disease')
        cy.get('.grid > :nth-child(7) > span').should('be.visible').should('contain','Kidney Disease')
        cy.get('.grid > :nth-child(8) > span').should('be.visible').should('contain','Kidney Stones')
        cy.get('.grid > :nth-child(9) > span').should('be.visible').should('contain','G6PD')
        cy.get('.grid > :nth-child(10) > span').should('be.visible').should('contain','Cancer')
        cy.get('.grid > :nth-child(11) > span').should('be.visible').should('contain','Tobacco use')
        cy.get('.col-span-12').should('be.visible').should('contain','Hyperhydrosis')  
         
    })

    it('As a Admin the user should be navigated to the past medical history edit page by clicking on the edit icon on the "past medical history" tab',()=>{
        cy.get('.space-y-8>div:nth-child(1)>div:nth-child(1)>div:nth-child(2)>div').should('contain','Edit').click()
        cy.url().should('contain','/edit_medical_history')
         
     })
     it('After editing the past medical history and clicking on save details button changes made should reflect instantly',()=>{
        cy.get('.resize-y').should('be.visible').clear().type('Tuberculosis,.&*')
        cy.get(':nth-child(9) > :nth-child(1) > .flex > .h-4').should('be.visible').uncheck()
        cy.get(':nth-child(10) > :nth-child(1) > .flex > .h-4').should('be.visible').uncheck()
        cy.get(':nth-child(11) > :nth-child(1) > .flex > .h-4').should('be.visible').uncheck() 
        cy.get(':nth-child(13) > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('Medical History Updated Successfully')  
        cy.get('.col-span-12').should('be.visible').should('contain','Tuberculosis,.&*')  


     })



    //Family History
    it('As a Admin the user should be navigated to the add family history page by clicking add family hisory tab..',()=>{
        cy.get(':nth-child(2) > .justify-between > .text-base').should('be.visible').should('contain','Family History').click()
        cy.url().should('contain','/add_family_medical_history')
         
    })
    it('At "family history" page each label and field should have proper label and validationsb',()=>{
        cy.get('.flex.border-b > .font-semibold').should('be.visible').should('contain','Family History')
        cy.get('.flex.border-b > .cursor-pointer').should('be.visible')
        cy.get('.border-b > .text-primary').should('be.visible').should('contain','Select Illness')
        cy.get(':nth-child(1) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','Hypertension')
        cy.get(':nth-child(2) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','Diabetes')
        cy.get(':nth-child(3) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','High Cholestrol')
        cy.get(':nth-child(4) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','Asthama')
        cy.get(':nth-child(5) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','COPD')
        cy.get(':nth-child(6) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','Heart Disease')
        cy.get(':nth-child(7) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','Kidney Disease')
        cy.get(':nth-child(8) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','Kidney Stones')
        cy.get(':nth-child(9) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','G6PD')
        cy.get(':nth-child(10) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','Tobacco use')
        cy.get(':nth-child(11) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('contain','Cancer')
        cy.get(':nth-child(1) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(2) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(3) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(4) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(5) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(6) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(7) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(8) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(9) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(10) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get(':nth-child(11) > :nth-child(1) > .flex > .h-4').should('be.visible').should('not.be.checked')
        cy.get('div.w-full > .block > div').should('be.visible').should('contain','Add other Illness...')
        cy.get('.resize-y').should('be.visible')
        cy.get(':nth-child(13) > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('At least one field is required') 
    })
    it('After fiiling form and by clicking on save details button on the "Family history" page the user should able save the details',()=>{
        cy.get(':nth-child(1) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(2) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(3) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(4) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(5) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(6) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(7) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(8) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(9) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(10) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get(':nth-child(11) > :nth-child(1) > .flex > .h-4').should('be.visible').check()
        cy.get('.resize-y').should('be.visible').clear().type('Tuberculosis,.&*')
        cy.get(':nth-child(13) > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('Medical History Added successfully')
    })
    it('The saved information should reflect under medical history page instantly',()=>{
        cy.get('.grid > :nth-child(1) > span').should('be.visible').should('contain','Hypertension')
        cy.get('.grid > :nth-child(2) > span').should('be.visible').should('contain','Diabetes')
        cy.get('.grid > :nth-child(3) > span').should('be.visible').should('contain','High Cholestrol')
        cy.get('.grid > :nth-child(4) > span').should('be.visible').should('contain','Asthama')
        cy.get('.grid > :nth-child(5) > span').should('be.visible').should('contain','COPD')
        cy.get('.grid > :nth-child(6) > span').should('be.visible').should('contain','Heart Disease')
        cy.get('.grid > :nth-child(7) > span').should('be.visible').should('contain','Kidney Disease')
        cy.get('.grid > :nth-child(8) > span').should('be.visible').should('contain','Kidney Stones')
        cy.get('.grid > :nth-child(9) > span').should('be.visible').should('contain','G6PD')
        cy.get('.grid > :nth-child(10) > span').should('be.visible').should('contain','Cancer')
        cy.get('.grid > :nth-child(11) > span').should('be.visible').should('contain','Tobacco use')
        cy.get(':nth-child(2) > .grid > .col-span-12').should('be.visible').should('contain','Tuberculosis')  
         
    })

    it('As a Admin the user should be navigated to the family history edit page by clicking on the edit icon on the "family history" tab',()=>{
        cy.get('.space-y-8>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div').should('contain','Edit').click()
        cy.url().should('contain','/edit_family_medical_history')
         
     })
     it('After editing the past medical history and clicking on save details button changes made should reflect instantly',()=>{
        cy.get('.resize-y').should('be.visible').clear().type('Hyperhydrosis.,&#%')
        cy.get(':nth-child(9) > :nth-child(1) > .flex > .h-4').should('be.visible').uncheck()
        cy.get(':nth-child(10) > :nth-child(1) > .flex > .h-4').should('be.visible').uncheck()
        cy.get(':nth-child(11) > :nth-child(1) > .flex > .h-4').should('be.visible').uncheck() 
        cy.get(':nth-child(13) > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('Medical History Updated Successfully')  
        cy.get('.col-span-12').should('be.visible').should('contain','Hyperhydrosis.,&#%')  


     })


    //Allergies
    it('As a Admin the user should be navigated to the add allergies page by clicking on "Allergies" tab',()=>{
        cy.get(':nth-child(3) > .justify-between > .text-base').should('be.visible').should('contain','Allergies').click()
        cy.url().should('contain','/add_allergies_history')   
         
    })
    it('At "Allergies" page each label and field should have proper label and validations',()=>{
        cy.get('.border-b > .text-primary').should('be.visible').should('contain','Describe your allergies')
        cy.get('.flex.border-b > .font-semibold').should('be.visible').should('contain','Allergies')
        cy.get('.block > div').should('be.visible').should('contain','Add your allergies')
        cy.get('.resize-y').should('be.visible')
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click() 
         
    })
    it('After fiiling form and by clicking on save details button on the "Allergies" page the user should able save the details',()=>{
        cy.get('.resize-y').should('be.visible') 
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('At least one field is required')
        cy.get('.resize-y').should('be.visible').type('Contact Dermatitis<>#^$^&')
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('Medical History Added successfully')

         
    })
    it('The saved information should reflect under medical history page instantly',()=>{
        cy.get(':nth-child(3) > .grid > .col-span-12').should('be.visible').should('contain','Contact Dermatitis')     

    })

    it('As a Admin the user should be navigated to the Allergies edit page by clicking on the edit icon on the "Allergies" tab',()=>{
        cy.get('.space-y-8>div:nth-child(3)>div:nth-child(1)>div:nth-child(2)>div').should('contain','Edit').click()
        cy.url().should('contain','/edit_allergies_history')
         
     })
     it('After editing the past medical history and clicking on save details button changes made should reflect instantly',()=>{
        cy.get('.resize-y').should('be.visible').clear().type('conjunctivitis@#$%^&')
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('Medical History Updated Successfully')  
        cy.get(':nth-child(3) > .grid > .col-span-12').should('be.visible').should('contain','conjunctivitis@#$%^&')     


     })


    //Current Medications
    it('As a Admin the user should be navigated to the add current medications page by clicking on "current medications" tab',()=>{
        cy.get(':nth-child(4) > .justify-between > .text-base').should('be.visible').should('contain','Current Medications').click()
        cy.url().should('contain','/add_medications_history')   
         
    })
    it('At "Current medications" page each label and field should have proper label and validations',()=>{
        cy.get('.border-b > .text-primary').should('be.visible').should('contain','Describe Current Medications')
        cy.get('.flex.border-b > .font-semibold').should('be.visible').should('contain','Current Medications')
        cy.get('.block > div').should('be.visible').should('contain','Add Current Medications')
        cy.get('.resize-y').should('be.visible')
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click() 
         
    })
    it('After fiiling form and by clicking on save details button on the "current medications" page the user should able save the details',()=>{
        cy.get('.resize-y').should('be.visible') 
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('At least one field is required')
        cy.get('.resize-y').should('be.visible').type('Botox.,)(*&^%')
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('Medical History Added successfully')

         
    })
    it('The saved information should reflect under medical history page instantly',()=>{
        cy.get(':nth-child(4) > .grid > .col-span-12').should('be.visible').should('contain','Botox')     

    })

    it('As a Admin the user should be navigated to the Current Medications edit page by clicking on the edit icon on the "Current Medications" tab',()=>{
        cy.get('.space-y-8>div:nth-child(4)>div:nth-child(1)>div:nth-child(2)>div').should('contain','Edit').click()
        cy.url().should('contain','/edit_medications_history')
         
     })
     it('After editing the past medical history and clicking on save details button changes made should reflect instantly',()=>{
        cy.get('.resize-y').should('be.visible').clear().type('Diabetes medication @#$%^&')
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('Medical History Updated Successfully')  
        cy.get(':nth-child(4) > .grid > .col-span-12').should('be.visible').should('contain','Diabetes medication @#$%^&')     


     })

    //Surgical History
    it('As a Admin the user should be navigated to the add surgical history page by clicking on "Surgical history" tab',()=>{
        cy.get(':nth-child(5) > .justify-between > .text-base').should('be.visible').should('contain','Surgical History').click()
        cy.url().should('contain','/add_surgical_history')   
         
    })
    it('At "Surgical history" page each label and field should have proper label and validations',()=>{
        cy.get('.border-b > .text-primary').should('be.visible').should('contain','Describe Surgical History')
        cy.get('.flex.border-b > .font-semibold').should('be.visible').should('contain','Surgical History')
        cy.get('.block > div').should('be.visible').should('contain','Add Surgical History')
        cy.get('.resize-y').should('be.visible')
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click() 
         
    })
    it('After fiiling form and by clicking on save details button on the "surgical history" page the user should able save the details',()=>{
        cy.get('.resize-y').should('be.visible') 
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('At least one field is required')
        cy.get('.resize-y').should('be.visible').type('Joint Replacement.,.,(*&^%$#')
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('Medical History Added successfully')

         
    })
    it('The saved information should reflect under "Medical history" page instantly',()=>{
        cy.get(':nth-child(5) > .grid > .col-span-12').should('be.visible').should('contain','Joint Replacement')     
        

    })

    it('As a Admin the user should be navigated to the Surgical History edit page by clicking on the edit icon on the "Surgical History" tab',()=>{
        cy.get('.space-y-8>div:nth-child(5)>div:nth-child(1)>div:nth-child(2)>div').should('contain','Edit').click()
        cy.url().should('contain','/edit_surgical_history')
         
     })
     it('After editing the past medical history and clicking on save details button changes made should reflect instantly',()=>{
        cy.get('.resize-y').should('be.visible').clear().type('Heart surgery @#$%^&')
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('Medical History Updated Successfully')  
        cy.get(':nth-child(5) > .grid > .col-span-12').should('be.visible').should('contain','Heart surgery @#$%^&')
        cy.get('.text-gray-400').should('be.visible').click()
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(2)').should('be.visible')
        cy.get(':nth-child(2) > .bg-white > .justify-between > .flex > :nth-child(2)').should('be.visible').click()
        cy.get('.hidden > :nth-child(2) > .mb-3 > .flex').should('be.visible').should('have.text','Remove').click()
        cy.contains('Family Member Deleted Successfully')    
        cy.logout()


     })


})