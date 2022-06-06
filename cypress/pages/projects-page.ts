const projectsPage = {
    header: {
        title: `.Base_textXl__p9pFr`
    }
}

export const checkIsProjectsPageLoaded = () => {
    cy.get(projectsPage.header.title, { timeout: 10000 }).should('be.visible')
}