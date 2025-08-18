import { ActionType, receiveUsersActionCreator } from './action';

import type { User } from './types';
import type { UnknownAction } from '@reduxjs/toolkit';

type UsersAction = ReturnType<typeof receiveUsersActionCreator>;

function usersReducer(users: User[] = [], action: UsersAction | UnknownAction) {
  switch (action.type) {
    case ActionType.RECEIVE_USERS:
      return (action as UsersAction).payload.users;

    default:
      return users;
  }
}

export default usersReducer;
