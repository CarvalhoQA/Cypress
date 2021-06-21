import * as character from '../request/POSTCharacter.request'

describe('Endpoint Character Rick and Morty', () => {
    it('Listar Personagens Por ID', () => {
        character.character().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.character.name).to.eq("Rick Sanchez");
            expect(response.body.data.character.status).to.eq("Alive");
            expect(response.body.data.character.species).to.eq("Human");
            expect(response.body.data.character.gender).to.eq("Male");
            expect(response.body.data.character.image).to.eq("https://rickandmortyapi.com/api/character/avatar/1.jpeg");
            expect(response.body.data.character.type).to.eq("");
            expect(response.body.data.character.origin).to.not.be.null;
            expect(response.body.data.character.location.id).to.eq("20");
            expect(response.body.data.character.location.name).to.eq("Earth (Replacement Dimension)");
            expect(response.body.data.character.location.type).to.eq("Planet");
            expect(response.body.data.character.episode).to.not.be.null;
        });
    });
});