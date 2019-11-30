describe("Home page", () => {
  it("Visits the app root url, and tests navigation", () => {
    cy.visit("/");
    cy.contains("h1", "Cage");
    cy.contains("div", "most dangerous Improv show");
  });
});
