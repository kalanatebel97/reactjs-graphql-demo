import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Create a new Apollo Client instance with the URI for the GraphQL endpoint which returns countries
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

// Define a wrapper component that uses ApolloProvider to provide the Apollo Client instance to its children
const ApolloAppProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default ApolloAppProvider;
