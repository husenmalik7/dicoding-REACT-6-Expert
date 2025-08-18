import api from '../../utils/api';

import type { AppDispatch } from '../index';
import type { Leaderboard } from './types';

const ActionType = {
  RECEIVE_LEADERBOARDS: 'RECEIVE_LEADERBOARDS',
  SET_LOADING: 'SET_LOADING',
} as const;

function setLoading(isLoading: boolean) {
  return {
    type: ActionType.SET_LOADING,
    payload: {
      isLoading,
    },
  };
}

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
      dispatch(setLoading(true));
      const leaderboards = await api.getAllLeaderboards();
      dispatch(receiveLeaderboardsActionCreator(leaderboards));
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('An unexpected error occurred.');
      }
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export { ActionType, receiveLeaderboardsActionCreator, asyncReceiveLeaderboards, setLoading };
