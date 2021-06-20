import { query_episode } from '../queries/queries'

/// <reference types = "cypress"/>

function episode() {
    return cy.request({
        method: 'POST',
        url: 'https://rickandmortyapi.com/graphql',
        body: {
            query: query_episode
        },
    })
}
export { episode };