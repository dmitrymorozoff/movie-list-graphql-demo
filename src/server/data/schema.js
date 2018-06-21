import { makeExecutableSchema, addMockFunctionsToSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

export const typeDefs = `
    type Movie {
    id: Int
    title: String
    director: String
    description: String
    stars: [String]
    genres: [String]
    year: Int
    poster: String
    }
    type Query {
        allMovies: [Movie]
        movie(id: Int!): Movie
    }
    type Mutation {
        createMovie(title: String!, director: String!, description: String!, stars: [String!]!, genres: [String!]!, year:Int!, poster: String! ): Movie
    }
    `;

export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
});
