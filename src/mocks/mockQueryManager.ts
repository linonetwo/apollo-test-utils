import {
  QueryManager,
} from 'apollo-client/core/QueryManager';

import mockNetworkInterface, {
  MockedResponse,
} from './mockNetworkInterface';

import {
  createApolloStore,
} from 'apollo-client/store';

const defaultReduxRootSelector = (state: any) => state.apollo;

// Helper method for the tests that construct a query manager out of a
// a list of mocked responses for a mocked network interface.
export default (...mockedResponses: MockedResponse[]) => {
  return new QueryManager({
    networkInterface: mockNetworkInterface(...mockedResponses),
    store: createApolloStore(),
    reduxRootSelector: defaultReduxRootSelector,
    addTypename: false,
  });
};
