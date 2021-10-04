import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${location}, Path: ${path}`
      );
      return `[GraphQL error]: Message: ${message}, Location: ${location}, Path: ${path}`;
    });

    if (networkError) console.error(`[Network error]: ${networkError}`);
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://azordev-dasher-db.herokuapp.com/v1/graphql",
  }),
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
