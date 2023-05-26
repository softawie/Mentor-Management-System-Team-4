import * as types from "./actionTypes";

export function setIsLoggedIn(isLoggedIn) {
  return {
    type: types.IS_LOGED_IN,
    data: isLoggedIn,
  };
}

export function authenticate() {
  return {
    type: types.AUTHENTICATE,
  };
}

export function unAuthenticate() {
  return {
    type: types.UNAUTHENTICATE,
  };
}
