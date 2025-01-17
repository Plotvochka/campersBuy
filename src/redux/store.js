import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import campersReducer from "./campers/slice";

const persistAuthConfig = {
  key: "campers",
  storage,
  whitelist: ["campers"],
};

const persistedAuthReducer = persistReducer(persistAuthConfig, campersReducer);

export const store = configureStore({
  reducer: {
    campers: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
