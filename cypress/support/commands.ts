Cypress.Commands.add("enterStorePassword", () => {
  cy.visit("/password");

  cy.get('input[type="password"]').type(Cypress.env("shopifyPassword"));
  cy.get('button[type="submit"]').click();

  cy.url().should("not.include", "/password");
});