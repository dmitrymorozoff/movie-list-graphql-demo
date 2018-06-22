import * as React from "react";
import { compose, graphql, QueryProps } from "react-apollo";
import { MovieCard } from "../../components/movie-card";
import { MovieDialog } from "../../components/movie-dialog";
import { allMoviesQuery } from "../../graphql/queries/movies";
import { IAllMoviesQuery, IMovie } from "../../graphql/types/query-types";
import { AddMovieButton } from "./components/add-movie-btn";
import { HeaderWrapper } from "./components/header-wrapper";
import { HomeWrapper } from "./components/home-wrapper";
import { MovieWrapper } from "./components/movie-wrapper";
import { Title } from "./components/title";

interface IProps {
    allMoviesQuery: IAllMoviesQuery & QueryProps;
}

interface IState {
    selectedMovieId: number;
    isOpenMovie: boolean;
}

class HomePage extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedMovieId: 1,
            isOpenMovie: false,
        };
    }

    public render() {
        const { selectedMovieId, isOpenMovie } = this.state;
        return (
            <HomeWrapper>
                <HeaderWrapper>
                    <Title>Watched Movie List</Title>
                    <AddMovieButton />
                </HeaderWrapper>
                <MovieWrapper>{this.getMovieCards()}</MovieWrapper>
                <MovieDialog
                    selectedMovieId={selectedMovieId}
                    isOpen={isOpenMovie}
                    onClose={this.onCloseMovieDialogHandler}
                />
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
        this.setState({
            isOpenMovie: true,
            selectedMovieId: id,
        });
    };

    private onCloseMovieDialogHandler = () => {
        this.setState({
            isOpenMovie: false,
        });
    };
}

const allMoviesQueryData = graphql(allMoviesQuery, { name: "allMoviesQuery" });

export const Home = compose(allMoviesQueryData)(HomePage as any);
