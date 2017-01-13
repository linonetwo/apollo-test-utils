import { ObservableQuery } from 'apollo-client/lib/src/core/ObservableQuery';
import { ApolloQueryResult } from 'apollo-client/lib/src/core/QueryManager';
import { Subscription } from 'apollo-client/lib/src/util/Observable';

import { wrap } from './wrap';

export function subscribeAndCount(done: MochaDone, observable: ObservableQuery,
    cb: (handleCount: number, result: ApolloQueryResult) => any): Subscription {
  let handleCount = 0;
  return observable.subscribe({
    next: wrap(done, result => {
      handleCount++;
      cb(handleCount, result);
    }),
    error: done,
  });
};
