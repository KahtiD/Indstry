import { gql } from 'apollo-boost';

export const LANDINGPAGE_QUERY = gql`
  {
    landingPage(where: {id: "ckbdnp2q01n7v01027e01cjkl"}) {
        id
        description {
          html
        }
        hero {
          body {
            html
          }
          image {
            url
          }
        } 
        personas {
          image {
            url
          }
          name
          description
          width
          height
        }
    } 
  }
`