import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import { useSelector } from "react-redux";
import { defaultCookieExpires, userCookie } from "src/configs/app";
import authservice from "src/services/auth.service";

const auth = Cookies.get(userCookie);

const defaultState = { token: undefined, user: undefined };

const initialState = auth ? JSON.parse(auth) : defaultState;

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: { },
    extraReducers(builder) {
      builder
        .addMatcher(authservice.endpoints.login.matchFulfilled, (state, { payload }) => {
            let currentState = state;
            currentState = payload.user;
            Cookies.set(userCookie, JSON.stringify(currentState), {
              expires: defaultCookieExpires,
              domain: window.location.hostname,
              path: '/',
            });
            return currentState;
          })
        .addMatcher(authservice.endpoints.logout.matchFulfilled, (state) => {
          Cookies.remove(userCookie, {
            domain: window.location.hostname,
            path: '/',
          });
          let currentState = state;
          currentState = defaultState;
          return currentState;
        });
    },
  });
  
  export const useAuth = () => useSelector(state => state.auth);
  
  export default authReducer;
  