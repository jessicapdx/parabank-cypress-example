const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://parabank.parasoft.com/parabank",
  },
  env: {
    //urls
    aboutUrl: "/about.htm",
    adminUrl: "/admin.htm",
    locationsUrl: "/locations.htm",
    loginUrl: "/index.htm",
    productsUrl: "/products.htm",
    servicesUrl: "/services.htm",
    //users
    defaultUsername: "john",
    defaultPass: "demo",
  },
});
