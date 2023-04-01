const loggedInUser = "p.smallText";
const passwordInput = 'input[name="password"]';
const submitBtn = 'input[value="Log In"]';
const usernameInput = 'input[name="username"]';

Cypress.Commands.add(
  "login",
  (username: string, password: string, fullName: string) => {
    cy.get(usernameInput).type(username);
    cy.get(passwordInput).type(password);
    cy.get(submitBtn).click();
    cy.get(loggedInUser).should("have.text", `Welcome ${fullName}`);
  }
);
