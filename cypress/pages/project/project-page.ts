const projectPage = {
 tabs: {
     team: `[data-testid="project-team-tab"]>span`
 }
}

export const openTeamTab = () => {
    cy.get(projectPage.tabs.team, {timeout: 10000}).eq(0).click();
}