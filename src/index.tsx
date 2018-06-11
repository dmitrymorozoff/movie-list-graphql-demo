import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";
import { AppWrapper } from "./client/App";
import { config } from "./server/config";

const client = new ApolloClient({
    link: new HttpLink({ uri: `http://localhost:${config.port}/graphql` }),
    cache: new InMemoryCache(),
} as any);

ReactDOM.render(
    <ApolloProvider client={client}>
        <AppWrapper />
    </ApolloProvider>,
    document.getElementById("root") as HTMLElement,
);
