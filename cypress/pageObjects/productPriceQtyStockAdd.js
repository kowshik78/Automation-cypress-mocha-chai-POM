class ProductPriceQtyStockAdd {
    elements = {
        quantityInput: () => cy.get('input[aria-valuetext="No data"][class="dx-texteditor-input"]').first(),
        priceInput: () => cy.get("input[aria-valuetext=\"No data\"][class=\"dx-texteditor-input\"]").last(),

        unitDropdown: () => cy.contains('.dx-lookup-field', 'Select Unit of Quantity'),
        unitDropdownAdd: () => cy.xpath("//*[@id=\"body\"]/div[2]/div/div[2]/div/span/dx-button/div"),
        unitQuantity: () => cy.get("input[name=\"stringField0\"]").should("be.visible").type("9"),
        saveButton: () => cy.contains('.dx-button-text', 'Save'),

        calendarIcon: () => cy.xpath("//dx-date-box//div/div[2]/div/div/div"),
        calendarDate: (day) => cy.contains("div.dx-calendar-body", day),
        confirmButton: () => cy.xpath("//*[@id=\"actionBtns\"]/dx-button[2]/div")
    }

    setPriceAndQuantity(quantity, price) {
        this.elements.quantityInput().type(quantity).should('have.value', quantity);
        this.elements.priceInput().type(price).should('have.value', price);

        this.elements.unitDropdown().click();
        this.elements.unitDropdownAdd().click();
        this.elements.unitQuantity().click();
        this.elements.saveButton().click();
    }

    setCalendarDate(day) {
        this.elements.calendarIcon().scrollIntoView().should("be.visible").click();
        this.elements.calendarDate(day).click();
    }

    confirm() {
        this.elements.confirmButton().should("be.visible").click();
    }
}

export const productPriceQtyStockAdd = new ProductPriceQtyStockAdd();
