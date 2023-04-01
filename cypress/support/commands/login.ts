const passwordInput = 'input[name="password"]';
const submitBtn = 'input[value="Log In"]';
const usernameInput = 'input[name="username"]';

Cypress.Commands.add("login", (username: string, password: string) => {
  cy.get(usernameInput).type(username);
  cy.get(passwordInput).type(password);
  cy.get(submitBtn).click();
});
