// Import the test data synchronously
const testData = require('../fixtures/truth_area_5.json');

describe('Search test', function() {

  testData.addresses.forEach((addressData) => {
    const address = addressData.address;

      it(`tests address: "${address}"`, function() {
        const url = "http://localhost:3000/fundamentals";
        cy.visit(url);

        cy.get('#panel1a-header').each(($el, index) => {
          if (index === 0 && address === 'fail') {
            cy.wrap($el).should('contain.text', 'fail');
          }
        });
      });
  });
});