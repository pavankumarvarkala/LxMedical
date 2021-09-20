///<reference types='cypress'/>
const cred=require('../../fixtures/cred.json')
 import faker from 'faker'

 describe('Add/edit/delete family member testcases',()=>{
     //Add Family Member
    it('As a Patient the user should able to get a pop up window of add family member by clicking on "add another member" button on charts page',()=>{
        cy.patientlogin(cred.pemail,cred.ppassword)
        cy.get('[href="/charts"]').should('be.visible').should('have.text','Charts').click()
        cy.url().should('contain','/charts')
        cy.get('.flex-wrap > .flex').should('be.visible').should('have.text','Add Another Member').click()

    })

    it('At add family member page each label and field have proper lable and validations',()=>{
        cy.get('.hidden > .justify-between > .font-bold').should('be.visible').should('have.text','Add Family Member')
        cy.get('.hidden > .justify-between > .w-6').should('be.visible')
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(1) > :nth-child(1) > .text-sm > div').should('be.visible').should('have.text','First Name')
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(1) > :nth-child(2) > .text-sm > div').should('be.visible').should('have.text','Last Name')
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(2) > div.w-full > .text-sm > div').should('be.visible').should('have.text','Date of Birth')
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(2) > :nth-child(2) > .block').should('be.visible').should('have.text','Relationship')
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(3) > :nth-child(1) > .block').should('be.visible').should('have.text','Gender')
        cy.get('.hidden > .mt-6 > .px-4 > .pt-4 > .flex').should('be.visible').should('have.text','Add Member').click()
        cy.get(':nth-child(1) > :nth-child(1) > .text-red-600').should('be.visible').should('have.text','Required')
        cy.get(':nth-child(1) > :nth-child(2) > .text-red-600').should('be.visible').should('have.text','Required')
        cy.get(':nth-child(2) > :nth-child(1) > .text-red-600').should('be.visible').should('have.text','Required')
        cy.get(':nth-child(2) > :nth-child(2) > .text-red-600').should('be.visible').should('have.text','Required')
        cy.get(':nth-child(3) > :nth-child(1) > .text-red-600').should('be.visible').should('have.text','Required')


    })
    it('By filling add family member form and cliking on add member button the family member should be added',()=>{
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(1) > :nth-child(1) > .relative > .appearance-none').should('be.visible').type('shiva')
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(1) > :nth-child(2) > .relative > .appearance-none').should('be.visible').type('Teja')
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(2) > div.w-full > .relative > .react-datepicker-wrapper > .react-datepicker__input-container > .appearance-none').should('be.visible').click()
        cy.get('.react-datepicker__day--012').should('be.visible').click()
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(2) > :nth-child(2) > .font-bold > .css-yk16xz-control').should('be.visible').click()
        cy.get('#react-select-2-option-1').click()
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(3) > :nth-child(1) > .font-bold > .css-yk16xz-control > .css-1hwfws3').should('be.visible').click()
        cy.get('#react-select-3-option-1').click()
        cy.get('.hidden > .mt-6 > .px-4 > .pt-4 > .flex').should('be.visible').should('have.text','Add Member').click()
        cy.contains('Family Member Added successfully')
    })

    it('The added family member should refelect under charts section',()=>{
        cy.get(':nth-child(3) > .bg-white > .justify-between > .text-base').should('be.visible').should('have.text','shiva teja')
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(3)>div>div:nth-child(2)>div:nth-child(2)>span').should('be.visible').should('have.text','Female')
        cy.patientlogout()
    })
    //Edit Family Member
    it('As a Patient the user should able to get a pop up window of edit family member by clicking on edit icon against the particular member',()=>{
        cy.patientlogin(cred.pemail,cred.ppassword)
        cy.get('[href="/charts"]').should('be.visible').should('have.text','Charts').click()
        cy.url().should('contain','/charts')
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(3)').should('be.visible')
        cy.get(':nth-child(3) > .bg-white > .justify-between > .flex > :nth-child(3)').should('be.visible').click()

    })
    it('At Edit family member window each label and field have proper lable and validations',()=>{
        cy.get('.hidden > .justify-between > .font-bold').should('be.visible').should('have.text','Edit Family Member')
        cy.get('.hidden > .justify-between > .w-6').should('be.visible')
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(1) > :nth-child(1) > .text-sm > div').should('be.visible').should('have.text','First Name')
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(1) > :nth-child(2) > .text-sm > div').should('be.visible').should('have.text','Last Name')
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(2) > div.w-full > .text-sm > div').should('be.visible').should('have.text','Date of Birth')
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(2) > :nth-child(2) > .block').should('be.visible').should('have.text','Relationship')
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(3) > :nth-child(1) > .block').should('be.visible').should('have.text','Gender')
        cy.get('.hidden > .mt-6 > .px-4 > .pt-4 > .flex').should('be.visible').should('have.text','Save Details')

    })
    it('After editing the family member details the user can save details by clicking save details button',()=>{
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(1) > :nth-child(1) > .relative > .appearance-none').should('be.visible').clear().type('Nanda')
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(1) > :nth-child(2) > .relative > .appearance-none').should('be.visible').clear().type('Kishore')
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(2) > div.w-full > .relative > .react-datepicker-wrapper > .react-datepicker__input-container > .appearance-none').should('be.visible').click()
        cy.get('.react-datepicker__day--018').should('be.visible').click()
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(2) > :nth-child(2) > .font-bold > .css-yk16xz-control').should('be.visible').click()
        cy.xpath('//*[@id="react-select-2-option-0"]').click()
        cy.get('.hidden > .mt-6 > .px-4 > :nth-child(3) > :nth-child(1) > .font-bold > .css-yk16xz-control > .css-1hwfws3').should('be.visible').click()
        cy.get('#react-select-3-option-0').click()
        cy.get('.hidden > .mt-6 > .px-4 > .pt-4 > .flex').should('be.visible').should('have.text','Save Details').click()
        cy.contains('Family Member Updated Successfully')
    })

    it('The edited details should be refelected under charts section',()=>{
        cy.get(':nth-child(3) > .bg-white > .justify-between > .text-base').should('be.visible').should('have.text','nanda kishore')
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(3)>div>div:nth-child(2)>div:nth-child(2)>span').should('be.visible').should('have.text','Male')
 
    })
    //Delete Family Member
    it('As a Patient the user should able to get a pop up window of family member delete confirmation by clicking on edit icon against the particular member',()=>{
        cy.get('.h-screen>div:nth-child(2)>div:nth-child(3)').should('be.visible')
        cy.get(':nth-child(3) > .bg-white > .justify-between > .flex > :nth-child(2)').should('be.visible').click()

    })

    it('At delete member confirmation window each label and field have proper lable and validations',()=>{
        cy.get('.mb-4 > .font-bold').should('be.visible').should('have.text','Confirmation')
        cy.get('.hidden > .mb-4 > .w-6').should('be.visible')
        cy.get('.hidden > :nth-child(2) > .shadow-corner > .bg-white > .justify-between > .text-primary').should('be.visible').should('have.text','nanda kishore')
        cy.get('.hidden > :nth-child(2) > .shadow-corner > .bg-white > .justify-between > .flex > .font-medium').should('be.visible').should('have.text','son')
        cy.get('body > div:nth-child(7)>div>div>div:nth-child(1)>div>div:nth-child(1)>div>div>div:nth-child(1)>div').should('be.visible').should('have.text','Date of Birth')
        cy.get('body > div:nth-child(7)>div>div>div:nth-child(1)>div>div:nth-child(1)>div>div>div:nth-child(2)>div').should('be.visible').should('have.text','Gender')
        cy.get('body > div:nth-child(7)>div>div>div:nth-child(1)>div>div:nth-child(1)>div>div>div:nth-child(2)>span:nth-child(2)').should('be.visible').should('have.text','Male')
        cy.get('.hidden > :nth-child(2) > .items-center.mt-6 > .flex').should('be.visible').should('have.text','Are you sure, you want to remove this member?')
        cy.get('.hidden > :nth-child(2) > .mb-3 > .flex').should('be.visible').should('have.text','Remove')

    })

    it('By clicking on remove button on confirmation window the family member should be deleted',()=>{
        cy.get('.hidden > :nth-child(2) > .mb-3 > .flex').should('be.visible').should('have.text','Remove').click()
        cy.contains('Family Member Deleted Successfully')
  
    })

    it('The deleted member should not reflect under charts section',()=>{
        cy.get('.flex-wrap > .font-medium').should('be.visible').should('have.text','2 Members')
        cy.patientlogout()         
    })


})
