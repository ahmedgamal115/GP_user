import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from '../lib/apollo-client'
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={createApolloClient()}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
