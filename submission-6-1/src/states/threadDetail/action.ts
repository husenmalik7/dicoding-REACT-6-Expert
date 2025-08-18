import api from '../../utils/api';

import type { AppDispatch } from '../index';
import type { Thread } from './types';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
};

function receiveThreadsActionCreator(threads: Thread[]) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function asyncReceiveThreads() {
  return async (dispatch: AppDispatch) => {
    try {
      const threads = await api.getAllThreads();
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('An unexpected error occurred.');
      }
    }
  };
}

export { ActionType, receiveThreadsActionCreator, asyncReceiveThreads };
