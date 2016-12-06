import { ObservableQuery } from 'apollo-client/core/ObservableQuery';
import { ApolloQueryResult } from 'apollo-client/core/QueryManager';
import { Subscription } from 'apollo-client/util/Observable';

import wrap from './wrap';

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
