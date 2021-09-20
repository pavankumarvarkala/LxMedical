Cypress.Commands.add('getOTP', (email,) => {

    cy.visit('https://www.mailinator.com/');
    cy.get('#addOverlay').type(email);
    cy.get('#go-to-public').click();
    //cy.xpath("//table//td[contains(text(),'Verification code')][1]").should('be.visible').click();
    cy.get('td:contains(Verification code)').first().click()

    // cy.get('#html_msg_body').focus();
    // cy.get('#html_msg_body').scrollIntoView()
    // cy.get("//h1").scrollIntoView();



    cy.get('#html_msg_body').then(($iframe) => {
        const doc = $iframe.contents().get('')
        cy.wrap(doc.find('h1')).invoke('val').then(val=>{
        cy.log(val);
    })
    //    // cy.wrap(doc.find('a:contains(Reset Password)')).invoke('removeAttr', 'target').click({ force: true })

    //     cy.wait(20000)
     })
});