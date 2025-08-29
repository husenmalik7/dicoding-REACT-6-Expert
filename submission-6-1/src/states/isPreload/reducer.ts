import { ActionType } from './action';

interface IsPreloadAction {
  type: string;
  payload?: {
    isPreload: boolean;
  };
}

function isPreloadReducer(isPreload: boolean = true, action: IsPreloadAction) {
  switch (action.type) {
    case ActionType.SET_IS_PRELOAD:
      return action.payload?.isPreload ?? isPreload;

    default:
      return isPreload;
  }
}

export default isPreloadReducer;
