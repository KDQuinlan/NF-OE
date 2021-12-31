import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import typeDefs from './src/TypeDefs';
import resolvers from './src/Resolvers';

dotenv.config();

const startServer = async () => {
    const app = express();

    await mongoose.connect(process.env.DB_URI!);
    console.log('Mongoose connected...');

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await server.start();
    server.applyMiddleware({ app });
    app.listen({ port: process.env.PORT }, () =>
        console.log(`Server running on port ${process.env.PORT}`),
    );
};

startServer();
