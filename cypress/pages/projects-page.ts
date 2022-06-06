const projectsPage = {
    header: {
        title: `.Base_textXl__p9pFr`
    },
    projects: `[data-testid="project-name"]`
}

export const checkIsProjectsPageLoaded = () => {
    cy.get(projectsPage.header.title, { timeout: 10000 }).should('be.visible')
}

export const openProject = (index: number) => {
    cy.get(projectsPage.projects).eq(index).click();
    cy.wait(2500); //seems to be some loading time before tabs are clickable in projects
}