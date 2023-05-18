import * as types from "./actionTypes";

export function setLoading() {
  return {
    type: types.SETLOADING,
  };
}

export function stopLoading() {
  return {
    type: types.STOPLOADING,
  };
}
