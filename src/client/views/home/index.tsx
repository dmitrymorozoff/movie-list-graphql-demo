import * as React from "react";
import { compose, graphql, QueryProps } from "react-apollo";
import { MovieCard } from "../../components/movie-card";
import { allMoviesQuery, movieQuery } from "../../graphql/queries/movies";
import { IAllMoviesQuery, IMovie, IMovieQuery } from "../../graphql/types/query-types";
import { AddMovieButton } from "./components/add-movie-btn";
import { HeaderWrapper } from "./components/header-wrapper";
import { HomeWrapper } from "./components/home-wrapper";
import { MovieWrapper } from "./components/movie-wrapper";
import { Title } from "./components/title";

interface IProps {
    allMoviesQuery: IAllMoviesQuery & QueryProps;
    movieQuery: IMovieQuery & QueryProps;
}

class HomePage extends React.Component<IProps, {}> {
    public render() {
        // tslint:disable-next-line:no-console
        console.log("RATA", this.props);
        return (
            <HomeWrapper>
                <HeaderWrapper>
                    <Title>Watched Movie List</Title>
                    <AddMovieButton />
                </HeaderWrapper>
                <MovieWrapper>{this.getMovieCards()}</MovieWrapper>
            </HomeWrapper>
        );
    }

    private getMovieCards = () => {
        const {
            allMoviesQuery: { allMovies },
        }: any = this.props;
        return (
            allMovies &&
            allMovies.map((movie: IMovie) => {
                const { title, description, poster, director, id } = movie;
                return (
                    <MovieCard
                        id={id}
                        title={title}
                        director={director}
                        description={description}
                        poster={poster}
                        key={id.toString()}
                        onClick={this.onLearnMoreClickHandler}
                    />
                );
            })
        );
    };

    private onLearnMoreClickHandler = (id: number) => {
        // tslint:disable-next-line:no-console
        console.log("movie id:", id, this.props);
    };
}

const allMoviesQueryData = graphql(allMoviesQuery, { name: "allMoviesQuery" });
const movieQueryData = graphql(movieQuery, { name: "movieQuery", options: () => ({ variables: { id: 1 } }) });

export const Home = compose(
    allMoviesQueryData,
    movieQueryData,
)(HomePage as any);
