/// <reference types="Cypress" />

describe('Download File and Assert the content', () => {
    it('Download & Extract Text', () => {
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg', 'mydownloads', 'example.jpg')
    });

    
});
