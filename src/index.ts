import { ApolloClient } from 'apollo-client';

function isApolloClient(client: any): boolean {
  return client instanceof ApolloClient;
}

export {
  isApolloClient
}
