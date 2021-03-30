import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import { reducer as formReducer } from "redux-form";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { offline } from "redux-offline";
import offlineConfig from "redux-offline/lib/defaults";
import submissionReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["form"]
};

const middlewares = [];

if (process.env.NODE_ENV !== "prod") {
  middlewares.push(createLogger({
    level: "info"
  }));
}

const reducers = combineReducers({
  submissions: submissionReducer,
  form: formReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(...middlewares),
    offline(offlineConfig)
  )
);

export const persistor = persistStore(store);
