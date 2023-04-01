import { login } from "./commands/login.ts";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      login(
        username: string,
        password: string,
        fullName: string
      ): Chainable<JQuery<HTMLElement>>;
    }
  }
}
