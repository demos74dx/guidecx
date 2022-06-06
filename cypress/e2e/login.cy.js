const loginUsers = require('../fixtures/login-users')
const {login, checkFailedLoginToast, checkFailedLogin, checkIncompleteLogin, loginWithUser} = require("../pages/login-page");
const {checkIsProjectsPageLoaded} = require("../pages/projects-page");

describe('login', () => {
    it('should load projects page with valid credentials', () => {
        loginWithUser(loginUsers.valid);
        checkIsProjectsPageLoaded();
    })

    it('should show failed login toast with invalid email', () => {
        loginWithUser(loginUsers.invalidEmail);
        checkFailedLoginToast();
    })

    it('should show failed login toast with invalid password', () => {
        loginWithUser(loginUsers.invalidPassword)
        checkFailedLoginToast();
    })

    it('should show invalid email toast with incomplete email', () => {
        loginWithUser(loginUsers.incompleteEmail)
        checkIncompleteLogin()
    })

    it('should show missing value toast with missing email', () => {
        loginWithUser(loginUsers.missingEmail)
        checkIncompleteLogin()
    })

    it('should show missing value toast with missing password', () => {
        loginWithUser(loginUsers.missingPassword)
        checkIncompleteLogin()
    })
})