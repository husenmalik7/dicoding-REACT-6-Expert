import { ActionType, receiveLeaderboardsActionCreator } from './action';

import type { Leaderboard } from './types';
import type { UnknownAction } from '@reduxjs/toolkit';

type LeaderboardsAction = ReturnType<typeof receiveLeaderboardsActionCreator>;

function leaderboardsReducer(leaderboards: Leaderboard[] = [], action: LeaderboardsAction | UnknownAction) {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARDS:
      return (action as LeaderboardsAction).payload.leaderboards;

    default:
      return leaderboards;
  }
}

export default leaderboardsReducer;
