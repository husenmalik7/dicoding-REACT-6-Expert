import type { AnyAction } from '@reduxjs/toolkit';
import { ActionType } from './action';
import type { AuthUser } from './types';

type Action =
  | { type: typeof ActionType.SET_AUTH_USER; payload: { authUser: AuthUser } }
  | { type: typeof ActionType.UNSET_AUTH_USER };

function authUserReducer(authUser: AuthUser | null = null, action: Action | AnyAction): AuthUser | null {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      return action.payload.authUser;

    case ActionType.UNSET_AUTH_USER:
      return null;

    default:
      return authUser;
  }
}

export default authUserReducer;
