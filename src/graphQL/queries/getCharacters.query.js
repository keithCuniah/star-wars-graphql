import { gql } from '@apollo/client';

export const LOAD_CHARACTERS = gql`
  query GET_CHARACTERS {
    allPeople {
      people {
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
      }
    }
  }
`;
