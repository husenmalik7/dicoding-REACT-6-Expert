import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { postedAt } from '../../utils';

const selectMappedThreads = createSelector(
  [(state: RootState) => state.threads, (state: RootState) => state.users],
  (threads, usersById) => {
    return threads.map((thread) => {
      const owner = usersById[thread.ownerId];

      return {
        ...thread,
        ownerName: owner ? owner.name : 'anonym',
        postedAt: postedAt(thread.createdAt),
      };
    });
  }
);

export default selectMappedThreads;
