// Import the test data synchronously
const testData = require('../fixtures/truth_area_5.json');

describe('Search test', function() {

  testData.addresses.forEach((addressData) => {
    const address = addressData.address;

      it(`tests address: "${address}"`, function() {
        const url = "http://localhost:3000/fundamentals";
        cy.visit(url);

        cy.get('#panel1a-header').each(($el, index) => {
          if (index === 0) {
            cy.wrap($el).should('contain.text', 'Describe');
        } else if (index === 1) {
            cy.wrap($el).should('contain.text', 'blocks');
        } else if (index === 2) {
            cy.wrap($el).should('contain.text', 'Commands');
        } else if (index === 3) {
            cy.wrap($el).should('contain.text', 'Getting');
        } else if (index === 4) {
            cy.wrap($el).should('contain.text', 'chaining');
        } else if (index === 5) {
            cy.wrap($el).should('contain.text', 'single');
        } else if (index === 6) {
            cy.wrap($el).should('contain.text', 'fail');
        } else if (index === 7) {
            cy.wrap($el).should('contain.text', 'custom');
        }
        });
      });
  });
});