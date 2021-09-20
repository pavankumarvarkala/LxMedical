///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
 import faker from 'faker'

 describe('Medical history module testcases',()=>{
 
    it('As a patient the user should be naviagted to the medical history section by clicking on that particular member',()=>{
        cy.patientlogin(cred.pemail,cred.ppassword)
        cy.get('[href="/charts"]').should('be.visible').should('have.text','Charts').click()
        cy.url().should('contain','/charts')
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(2)').should('be.visible').click()
        cy.url().should('contain','/medical_history')
    })

    it('At medical history page each label and field should have proper label and validations',()=>{
        cy.get('.flex > .border-primary > div').should('be.visible').should('have.text','Medical History')
        cy.get('.border-transparent > div').should('be.visible').should('have.text','Reports')
        cy.get(':nth-child(1) > .flex > .font-medium').should('be.visible').should('have.text','Past Medical History')
        cy.get(':nth-child(2) > .flex > .font-medium').should('be.visible').should('have.text','Add Family History')
        cy.get(':nth-child(3) > .flex > .font-medium').should('be.visible').should('contain','Allergies')
        cy.get(':nth-child(4) > .flex > .font-medium').should('be.visible').should('have.text','Current Medications')
        cy.get(':nth-child(5) > .flex > .font-medium').should('be.visible').should('have.text','Surgical History')
    })

    it('As a Patient the user should be navigated to the past medical history edit page by clicking on "past medical history" tab',()=>{
        cy.get('.space-y-8 > :nth-child(1) > .flex').should('be.visible').should('have.text','Past Medical History').click()
        cy.url().should('contain','/add_medical_history')
         
    })
    //Past medical history
    it('At "past medical history" edit page each label and field should have proper label and validations',()=>{
        cy.get('.flex.border-b > .font-semibold').should('be.visible').should('have.text','Past Medical History')
        cy.get('.flex.border-b > .cursor-pointer').should('be.visible')
        cy.get('.border-b > .text-primary').should('be.visible').should('have.text','Select your Illness')
        cy.get(':nth-child(1) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','Hypertension')
        cy.get(':nth-child(2) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','Diabetes')
        cy.get(':nth-child(3) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','High Cholestrol')
        cy.get(':nth-child(4) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','Asthama')
        cy.get(':nth-child(5) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','COPD')
        cy.get(':nth-child(6) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','Heart Disease')
        cy.get(':nth-child(7) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','Kidney Disease')
        cy.get(':nth-child(8) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','Kidney Stones')
        cy.get(':nth-child(9) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','G6PD')
        cy.get(':nth-child(10) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','Tobacco use')
        cy.get(':nth-child(11) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','Cancer')
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
        cy.get('div.w-full > .block > div').should('be.visible').should('have.text','Add other Illness...')
        cy.get('.resize-y').should('be.visible')
        cy.get(':nth-child(13) > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('At least one field is required')
               
    })
    it('After fiiling form and by clicking on save details button on the "past medical history" edit page the user should able save the details',()=>{
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
        cy.get('.resize-y').should('be.visible').clear().type('Hyperhydrosis')
        cy.get(':nth-child(13) > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('Medical History Added successfully')
    })
    it('The saved information should reflect under medical history page instantly',()=>{
        cy.get('.grid > :nth-child(1) > span').should('be.visible').should('have.text','Hypertension')
        cy.get('.grid > :nth-child(2) > span').should('be.visible').should('have.text','Diabetes')
        cy.get('.grid > :nth-child(3) > span').should('be.visible').should('have.text','High Cholestrol')
        cy.get('.grid > :nth-child(4) > span').should('be.visible').should('have.text','Asthama')
        cy.get('.grid > :nth-child(5) > span').should('be.visible').should('have.text','COPD')
        cy.get('.grid > :nth-child(6) > span').should('be.visible').should('have.text','Heart Disease')
        cy.get('.grid > :nth-child(7) > span').should('be.visible').should('have.text','Kidney Disease')
        cy.get('.grid > :nth-child(8) > span').should('be.visible').should('have.text','Kidney Stones')
        cy.get('.grid > :nth-child(9) > span').should('be.visible').should('have.text','G6PD')
        cy.get('.grid > :nth-child(10) > span').should('be.visible').should('have.text','Cancer')
        cy.get('.grid > :nth-child(11) > span').should('be.visible').should('have.text','Tobacco use')
        cy.get('.col-span-12').should('be.visible').should('have.text','Hyperhydrosis')  
         
    })
    //Family History
    it('As a Patient the user should be navigated to the family history edit page by clicking "add family hisory" tab.',()=>{
        cy.get(':nth-child(2) > .justify-between > .text-base').should('be.visible').should('have.text','Family History')
        cy.get(':nth-child(2) > .justify-between > .flex > .font-medium').should('be.visible').should('have.text','Edit')
        cy.get(':nth-child(2) > .justify-between > .flex > .w-4').should('be.visible')
        cy.get(':nth-child(2) > .justify-between > .flex').should('be.visible').click()
        cy.url().should('contain','/edit_family_medical_history')
         
    })
    it('At "family history" edit page each label and field should have proper label and validationsb',()=>{
        cy.get('.flex.border-b > .font-semibold').should('be.visible').should('have.text','Family History')
        cy.get('.flex.border-b > .cursor-pointer').should('be.visible')
        cy.get('.border-b > .text-primary').should('be.visible').should('have.text','Select Illness')
        cy.get(':nth-child(1) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','Hypertension')
        cy.get(':nth-child(2) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','Diabetes')
        cy.get(':nth-child(3) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','High Cholestrol')
        cy.get(':nth-child(4) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','Asthama')
        cy.get(':nth-child(5) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','COPD')
        cy.get(':nth-child(6) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','Heart Disease')
        cy.get(':nth-child(7) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','Kidney Disease')
        cy.get(':nth-child(8) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','Kidney Stones')
        cy.get(':nth-child(9) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','G6PD')
        cy.get(':nth-child(10) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','Tobacco use')
        cy.get(':nth-child(11) > :nth-child(1) > .flex > .ml-2 > div').should('be.visible').should('have.text','Cancer')
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
        cy.get('div.w-full > .block > div').should('be.visible').should('have.text','Add other Illness...')
        cy.get('.resize-y').should('be.visible')
        cy.get(':nth-child(13) > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('At least one field is required') 
    })
    it('After fiiling form and by clicking on save details button on the "Family history" edit page the user should able save the details',()=>{
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
        cy.get('.resize-y').should('be.visible').clear().type('Tuberculosis')
        cy.get(':nth-child(13) > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('Medical History Updated Successfully')
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
        cy.get(':nth-child(2) > .grid > .col-span-12').should('be.visible').should('have.text','Tuberculosis')  
         
    })
    //Allergies
    it('As a patient the user should be navigated to the allergies edit page by clicking on "Allergies" tab',()=>{
        cy.get(':nth-child(3) > .justify-between > .text-base').should('be.visible').should('have.text','Allergies')
        cy.get(':nth-child(3) > .justify-between > .flex > .font-medium').should('be.visible').should('have.text','Edit')
        cy.get(':nth-child(3) > .justify-between > .flex > .w-4').should('be.visible')
        cy.get(':nth-child(3) > .justify-between > .flex').should('be.visible').click()
        cy.url().should('contain','/edit_allergies_history')   
         
    })
    it('At "Allergies" edit page each label and field should have proper label and validations',()=>{
        cy.get('.border-b > .text-primary').should('be.visible').should('have.text','Describe your allergies')
        cy.get('.flex.border-b > .font-semibold').should('be.visible').should('have.text','Allergies')
        cy.get('.block > div').should('be.visible').should('have.text','Add your allergies')
        cy.get('.resize-y').should('be.visible')
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click() 
         
    })
    it('After fiiling form and by clicking on save details button on the "Allergies" edit page the user should able save the details',()=>{
        cy.get('.resize-y').should('be.visible') 
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('At least one field is required')
        cy.get('.resize-y').should('be.visible').type('Contact Dermatitis')
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click()

         
    })
    it('The saved information should reflect under medical history page instantly',()=>{
        cy.get(':nth-child(3) > .grid > .col-span-12').should('be.visible').should('have.text','Contact Dermatitis')     
        cy.contains('Medical History Updated Successfully')

    })
    //Current Medications
    it('As a patient the user should be navigated to the current medications edit page by clicking on "current medications" tab',()=>{
        cy.get(':nth-child(4) > .justify-between > .text-base').should('be.visible').should('have.text','Current Medications')
        cy.get(':nth-child(4) > .justify-between > .flex > .font-medium').should('be.visible').should('have.text','Edit')
        cy.get(':nth-child(4) > .justify-between > .flex > .w-4').should('be.visible')
        cy.get(':nth-child(4) > .justify-between > .flex').should('be.visible').click()
        cy.url().should('contain','/edit_medications_history')   
         
    })
    it('At "Current medications" edit page each label and field should have proper label and validations',()=>{
        cy.get('.border-b > .text-primary').should('be.visible').should('have.text','Describe Current Medications')
        cy.get('.flex.border-b > .font-semibold').should('be.visible').should('have.text','Current Medications')
        cy.get('.block > div').should('be.visible').should('have.text','Add Current Medications')
        cy.get('.resize-y').should('be.visible')
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click() 
         
    })
    it('After fiiling form and by clicking on save details button on the "current medications" edit page the user should able save the details',()=>{
        cy.get('.resize-y').should('be.visible') 
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('At least one field is required')
        cy.get('.resize-y').should('be.visible').type('Botox')
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click()

         
    })
    it('The saved information should reflect under medical history page instantly',()=>{
        cy.get(':nth-child(4) > .grid > .col-span-12').should('be.visible').should('have.text','Botox')     
        cy.contains('Medical History Updated Successfully')

    })
    //Surgical History
    it('As a patient the user should be navigated to the surgical history edit page by clicking on "Surgical history" tab',()=>{
        cy.get(':nth-child(5) > .justify-between > .text-base').should('be.visible').should('have.text','Surgical History')
        cy.get(':nth-child(5) > .justify-between > .flex > .font-medium').should('be.visible').should('have.text','Edit')
        cy.get(':nth-child(5) > .justify-between > .flex > .w-4').should('be.visible')
        cy.get(':nth-child(5) > .justify-between > .flex').should('be.visible').click()
        cy.url().should('contain','/edit_surgical_history')   
         
    })
    it('At "Surgical history" edit page each label and field should have proper label and validations',()=>{
        cy.get('.border-b > .text-primary').should('be.visible').should('have.text','Describe Surgical History')
        cy.get('.flex.border-b > .font-semibold').should('be.visible').should('have.text','Surgical History')
        cy.get('.block > div').should('be.visible').should('have.text','Add Surgical History')
        cy.get('.resize-y').should('be.visible')
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click() 
         
    })
    it('After fiiling form and by clicking on save details button on the "surgical history" edit page the user should able save the details',()=>{
        cy.get('.resize-y').should('be.visible') 
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('At least one field is required')
        cy.get('.resize-y').should('be.visible').type('Joint Replacement')
        cy.get('.col-span-6 > .flex').should('be.visible').should('have.text','Save Details').click()

         
    })
    it('The saved information should reflect under "Medical history" page instantly',()=>{
        cy.get(':nth-child(5) > .grid > .col-span-12').should('be.visible').should('have.text','Joint Replacement')     
        cy.contains('Medical History Updated Successfully')

    })

})