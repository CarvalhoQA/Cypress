import { query_character } from '../queries/queries'

/// <reference types = "cypress"/>

function character() {
    return cy.request({
        method: 'POST',
        url: 'https://rickandmortyapi.com/graphql',
        body: {
            query: query_character
        },
    })
}

export { character };