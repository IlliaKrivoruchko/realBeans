describe("Homepage", () => {
  beforeEach(() => {
    cy.enterStorePassword();
    cy.visit("/");
  });

  it("shows the RealBeans intro text", () => {
    cy.contains(
      "Since 1801, RealBeans has roasted premium coffee in Antwerp for Europe’s finest cafes. Ethically sourced beans, crafted with care."
    ).should("be.visible");
  });

  it("loads homepage", () => {
    cy.get("body").should("be.visible");
  });
});