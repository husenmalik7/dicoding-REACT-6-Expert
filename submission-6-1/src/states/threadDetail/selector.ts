import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { postedAt } from '../../utils';

const selectMappedThreads = createSelector([(state: RootState) => state.threadDetail], (threadDetail) => {
  return {
    ...threadDetail,
    postedAt: postedAt(threadDetail?.createdAt ?? ''),
  };
});

export default selectMappedThreads;
