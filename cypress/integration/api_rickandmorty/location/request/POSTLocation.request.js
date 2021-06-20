import { query_location } from '../queries/queries'
/// <reference types = "cypress"/>

function location() {
    return cy.request({
        method: 'POST',
        url: 'https://rickandmortyapi.com/graphql',
        body: {
            query: query_location
        },
    })
}

export { location };