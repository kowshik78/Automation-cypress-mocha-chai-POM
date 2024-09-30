class ReStockAdd {
    elements = {
        firstRowData: () => cy.get('tr[aria-rowindex="1"] td').eq(2),
        firstRowIcon: () => cy.get('tr.dx-row.dx-data-row').eq(0).find('i.dx-icon.las.la-hand-pointer'),
        reStockProduct: () => cy.get('div.dx-button-content').last(),
        quantity: () => cy.get("#numericField0 input").last().type("15", {force:true}),

        uploadFileButton: () => cy.get(".box-add").first(),
        browseFile: () => cy.get(".dx-button-content").contains("Browse a file from your device"),
        confirmButton: () => cy.xpath("//*[@id=\"actionBtns\"]/dx-button[2]/div")
    }

    verifyFirstRowContains(expectedData) {
        this.elements.firstRowData().should('contain', expectedData);
    }

    selectFirstRow() {
        this.elements.firstRowIcon().scrollIntoView().click({force: true});
        this.elements.reStockProduct().click();
        this.elements.quantity().click();
    }

    uploadRestockImage(fileName) {
        this.elements.uploadFileButton().click();
        this.elements.browseFile().selectFile(`cypress/fixtures/${fileName}`, {action: "drag-drop"});
    }

    confirm() {
        this.elements.confirmButton().should("be.visible").click();
    }
}

export const reStockAdd = new ReStockAdd();
