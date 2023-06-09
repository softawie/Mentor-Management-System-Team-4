import { configureStore } from '@reduxjs/toolkit';
import reducer from './root.reducer';
import api from 'src/services/api.service';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api.middleware]),
});

export default store;
