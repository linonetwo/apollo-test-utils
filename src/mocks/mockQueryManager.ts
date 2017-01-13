import {
  QueryManager,
} from 'apollo-client/lib/src/core/QueryManager';

import {
  MockedResponse,
  mockNetworkInterface
} from './mockNetworkInterface';

import {
  createApolloStore,
} from 'apollo-client/lib/src/store';

const defaultReduxRootSelector = (state: any) => state.apollo;

// Helper method for the tests that construct a query manager out of a
// a list of mocked responses for a mocked network interface.
export const mockQueryManager = (...mockedResponses: MockedResponse[]) => {
  return new QueryManager({
    networkInterface: mockNetworkInterface(...mockedResponses),
    store: createApolloStore(),
    reduxRootSelector: defaultReduxRootSelector,
    addTypename: false,
  });
};
