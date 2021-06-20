import * as location from '../request/POSTLocation.request'

describe('Endpoint Location Rick and Morty', () => {
    it('Listar Localidades Por ID', () => {
        location.location().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.location.id).to.eq("2");
            expect(response.body.data.location.name).to.eq("Abadango");
            expect(response.body.data.location.dimension).to.eq("unknown");
            expect(response.body.data.location.dimension).to.eq("unknown");
            expect(response.body.data.location.created).to.eq("2017-11-10T13:06:38.182Z");
            expect(response.body.data.location.residents).to.not.be.null;
        });
    });
});