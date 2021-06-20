import * as episode from '../request/POSTEpisode.request'

describe('Endpoint Episodes Rick and Morty', () => {
    it('Listar Episódios Por ID', () => {
        episode.episode().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.episode.id).to.eq("1");
            expect(response.body.data.episode.name).to.eq("Pilot");
            expect(response.body.data.episode.air_date).to.eq("December 2, 2013");
            expect(response.body.data.episode.episode).to.eq("S01E01");
            expect(response.body.data.episode.created).to.eq("2017-11-10T12:56:33.798Z");
            expect(response.body.data.episode.characters).to.not.be.null;
        });
    });
});