export class SubSchema {
    constructor(typeDefs, resolvers) {
        if (!Array.isArray(typeDefs)) typeDefs = [typeDefs];
        this.typeDefs = typeDefs;
        this.resolvers = resolvers;
    }
}
