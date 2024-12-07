// Import the test data synchronously
const testData = require('../fixtures/truth_area_5.json');

describe('Search test', function() {

  const headers = ['Area', 'Address', 'Autocomplete'];
  const csvData = [];
  csvData.push(headers.join(';'));

  testData.addresses.forEach((addressData) => {
    const address = addressData.address;

    it(`tests address: "${address}"`, function() {
      const url = "http://localhost:3000/fundamentals";
      cy.visit(url);

      cy.get('#panel1a-header').each(($el, index) => {
        if (index === 0 && address === 'fail') {
          cy.wrap($el).should('contain.text', 'fail');
        }
        cy.wrap($el).invoke('text').then((text) => {
          csvData.push([`area1; ${address}; ${text.toUpperCase()}`]);
        });
      });
    });
    after(() => {
      cy.writeFile('cypress/output/bad_addresses.csv', csvData.join('\n'));
    });
  });
});