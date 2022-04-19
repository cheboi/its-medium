import { applyMiddleware, compose, createStore } from "redux";
import reducer from './reducer';
import thunk from 'redux-thunk';
import { routerMiddleware } from "connected-react-router";

import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    reducer(history),
    preloadedState,
    compose(applyMiddleware(routerMiddleware(history), thunk))
  );

  return store;
}