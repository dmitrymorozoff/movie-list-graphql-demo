import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import "normalize.css/normalize.css";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import * as ReactDOM from "react-dom";
import "react-toastify/dist/ReactToastify.css";
import { App } from "./client/App";
import "./client/styles/global.css";
import { config } from "./server/config";

const client = new ApolloClient({
    link: new HttpLink({ uri: `http://localhost:${config.port}/graphql` }),
    cache: new InMemoryCache(),
    connectToDevTools: true,
} as any);

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById("root") as HTMLElement,
);
