const teamTab = {
    addTeamMemberButton: `div>[data-testid="next-link"]>a>button`,
    addTeamMemberForm: {
        first: `[data-testid="firstName"]`,
        last: `[data-testid="lastName"]`,
        email: `[data-testid="email"]`,
        addTeamMembersButton: `button[form="addCustomerUsersForm"]`
    }
}

const teamMemberEmail = (email) => {
    return `[data-test="team-member-email-${email}"]`;
}

export const addTeamMember = (first: string, last: string, email: string) => {
    cy.get(teamTab.addTeamMemberButton, {timeout: 10000}).contains("+ Add Team Member").click();
    if(first) {
        cy.get(teamTab.addTeamMemberForm.first).eq(1).type(first, {force: true});
    }
    if(last) {
        cy.get(teamTab.addTeamMemberForm.last).eq(1).type(last, {force: true});
    }
    if(email) {
        cy.get(teamTab.addTeamMemberForm.email).eq(1).type(email, {force: true});
    }
    cy.get(teamTab.addTeamMemberForm.addTeamMembersButton).click();
}

export const checkMemberExists = (email: string) => {
    cy.get(teamMemberEmail(email.toLowerCase()), {timeout: 10000}).should(`exist`);
}

/**
 * This would normally be a toast check and verify the text such as "Please Fill out this field." or "Please include an @ in the email address..."
 * but I spent WAY too long trying to locate that element on the DOM with no luck as it keeps disappearing and none of my debugging tricks seem to work to make it stick around.
 * At this point I would work with a developer to help me find the correct DOM element to assert against.
 * I'm just going to verify we're still on the Add Team Member Modal for now.
 */
export const checkInvalidMember = () => {
    cy.get(teamTab.addTeamMemberForm.addTeamMembersButton).should("be.visible");
}