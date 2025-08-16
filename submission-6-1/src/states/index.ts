import { configureStore } from '@reduxjs/toolkit';
import leaderboardsReducer from './leaderboards/reducer';

const store = configureStore({
  reducer: {
    leaderboards: leaderboardsReducer,
  },
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export type { AppDispatch, RootState };

export { store };
