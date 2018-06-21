import gql from "graphql-tag";
export const movieFragments = gql`
    fragment movieFields on Movie {
        id
        title
        director
        description
        stars
        genres
        year
        poster
    }
`;
