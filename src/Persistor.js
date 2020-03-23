import { persistStore, persistReducer } from "redux-persist";
import store from "redux-persist/es/storage/session"; // defaults to Session Storage for web and AsyncStorage for react-native
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import logger from "redux-logger";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage: store
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default () => {
  let store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
  );
  let persistor = persistStore(store);
  return { store: store, persistor: persistor };
};
