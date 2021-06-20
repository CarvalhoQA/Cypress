export const query_episode = `{
    episode(id: 1){
      id
      name
      air_date
      episode
      created
      characters{
        id
    } 
    }
    }`