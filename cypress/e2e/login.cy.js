const loginUsers = require('../fixtures/login-users')
const {login, checkFailedLoginToast, checkFailedLogin, checkIncompleteLogin} = require("../pages/login-page");
const {checkIsProjectsPageLoaded} = require("../pages/projects-page");

describe('login', () => {
    it('should load projects page with valid credentials', () => {
        login(loginUsers.valid.email, loginUsers.valid.password);
        checkIsProjectsPageLoaded();
    })

    it('should show failed login toast with invalid email', () => {
        login(loginUsers.invalidEmail.email, loginUsers.invalidEmail.password);
        checkFailedLoginToast();
    })

    it('should show failed login toast with invalid password', () => {
        login(loginUsers.invalidPassword.email, loginUsers.invalidPassword.password);
        checkFailedLoginToast();
    })

    it('should show invalid email toast with incomplete email', () => {
        login(loginUsers.incompleteEmail.email, loginUsers.incompleteEmail.password);
        checkIncompleteLogin()
    })

    it('should show missing value toast with missing email', () => {
        login(loginUsers.missingEmail.email, loginUsers.missingEmail.password);
        checkIncompleteLogin()
    })

    it('should show missing value toast with missing password', () => {
        login(loginUsers.missingPassword.email, loginUsers.missingPassword.password);
        checkIncompleteLogin()
    })

})