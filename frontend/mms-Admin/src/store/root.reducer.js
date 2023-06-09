/* eslint-disable import/no-cycle */
import { combineReducers } from '@reduxjs/toolkit';
import api from 'src/services/api.service';
import auth from "./auth.reducer"
export default combineReducers(
    {
      [auth.name]: auth.reducer,
      [api.reducerPath]: api.reducer,
    },
  );