const loginUsers = require('../../fixtures/login-users.json')
const teamMembers = require('../../fixtures/team-members.json')
const {loginWithUser} = require("../../pages/login-page");
const {checkIsProjectsPageLoaded, openProject} = require("../../pages/projects-page");
const {openTeamTab} = require("../../pages/project/project-page");
const {makeRandomEmail} = require("../../support/data");
const {addTeamMember, checkMemberVisible, checkInvalidMember, checkMemberExists} = require("../../pages/project/team-tab");

describe('project - add member', () => {
    beforeEach(() => {
        loginWithUser(loginUsers.valid);
        checkIsProjectsPageLoaded();
        openProject(0);
        openTeamTab();
    })

    it('should add a valid member', () => {
        const randomEmail = makeRandomEmail(teamMembers.valid.email);
        addTeamMember(teamMembers.valid.first, teamMembers.valid.last, randomEmail);
        checkMemberExists(randomEmail)
    })

    it('should not add member when email is incomplete', () => {
        addTeamMember(teamMembers.incompleteEmail.first, teamMembers.incompleteEmail.last, teamMembers.incompleteEmail.email);
        checkInvalidMember();
    })

    it('should not add member when missing first name', () => {
        addTeamMember(teamMembers.missingFirst.first, teamMembers.missingFirst.last, teamMembers.missingFirst.email);
        checkInvalidMember();
    })

    it('should not add member when missing last name', () => {
        addTeamMember(teamMembers.missingLast.first, teamMembers.missingLast.last, teamMembers.missingLast.email);
        checkInvalidMember();
    })

    it('should not add member when missing email', () => {
        addTeamMember(teamMembers.missingEmail.first, teamMembers.missingEmail.last, teamMembers.missingEmail.email);
        checkInvalidMember();
    })


})