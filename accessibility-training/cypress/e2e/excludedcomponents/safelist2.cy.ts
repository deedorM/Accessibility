describe("Accessibility Testing", () => {
    // SETUP
    before(() => {
      cy.visit("/");
      cy.injectAxe();
    })
  
    it("Targetted Accessibility test - by safelisting", () => {
      cy.checkA11y(undefined, {
        rules:{
            //can be set to true or false
        "color-contrast":{enabled:false},
        "region":{enabled:false},
       "link-name":{enabled:false}
      }
    });

})
})

// If the company chooses not to fix the contrast issue 
// for any reason, we can exclude the locators and place it in another class.