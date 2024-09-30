class LoginPage {
    elements = {
        emailInput: () => cy.get('#txtEmail'),
        passwordInput: () => cy.get('[placeholder="Password"]'),
        loginButton: () => cy.get('#btnLogin')
    }

    visit() {
        cy.visit("https://web.cloudapper.com", { timeout: 200000 });
        cy.title().should('contain', 'CloudApper');
    }

    login(email, password) {
        this.elements.emailInput().should("be.visible").type(email);
        this.elements.passwordInput().should("be.visible").type(password);
        this.elements.loginButton().should("be.visible").click();
    }
}

export const loginPage = new LoginPage();
