const baseUrl = Cypress.config("baseUrl");
const fullName = Cypress.env("defaultFullName");
const loginUrl = Cypress.env("loginUrl");
const password = Cypress.env("defaultPass");
const username = Cypress.env("defaultUsername");

describe("parabank login page", () => {
  before(() => {
    cy.visit(loginUrl);
  });

  it("successfully renders the login page", () => {
    cy.login(username, password, fullName);
  });
});
