import * as types from "./actionTypes";

export function setToken(token) {
  return {
    type: types.SETTOKEN,
    data: token || null,
  };
}

export function clearToken() {
  return {
    type: types.CLEARTOKEN,
  };
}
