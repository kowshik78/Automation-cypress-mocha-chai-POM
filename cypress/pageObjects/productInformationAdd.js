class ProductInformationAdd {
    elements = {
        salesQButton: () => cy.get('h4.card-title').contains('SalesQ').should('be.visible'),
        addButton: () => cy.get('[aria-label="Add"]'),

        uploadFileButton: () => cy.get(".box-add.required-empty-multi-media-container"),
        browseFile: () => cy.get(".dx-button-content").contains("Browse a file from your device"),

        productNameInput: () => cy.get("input[name=\"stringField4\"]"),
        productCodeInput: () => cy.get("input[name=\"stringField2\"]"),
        descriptionInput: () => cy.get("textarea[role=\"textbox\"]"),

        methodField: () => cy.get("#stringField16").should("be.visible"),
        methodOption1: (name1) => cy.contains(name1).should("be.visible"),
        methodOption2: (name2) => cy.contains(name2).should("be.visible"),
        methodOption3: (name3) => cy.contains(name3).should("be.visible"),

        categoryField: () => cy.contains('.dx-lookup-field','Select Category'),
        categoryOption: (name) => cy.contains('.dx-item .common-text-overflow-title', name)
    }

    clickSalesButton() {
        this.elements.salesQButton().should('be.visible').click();
    }

    clickAddButton() {
        this.elements.addButton().should('be.visible').click();
    }


    addProductImage(fileName) {
        this.elements.uploadFileButton().click();
        this.elements.browseFile().selectFile(`cypress/fixtures/${fileName}`, { action: "drag-drop" });
    }

    addProductDetails(name, code, description) {
        this.elements.productNameInput().should("be.visible").type(name);
        this.elements.productCodeInput().should("be.visible").type(code);
        this.elements.descriptionInput().should("be.visible").type(description);
    }

    selectMethod(method, method1, method2, method3) {
        this.elements.methodField().click();
        if (method1) {this.elements.methodOption1(method1).click();}
        if (method2) {
            this.elements.methodField().click();
            this.elements.methodOption2(method2).click();}
        if (method3) {
            this.elements.methodField().click();
            this.elements.methodOption3(method3).click();}
    }

    selectCategory(categoryName) {
        this.elements.categoryField().click();
        this.elements.categoryOption(categoryName).click();
    }
}

export const productInformationAdd = new ProductInformationAdd();
