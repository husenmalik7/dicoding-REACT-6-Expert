import api from '../../utils/api';

import type { AppDispatch } from '../index';
import type { ThreadDetail } from './types';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
};

function receiveThreadDetailActionCreator(detailThread: ThreadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      detailThread,
    },
  };
}

function asyncReceiveThreadDetail(threadId: string) {
  return async (dispatch: AppDispatch) => {
    try {
      const detailThread = await api.getThreadById(threadId);
      dispatch(receiveThreadDetailActionCreator(detailThread));
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('An unexpected error occurred.');
      }
    }
  };
}

export { ActionType, receiveThreadDetailActionCreator, asyncReceiveThreadDetail };
