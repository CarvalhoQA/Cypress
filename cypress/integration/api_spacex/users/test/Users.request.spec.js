/// <reference types="cypress" />
import { insert_users, query_users, update_users, delete_users } from '../queries/queries'

describe('Endpoint Users SpaceX', () => {

    it('Inserir Usuário', () => {
        cy.request({
            url: 'https://api.spacex.land/graphql/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                query: insert_users
            },
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.data.insert_users.affected_rows).to.eq(1)
            expect(response.body.data.insert_users.returning[0].id).to.eq("82214492-f4b7-44e2-9bbc-4af09a81b57b")
            expect(response.body.data.insert_users.returning[0].name).to.eq("Nome 003")
            expect(response.body.data.insert_users.returning[0].rocket).to.eq("Foguete 003")
            expect(response.body.data.insert_users.returning[0].timestamp).to.is.not.null
            expect(response.body.data.insert_users.returning[0].twitter).to.eq("@N003")
        });
    });

    it('Consultar Usuário por ID', () => {
        cy.request({
            url: 'https://api.spacex.land/graphql/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                query: query_users
            },
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.data.users[0].id).to.eq("82214492-f4b7-44e2-9bbc-4af09a81b57b")
            expect(response.body.data.users[0].name).to.eq("Nome 003")
            expect(response.body.data.users[0].rocket).to.eq("Foguete 003")
            expect(response.body.data.users[0].timestamp).to.is.not.null
            expect(response.body.data.users[0].twitter).to.eq("@N003")
        });
    });

    it('Alterar Usuário', () => {
        cy.request({
            url: 'https://api.spacex.land/graphql/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                query: update_users
            },
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.data.update_users.affected_rows).to.eq(1)
            expect(response.body.data.update_users.returning[0].id).to.eq("77777774-f4b7-44e2-9bbc-4af09a81b57b")
            expect(response.body.data.update_users.returning[0].name).to.eq("Nome 006ALT")
            expect(response.body.data.update_users.returning[0].rocket).to.eq("Foguete 006ALT")
            expect(response.body.data.update_users.returning[0].timestamp).to.is.not.null
            expect(response.body.data.update_users.returning[0].twitter).to.eq("@N006ALT")
        });
    });
    it('Excluir Usuário', () => {
        cy.request({
            url: 'https://api.spacex.land/graphql/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                query: delete_users
            },
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.data.delete_users.affected_rows).to.eq(1)
            expect(response.body.data.delete_users.returning[0].id).to.eq("77777774-f4b7-44e2-9bbc-4af09a81b57b")
            expect(response.body.data.delete_users.returning[0].name).to.eq("Nome 006ALT")
            expect(response.body.data.delete_users.returning[0].rocket).to.eq("Foguete 006ALT")
            expect(response.body.data.delete_users.returning[0].twitter).to.eq("@N006ALT")

        });
    });
});