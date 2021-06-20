export const query_location = `{
    location(id: 2){
    id
    name
    type
    dimension
    residents{
      id
      name
    }
    created
    }
    }`