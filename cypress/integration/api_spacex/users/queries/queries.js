export const insert_users = `
mutation{
    insert_users(objects: {id: "82214492-f4b7-44e2-9bbc-4af09a81b57b", name: "Nome 003", rocket: "Foguete 003", twitter: "@N003"}, on_conflict: {constraint: users_pkey, update_columns: id}) {
      affected_rows
      returning {
        id
        name
        rocket
        timestamp
        twitter
      }
    }
  }
`;

export const query_users = `
{
    users(distinct_on: id, where: {id: {_eq: "82214492-f4b7-44e2-9bbc-4af09a81b57b"}}) {
      id
      name
      rocket
      timestamp
      twitter
    }
  }  
`;

export const update_users = `
mutation{
    update_users(_set: {id: "77777774-f4b7-44e2-9bbc-4af09a81b57b", name: "Nome 006ALT", rocket: "Foguete 006ALT", twitter: "@N006ALT"}, where: {id: {_eq: "82214492-f4b7-44e2-9bbc-4af09a81b57b"}}) {
      affected_rows
      returning {
        id
        name
        rocket
        twitter
      }
    }
  }
`;

export const delete_users = `
mutation{
    delete_users(where: {id: {_eq: "77777774-f4b7-44e2-9bbc-4af09a81b57b"}}) {
      affected_rows
      returning {
        id
        name
        rocket
        twitter
      }
    }
  }
`;