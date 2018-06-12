export interface IAllMoviesQuery {
    allMovies: IMovie[] | null;
    movie: any;
}

export interface IMovie {
    id: number;
    title: string;
    poster: string;
    director: string;
    genres: string[];
    description: string;
    stars: string[];
    year: number;
}
