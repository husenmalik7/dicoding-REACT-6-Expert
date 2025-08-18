import { ActionType, receiveUsersActionCreator } from './action';

import type { User } from './types';
import type { UnknownAction } from '@reduxjs/toolkit';

type UsersAction = ReturnType<typeof receiveUsersActionCreator>;
type UsersById = Record<string, User>;

function usersReducer(users: UsersById = {}, action: UsersAction | UnknownAction) {
  switch (action.type) {
    case ActionType.RECEIVE_USERS: {
      const usersArray = (action as UsersAction).payload.users;
      const usersById = usersArray.reduce<Record<string, User>>((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});

      return usersById;
    }

    default:
      return users;
  }
}

export default usersReducer;
