export const resolvers = {
    Query: {
        healthCheck: () => {
            return "I'm healthy!";
        },
    },
};
