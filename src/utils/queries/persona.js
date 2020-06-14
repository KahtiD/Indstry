import { gql } from 'apollo-boost';

export const PERSONA_QUERY = gql`
  {
    personasConnection {
      edges {
        node {
          name
          image {
            url
          }
        }
      }
    }
  }
`