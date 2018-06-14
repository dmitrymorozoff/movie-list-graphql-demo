import * as React from "react";
import { graphql, QueryProps } from "react-apollo";
import { MovieCard } from "../../components/movie-card";
import { allMoviesQuery } from "../../graphql/queries/movies";
import { IAllMoviesQuery, IMovie } from "../../graphql/types/query-types";
import { AddMovieButton } from "./components/add-movie-btn";
import { HeaderWrapper } from "./components/header-wrapper";
import { HomeWrapper } from "./components/home-wrapper";
import { MovieWrapper } from "./components/movie-wrapper";
import { Title } from "./components/title";

interface IProps {
    data: IAllMoviesQuery & QueryProps;
}

class HomePage extends React.Component<IProps, {}> {
    public render() {
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
            data: { allMovies },
        }: any = this.props;
        // tslint:disable-next-line:no-console
        console.log(this.props);
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
export const Home = graphql(allMoviesQuery, {})(HomePage as any);
