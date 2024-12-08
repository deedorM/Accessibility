describe("Accessibility Testing", () => {
    // SETUP
    before(() => {
      cy.visit("/");
      cy.injectAxe();
    })
  
    it("Targetted Accessibility test - body", () => {
      cy.checkA11y("body");
    })

})
  