// data
const baseUrl = Cypress.config("baseUrl");
const fullName = Cypress.env("defaultFullName");
const loginUrl = Cypress.env("loginUrl");
const password = Cypress.env("defaultPass");
const username = Cypress.env("defaultUsername");

// elements
const emptyLoginError = "Please enter a username and password.";
const incorrectLoginError = "The username and password could not be verified.";
const loggedInUser = "p.smallText";

describe("parabank login page", () => {
  beforeEach(() => {
    cy.visit(loginUrl);
  });

  it("successfully logs in with valid user", () => {
    cy.login(username, password);
    cy.get(loggedInUser).should("have.text", `Welcome ${fullName}`);
  });

  it("denies access to non-existent users", () => {
    cy.login("unknown", "user");
    cy.get(".error").should("have.text", incorrectLoginError);
  });

  it("denies access with incorrect password", () => {
    cy.login(username, "incorrectpass");
    cy.get(".error").should("have.text", incorrectLoginError);
  });

  it("displays an error with empty username and password values", () => {
    cy.login("{enter}", "{enter}");
    cy.get(".error").should("have.text", emptyLoginError);
  });
});
