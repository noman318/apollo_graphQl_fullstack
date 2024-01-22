import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";

import cors from "cors";
import typeDefs from "./types/typeDefs";
import resolvers from "./resolvers/resolvers";

dotenv.config();

const PORT = Number(process.env.PORT) || 4000;

async function startServer() {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: "http://localhost:3000/",
      methods: "GET, POST,PUT, DELETE,PATCH",
    })
  );
  app.get("/", (req, res) => {
    res.send("Root Route Testing GraphQL");
  });
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  app.use("/graphql", expressMiddleware(server));
  app.listen(PORT, () =>
    console.log(`Server running on Port with GraphQl ${PORT}`)
  );
}
startServer();
