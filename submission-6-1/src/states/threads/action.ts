import api from '../../utils/api';

import type { AppDispatch } from '../index';
import type { Thread } from './types';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREADS: 'ADD_THREADS',
};

function receiveThreadsActionCreator(threads: Thread[]) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(thread: Thread) {
  return {
    type: ActionType.ADD_THREADS,
    payload: {
      thread,
    },
  };
}

function asyncAddThread({ title, body, category }: { title: string; body: string; category: string }) {
  return async (dispatch: AppDispatch) => {
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('An unexpected error occurred.');
      }
    }
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

export { ActionType, receiveThreadsActionCreator, asyncReceiveThreads, asyncAddThread };
