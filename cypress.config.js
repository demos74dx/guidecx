const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "zueq92",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    login_url: 'https://app.staging.guidecx.io/auth/login'
  }
});
