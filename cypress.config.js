const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  chromeWebSecurity: false,
  projectId: 'o5mcfa',
  defaultCommandTimeout: 20000,
  execTimeout: 120000,
  pageLoadTimeout: 200000,
  requestTimeout: 20000,
  responseTimeout: 30000,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'report',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    
    
  },
})
