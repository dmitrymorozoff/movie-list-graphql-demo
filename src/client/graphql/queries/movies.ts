import gql from "graphql-tag";

export const allMoviesQuery = gql`
    {
        allMovies {
            id
            title
            poster
            director
            description
        }
    }
`;
