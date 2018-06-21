import gql from "graphql-tag";
import { movieFragments } from "../fragments/movie";

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

export const movieQuery = gql`
    query movie($id: Int!) {
        movie(id: $id) {
            ...movieFields
        }
    }
    ${movieFragments}
`;

export const createMovieMutation = gql`
    mutation createMovie(
        $title: String!
        $director: String
        $description: String
        $stars: [String]
        $genres: [String]
        $year: Int
        $poster: String!
    ) {
        createMovie(
            title: $title
            director: $director
            description: $description
            stars: $stars
            genres: $genres
            year: $year
            poster: $poster
        ) {
            id
            title
            poster
            director
            description
        }
    }
`;
