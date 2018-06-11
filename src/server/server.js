import express from "express";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import bodyParser from "body-parser";
import { config, graphQLConfig } from "./config";
import { schema } from "./data/schema";

const app = express();

app.use(
    "/graphiql",
    graphiqlExpress({
        endpointURL: graphQLConfig.endpointURL,
    }),
);
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

app.listen(4000, () => console.log(`Server running on port ${config.port}`));
