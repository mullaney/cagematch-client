// https://docs.cypress.io/api/introduction/api.html
// Smoke tests for navigation

describe("Basic navigation", () => {
  it("Visits the app root url, and tests navigation", () => {
    cy.visit("/");
    cy.contains("h1", "Cage");
    cy.get('a[href*="rankings"]').click();
    cy.contains("h1", "Rankings");
    cy.get('a[href*="scores"]').click();
    cy.contains("h1", "Scores");
    cy.get('a[href*="rules"]').click();
    cy.contains("h1", "Rules");
    cy.get('a[href*="records"]').click();
    cy.contains("h1", "Records");
    cy.get('a[href*="archives"]').click();
    cy.contains("h1", "Archives");
  });
});
