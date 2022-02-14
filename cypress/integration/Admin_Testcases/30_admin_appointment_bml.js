//<reference types='cypress'/>
describe('bill me later request testcases',  function() {
    beforeEach(function(){
        cy.visit('https://qa.rch.build-release.com/admin')
        cy.get('[label=email]').type('Rchadmin@yopmail.com')
        cy.get('[label=password]').type('Password@123')
        cy.get('[type=submit]').click()

    })


    it('As a Admin the user should be able to see the bill me later request after clicking on appointment tab', function() {
        cy.xpath('//*[@id="root"]/div[2]/div/div[1]/nav/div[4]/div[2]').click()
        
        
    })
    it('At "Bill me later Requests" page each label and field should have proper label and validations', function() {
       
        cy.xpath('//*[@id="root"]/div[2]/div/div[1]/nav/div[4]/div[2]').click()
        cy.get('[textid="admin.bml_payments"] > div').click()

    })
    it('As a Admin the user can search the request with appointment id or patient name or provider name', function() {
       
        cy.xpath('//*[@id="root"]/div[2]/div/div[1]/nav/div[4]/div[2]').click()
        cy.get('[textid="admin.bml_payments"] > div').click()
        cy.get('.w-full[type=search]').type('william')


    })
    it('As a Admin the user can accept or deny the Bill me later request  by clicking on the "Confirm/Deny" button against that particular request', function() {
       
        cy.xpath('//*[@id="root"]/div[2]/div/div[1]/nav/div[4]/div[2]').click()
        cy.get('[textid="admin.bml_payments"] > div').click()
        cy.get('table>tbody>tr:nth-child(1)>td:nth-child(7)').click()


    })
    it('By clicking on the confirmation "confirm/Deny" button a confirmation modal will open and statu will be changed to payed', function() {
       
        cy.xpath('//*[@id="root"]/div[2]/div/div[1]/nav/div[4]/div[2]').click()
        cy.get('[textid="admin.bml_payments"] > div').click()
        cy.get('table>tbody>tr:nth-child(1)>td:nth-child(7)').click()
        cy.get('html > body > div:nth-of-type(3) > div > div > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > button:nth-of-type(2)').click()


    })
    it('By clicking on the Deny button the admin can reject the cash payment', function() {
       
        cy.xpath('//*[@id="root"]/div[2]/div/div[1]/nav/div[4]/div[2]').click()
        cy.get('[textid="admin.bml_payments"] > div').click()
        cy.get('table>tbody>tr:nth-child(1)>td:nth-child(7)').click()
        cy.get('html > body > div:nth-of-type(3) > div > div > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(3) > button:nth-of-type(1)').click()


    })
    
    
    
})
        


