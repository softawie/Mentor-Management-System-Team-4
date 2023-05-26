import * as types from "./actionTypes";

export function showLoader() {
  return {
    type: types.SHOWLOADER,
  };
}

export function hideLoader() {
  return {
    type: types.HIDELOADER,
  };
}
