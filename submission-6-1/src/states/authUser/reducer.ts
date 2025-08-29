import { ActionType } from './action';

type AuthUser = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

function authUserReducer(authUser: AuthUser | null = null, action: any = {}) {
  switch (action.type) {
    case ActionType.SET_AUTH_USER:
      console.log(authUser);
      console.log(action.payload);

      return action.payload.authUser;

    case ActionType.UNSET_AUTH_USER:
      return null;

    default:
      return authUser;
  }
}

export default authUserReducer;
