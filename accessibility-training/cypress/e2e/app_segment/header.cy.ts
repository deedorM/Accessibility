describe("Accessibility Testing", () => {
    // SETUP
    before(() => {
      cy.visit("/");
      cy.injectAxe();
    })
  
    it("Targetted Accessibility test - header", () => {
      cy.checkA11y("header");
    })

})
  