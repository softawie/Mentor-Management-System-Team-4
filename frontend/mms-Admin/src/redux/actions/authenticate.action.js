import * as types from "./actionTypes";

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
