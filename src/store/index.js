import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import rootReducer from './ducks';
import rootSaga from './sagas';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

function configureStore(preloadedState = {}) {
  const middlewares = applyMiddleware(
    routerMiddleware(history), // for dispatching history actions
    sagaMiddleware
  );

  const store = createStore(
    rootReducer(history), // root reducer with router state
    preloadedState,
    compose(middlewares)
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export { history };
export default configureStore;
