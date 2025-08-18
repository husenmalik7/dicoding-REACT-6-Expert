import { ActionType, receiveLeaderboardsActionCreator, setLoading } from './action';

import type { Leaderboard } from './types';
import type { UnknownAction } from '@reduxjs/toolkit';

interface LeaderboardsState {
  data: Leaderboard[];
  isLoading: boolean;
}

const initialState: LeaderboardsState = {
  data: [],
  isLoading: true,
};

type LeaderboardsAction = ReturnType<typeof receiveLeaderboardsActionCreator> | ReturnType<typeof setLoading>;

function leaderboardsReducer(
  state: LeaderboardsState = initialState,
  action: LeaderboardsAction | UnknownAction
): LeaderboardsState {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARDS:
      return {
        ...state,
        data: (action as ReturnType<typeof receiveLeaderboardsActionCreator>).payload.leaderboards,
      };

    case ActionType.SET_LOADING:
      return {
        ...state,
        isLoading: (action as ReturnType<typeof setLoading>).payload.isLoading,
      };

    default:
      return state;
  }
}

export default leaderboardsReducer;
