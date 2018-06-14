import * as _ from "lodash";
import { makeExecutableSchema } from "graphql-tools";
import { moviesSubSchema } from "./queries/movies";

const generateMainSchema = schemas => {
    return _.reduce(
        schemas,
        (schema, s) => {
            return {
                typeDefs: [...schema.typeDefs, ...s.typeDefs],
                resolvers: _.merge(schema.resolvers, s.resolvers),
            };
        },
        { typeDefs: [], resolvers: {} },
    );
};

const schemaMembers = [moviesSubSchema];

export const schema = makeExecutableSchema(generateMainSchema(schemaMembers));
