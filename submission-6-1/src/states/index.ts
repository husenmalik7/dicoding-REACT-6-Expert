import { configureStore } from '@reduxjs/toolkit';
import leaderboardsReducer from './leaderboards/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import threadDetailReducer from './threadDetail/reducer';

const store = configureStore({
  reducer: {
    leaderboards: leaderboardsReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    users: usersReducer,
  },
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export type { AppDispatch, RootState };

export { store };
