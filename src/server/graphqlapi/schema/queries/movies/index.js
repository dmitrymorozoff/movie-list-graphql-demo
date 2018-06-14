import { SubSchema } from "../../sub-schema";
import { moviesData } from "./data/movies";

const typeDefs = `
    type Movie {
    # Айдишник
    id: Int
    # Название
    title: String
    # Режиссер
    director: String
    # Описание
    description: String
    # В ролях
    stars: [String]
    # Жанр
    genres: [String]
    # Год выпуска
    year: Int
    # Путь к постеру
    poster: String
    }
    type Query {
        allMovies: [Movie]
        movie(id: Int!): Movie
    }
    type Mutation {
        createMovie(title: String!, director: String, description: String, stars: [String], genres: [String], year:Int, poster: String! ): Movie
    }
`;

export const moviesSubSchema = new SubSchema(typeDefs, {
    Query: {
        allMovies: () => {
            return moviesData;
        },
        movie: (root, { id }) => {
            return moviesData.filter(movie => {
                return movie.id === id;
            })[0];
        },
    },
    Mutation: {
        createMovie: (_, data) => {
            const newMovie = Object.assign({ id: moviesData.length + 1 }, data);
            moviesData.push(newMovie);
            return newMovie;
        },
    },
});
