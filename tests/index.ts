import 'isomorphic-fetch';
import { assert } from 'chai';

describe('Test', () => {
  it('should be running', () => {
    assert.equal(true, true);
  });
});

import './QueryManager';
import './client';
import './batching';
import './scheduler';
import './mutationResults';
import './optimistic';
import './fetchMore';
import './mockNetworkInterface';
import './graphqlSubscriptions';
import './batchedNetworkInterface';
import './ObservableQuery';
import './subscribeToMore';
import './customResolvers';
