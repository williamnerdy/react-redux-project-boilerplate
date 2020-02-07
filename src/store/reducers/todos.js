import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action types & creators
 */
const { Types, Creators } = createActions(
  {
    load: ['id'],
    loadSuccess: []
  },
  { prefix: 'TODOS_' }
);

/**
 * Handlers
 */
const INITIAL_STATE = Immutable({
  loading: false,
  data: {}
});

const load = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: true,
  data: action.data
});

const loadSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  data: action.data
});

/**
 * Reducer
 */
const reducer = createReducer(INITIAL_STATE, {
  [Types.LOAD]: load,
  [Types.LOAD_SUCCESS]: loadSuccess
});

export { reducer, Types };
export default Creators;
