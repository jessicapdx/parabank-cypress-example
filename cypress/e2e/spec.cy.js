const baseUrl = `${Cypress.config("baseUrl")}`;
const loginUrl = `${Cypress.env("loginUrl")}`;

describe("parabank login page", () => {
  before(() => {
    cy.visit(loginUrl);
  });

  it("successfully renders the login page", () => {
    cy.url().should("eq", `${baseUrl}${loginUrl}`);
  });
});
