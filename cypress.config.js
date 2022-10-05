const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'StatusReport',
  reporterOptions: {
    reportDir:
      '/Users/julio.husak/testecypress/Meus Testes/cypress/report/mochawesome-report',
    overwrite: true,
    html: true,
    json: false,
    timestamp: 'mmddyyyy_HHMMss',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
