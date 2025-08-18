import { ActionType, receiveLeaderboardsActionCreator, setLoading } from './action';

import type { Leaderboard } from './types';

interface LeaderboardsState {
  data: Leaderboard[];
  isLoading: boolean;
}

const initialState: LeaderboardsState = {
  data: [],
  isLoading: true,
};

type LeaderboardsAction = ReturnType<typeof receiveLeaderboardsActionCreator> | ReturnType<typeof setLoading>;

function leaderboardsReducer(state: LeaderboardsState = initialState, action: LeaderboardsAction): LeaderboardsState {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARDS:
      return {
        ...state,
        data: action.payload.leaderboards,
      };

    case ActionType.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };

    default:
      return state;
  }
}

export default leaderboardsReducer;
