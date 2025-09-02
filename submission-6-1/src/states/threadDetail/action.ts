import api from '../../utils/api';

import type { AppDispatch } from '../index';
import type { ThreadDetail, Comment } from './types';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  ADD_COMMENT: 'ADD_COMMENT',
};

function addCommentActionCreator(comment: Comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

function asyncAddComment({ threadId, content }: { threadId: string; content: string }) {
  return async (dispatch: AppDispatch) => {
    try {
      const comment = await api.createComment({ threadId, content });
      dispatch(addCommentActionCreator(comment));
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('An unexpected error occurred.');
      }
    }
  };
}

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

export { ActionType, receiveThreadDetailActionCreator, asyncReceiveThreadDetail, asyncAddComment };
