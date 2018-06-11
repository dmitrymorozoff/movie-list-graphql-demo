import gql from "graphql-tag";
import * as React from "react";
import { graphql } from "react-apollo";

class App extends React.Component {
    public render() {
        // tslint:disable-next-line:no-console
        console.log("props", this.props);
        return <div className="App">Sample client for GraphQL</div>;
    }
}

const allMoviesQuery = gql`
    {
        allMovies {
            id
            title
            description
        }
    }
`;

export const AppWrapper = graphql(allMoviesQuery)(App);
