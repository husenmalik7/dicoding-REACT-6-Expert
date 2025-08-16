import api from '../../utils/api';

import type { AppDispatch } from '../index';
import type { Leaderboard } from './types';

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
};

function receiveLeaderboardsActionCreator(leaderboards: Leaderboard[]) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

function asyncReceiveLeaderboards() {
  return async (dispatch: AppDispatch) => {
    try {
      const leaderboards = await api.getAllLeaderboards();
      dispatch(receiveLeaderboardsActionCreator(leaderboards));
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('An unexpected error occurred.');
      }
    }
  };
}

export { ActionType, receiveLeaderboardsActionCreator, asyncReceiveLeaderboards };
