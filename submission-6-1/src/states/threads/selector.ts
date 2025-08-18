import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../index';

const selectMappedThreads = createSelector(
  [(state: RootState) => state.threads, (state: RootState) => state.users],
  (threads, users) => {
    return threads.map((thread) => {
      const owner = users.find((user) => user.id === thread.ownerId);
      return {
        ...thread,
        ownerName: owner ? owner.name : 'anonym',
      };
    });
  }
);

export default selectMappedThreads;
