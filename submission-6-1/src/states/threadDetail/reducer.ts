import { ActionType, receiveThreadDetailActionCreator } from './action';

import type { ThreadDetail } from './types';
import type { UnknownAction } from '@reduxjs/toolkit';

type ThreadDetailAction = ReturnType<typeof receiveThreadDetailActionCreator>;

function threadDetailReducer(detailThread: ThreadDetail | null = null, action: ThreadDetailAction | UnknownAction) {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return (action as ThreadDetailAction).payload.detailThread;

    default:
      return detailThread;
  }
}

export default threadDetailReducer;
