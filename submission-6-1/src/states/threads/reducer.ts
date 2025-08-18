import { ActionType, receiveThreadsActionCreator } from './action';

import type { Thread } from './types';
import type { UnknownAction } from '@reduxjs/toolkit';

type ThreadsAction = ReturnType<typeof receiveThreadsActionCreator>;

function threadsReducer(threads: Thread[] = [], action: ThreadsAction | UnknownAction) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return (action as ThreadsAction).payload.threads;

    default:
      return threads;
  }
}

export default threadsReducer;
