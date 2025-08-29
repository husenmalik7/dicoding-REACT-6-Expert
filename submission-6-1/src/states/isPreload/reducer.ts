import { ActionType } from './action';

function isPreloadReducer(isPreload: boolean = true, action: any) {
  switch (action.type) {
    case ActionType.SET_IS_PRELOAD:
      return action.payload.isPreload;

    default:
      return isPreload;
  }
}

export default isPreloadReducer;
