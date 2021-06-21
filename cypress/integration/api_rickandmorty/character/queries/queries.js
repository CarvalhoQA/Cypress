export const query_character =
    `{
    character(id: 1) {
        id
        name
        status
        species
        type
        gender
        image
        created
        origin{
            id
            name
            dimension
        }
          location{
            id
            name
            type
        }
          episode{
            id
            name
          }
    }
}`