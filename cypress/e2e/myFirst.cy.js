/// <reference types="Cypress" />
/// <reference types="Cypress-xpath" />
import 'cypress-file-upload'
import { loginPage } from '../pageObjects/loginPage';
import { productInformationAdd } from '../pageObjects/productInformationAdd';
import { productPriceQtyStockAdd } from '../pageObjects/productPriceQtyStockAdd';
import {reStockAdd} from "../pageObjects/reStockAdd";


describe('My First Test', function()  {
    Cypress.on('uncaught:exception', function(err, runnable) {
        return false;
    });

    it('cloudapper', function() {
        const productName = "product 15";

        loginPage.visit();
        loginPage.login('m2sysqa.05+25@gmail.com', 'M2qatest@13');

        cy.get('body').should("be.visible");
        productInformationAdd.clickSalesButton();
        productInformationAdd.clickAddButton();
        productInformationAdd.addProductImage("Hello.png");
        productInformationAdd.addProductDetails(productName, "2323", "Description");
        productInformationAdd.selectMethod("Warranty Period","Product Model","Bundle Options");
        productInformationAdd.selectCategory("Category 5");

        productPriceQtyStockAdd.setPriceAndQuantity('10', '100');
        productPriceQtyStockAdd.setCalendarDate('30');
        productPriceQtyStockAdd.confirm();

        cy.wait(5000)
        reStockAdd.verifyFirstRowContains(productName)
        reStockAdd.selectFirstRow();
        reStockAdd.uploadRestockImage('Hello.png');
        reStockAdd.confirm();
    })
})