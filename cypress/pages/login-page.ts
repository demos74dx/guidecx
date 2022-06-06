const loginPage = {
    email: `input[name="email"]`,
    password: `input[name="password"]`,
    loginButton: `.MuiButtonBase-root`,
    invalidToast: `#client-snackbar`,
}

export const loginWithUser = (user) => {
    login(user.email, user.password)
}

export const login = (email: string, password: string) => {
    cy.visit(Cypress.env('login_url')) //stored as env var in cypress.config.js
    if(email) {
        cy.get(loginPage.email).type(email);
    }
    if(password) {
        cy.get(loginPage.password).type(password);
    }
    cy.get(loginPage.loginButton).click()
}

export const checkFailedLoginToast = () => {
    cy.get(loginPage.invalidToast)
        .should(`be.visible`)
        .should('have.text', "Verify you have the correct username and password");
}

/**
 * This would normally be a toast check and verify the text such as "Please Fill out this field." or "Please include an @ in the email address..."
 * but I spent WAY too long trying to locate that element on the DOM with no luck as it keeps disappearing and none of my debugging tricks seem to work to make it stick around.
 * At this point I would work with a developer to help me find the correct DOM element to assert against.
 * I'm just going to verify we're still on the login page for now.
 */
export const checkIncompleteLogin = () => {
    cy.get(loginPage.email).should('be.visible');
}