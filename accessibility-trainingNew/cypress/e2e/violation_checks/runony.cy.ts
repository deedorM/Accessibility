describe("Accessibility Testing", () => {
    before(() => {
      cy.visit("/");
      cy.injectAxe();
    });
  
    it("Perform targeted accessibility checks for WCAG 2.0 criteria - by runonly checks", () => {
      cy.checkA11y(undefined, {
        runOnly: {
          type: "tag",
          values: ["wcag2a", "wcag2aa"],
        },
      });
    });
  });
  
  
  
  
  
  