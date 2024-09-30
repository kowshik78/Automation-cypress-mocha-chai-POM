<h1>Cypress Automation Framework for E-Commerce</h1>
<h2>web.cloudapper.com</h2>

This repository contains a Cypress-based test automation framework designed to test various product functionalities like product information, pricing, stock management, and file uploads for an e-commerce website.

## Framework Features
* Built using Cypress, with Mocha as the test runner and Chai for assertions.
* Dynamic handling of product information.
* Integration testing for adding product images, setting prices and quantities, and verifying product restocking.
## Prerequisites
* Node.js (v12 or higher)
* npm (v6 or higher)
* Cypress (v12 or higher)
## Project Setup
* Clone the repository:
```
git clone https://github.com/your-repo/cypress-ecommerce-automation.git
```
* Navigate into the project directory:
```
cd cypress-ecommerce-automation
```
* Install dependencies:
```
npm install
```
* Install Cypress:
```
npm install cypress --save-dev
```
* Install additional libraries:
```
npm install cypress-file-upload --save-dev
npm install cypress-xpath --save-dev
```
* Open Cypress test runner:
```
npx cypress open/run
```
## Configuration Setup 
**cypress.config.js**
```
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
```
**e2e.js**
```
import './commands'
require('cypress-xpath');
```
## Understanding the File structure
**1. loginPage.js**
* Handles the login functionality.
* Contains methods like visit() for opening the website and login() to perform user authentication.
  
**2. productInformationAdd.js**
* Manages adding product details such as images, description, and category.
* Functions like addProductImage() and addProductDetails() are used here.
  
**3. productPriceQtyStockAdd.js**
* Manages setting product prices and quantities.
* Methods include setPriceAndQuantity() and setCalendarDate() to specify price and stock values.
  
**4. reStockAdd.js**
* Manages restocking operations like verifying product details in the first row of the table and uploading files.
* Methods include verifyFirstRowContains(), selectFirstRow(), and uploadRestockImage().
  
**5. test.cy.js**
* This is the main Cypress test file where:
* It logs into the application.
* Adds a product with dynamic data.
* Verifies the restocked product in the list.
* Simulates file upload.

**5.1. Handling Uncaught Exceptions**

``
Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
``

## Mocha
* describe(): To group tests.
* it(): To define an individual test case.
```  
describe('My First Test', function() {
    it('cloudapper', function() {
        // Test steps here
    });
});
```
## Chai
* Existence: should('exist')
* Contain Text: should('contain', 'Text')
* Be Visible: should('be.visible')
* Check Length: should('have.length', 5)
```
cy.get('h1').should('contain.text', 'Product Added Successfully');
cy.get('.product-list').find('li').should('have.length', 5);
```

## Conclusion
* This framework is designed to streamline the automation of an e-commerce site’s product management functionality, allowing easy testing and scalability.
* With Mocha as the test runner and Chai as the assertion library, the project provides a robust test environment using Cypress.
