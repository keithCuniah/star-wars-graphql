import { gql } from '@apollo/client';

export const GET_CHARACTER_DETAIL = gql`
  query GET_PERSON($id: ID!) {
    person(id: $id) {
      id
      name
      gender
      homeworld {
        id
        name
      }
      species {
        id
        name
      }
      filmConnection {
        films {
          id
          title
        }
      }
    }
  }
`;
