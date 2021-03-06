import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
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

import booksReducer from "../actions/books/booksSlice";
import uiReducer from "../actions/ui/uiSlice";
import userReducer from "../actions/user/userSlice";

const userPersistConfig = {
  key: "user",
  storage,
  blacklist: ["errorMsg", "successMsg"],
};

export const store = configureStore({
  reducer: {
    books: booksReducer,
    ui: uiReducer,
    user: persistReducer(userPersistConfig, userReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);
