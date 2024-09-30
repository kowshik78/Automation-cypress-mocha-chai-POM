const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,ts}",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    },
    video: true, // Enable video recording
    screenshotOnRunFailure: true, // Capture screenshots on test failure
    videosFolder: 'cypress/videos', // Custom folder for video recordings
    screenshotsFolder: 'cypress/screenshots', // Custom folder for screenshots
    pageLoadTimeout: 1000000,  // Set page load timeout to 800 seconds (13.3 minutes)
    defaultCommandTimeout: 50000, // Set command timeout to 40 seconds

  },
})
