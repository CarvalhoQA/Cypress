describe(' Teste To-do-list', () => {
    it('Cadastrar itens na lista;', () => {
        cy.visit('/')
        cy.get('[data-reactid=".0.0.1"]')
            .type('tarefa 1 {enter}')
            .type('tarefa 2 {enter}')
            .type('tarefa 3 {enter}')
            .type('tarefa 4 {enter}')
            .type('tarefa 5 {enter}')
            .type('tarefa 6 {enter}')

        //validar  
        cy.get('.todo-list li')
            .should('have.length', 6)
    })

    it('Marcar 1 item como completo;', () => {
        cy.contains('tarefa 1')
            .parent()
            .find('input[type=checkbox]')
            .check()

        cy.contains('tarefa 1')
            .parents('li')
            .should('have.class', 'completed')

    })

    it('Excluir itens da lista;', () => {
        cy.contains('tarefa 2')
            .parent()
            .find('.destroy')
            .click({ force: true });

        cy.contains('tarefa 3')
            .parent()
            .find('.destroy')
            .click({ force: true });

        cy.get('.todo-list li')
            .should('have.length', 4)
    })


    it('Selecionar o filtro ‘Completed’;', () => {
        cy.contains('Completed').click()
        cy.get('.todo-list li')
            .should('have.length', 1)

    })
    it('Estando com o filtro ‘All’ ativo clicar em ‘Clear completed’;', () => {
        cy.contains('All').click()
        cy.contains('Clear completed').click()

        cy.get('.todo-list li')
            .should('have.length', 3)
    })
})